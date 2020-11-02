import { querystring, toast, confirm, pageCache } from "../utils/util";
import selectors from "../utils/html2JsonSelector";
import proxyServerList from "../utils/proxyServerList";
import http from "../utils/http";

let proxyPrefix = proxyServerList[0].prefix
let temmeConvert = 'server'
if (wx.getStorageSync("temmeConvert")) {
  temmeConvert = wx.getStorageSync("temmeConvert")
} else {
  wx.setStorageSync("temmeConvert", temmeConvert)
}
let isLogin = !!wx.getStorageSync("cdb3_auth")
let webSiteList = wx.getStorageSync("webSiteList") || []
let webSite = wx.getStorageSync("webSite") || webSiteList[0]

let isLoading = false

export default {
  /**
   * model的全局唯一命名，是全局state中注册的key，可用于获取model state，触发model action
   */
  namespace: 'discuz',
  /**
   * state是model初始值，优先级如下：initial state < plugin state < model state，理论上可以是任意的值，但多数情况下，我们希望这是一个javascript的对象
   */
  state: {
    proxyServerList,
    temmeConvert,
    formhash: "",
    proxyPrefix,
    isLogin,
    webSiteList,
    webSite,
    userInfo: {
      username: "",
      password: "",
      QA: "",
      creditList: []
    },
    signInfo: {
      isSigned: false,
      tid: null,
    }
  },
  /**
   * 应用初始化调用app.start()或者app.setup()时触发，主要设计用于处理本模块中的初始化工作，支持async, await异步语法
   * put  用于触发同步action及异步action，支持await等待返回结果
   *      put({ type: 'actionName' }) // 触发本model中的action
   *      const result = await put({ type: 'asyncActionName' }) // 触发本model中的异步action
   *      put({ type: 'modelName/actionName' }) // 触发外部model的action
   *      put({ type: 'modelName/asyncActionName' }) // 触发外部model中的异步action
   * select 用于获取本model中的state
   *      const modelState = select() 或者 const count = select(state => state.count)
   * selectAll 用于获取全局state
   *      const globalState = selectAll() 或者 const modelState = selectAll(state => state['modelName'])
   */
  async setup({ put, select, selectAll }) {
    console.log('discuz init')
  },
  /**
   * 用于定义异步action，支持async，await
   */
  effects: {
    logout(action, { put, select, selectAll }) {
      wx.removeStorageSync("cdb3_auth")
      pageCache.clear()
      put({ type: 'UPDATE_DISCUZ', payload: { isLogin: false } })
    },
    switchTemmeConvert(action, { put, select, selectAll }) {
      let STATUS = select().temmeConvert === "client" ? 'server' : "client";
      wx.setStorageSync("temmeConvert", STATUS)
      put({ type: 'UPDATE_DISCUZ', payload: { temmeConvert: STATUS } })
    },
    async submitPost({ payload: httpConfig }, { put, select, selectAll }) {
      let { proxyPrefix } = select();
      let postData = {
        httpConfig: {
          method: "post",
          responseType: "arraybuffer"
        },
        encoding: "gbk"
      };
      Object.assign(postData.httpConfig, httpConfig)
      wx.showLoading({
        title: '加载中...',
      })
      isLoading = true
      let res = await http.post({ url: `${proxyPrefix}/api/advancedProxy`, data: postData });
      wx.hideLoading()
      isLoading = false
      return res
    },
    async submitReply({ payload: { fid, tid, message = "", subject = "" } }, { put, select, selectAll }) {
      let { formhash, webSite } = select();
      let targetPrefix = `http://${webSite}/bbs/`
      if (isLoading || !message) {
        return;
      }
      let httpConfig = {
        url: `${targetPrefix}post.php?action=reply&fid=${fid}&tid=${tid}&extra=page%3D1&replysubmit=yes`,
        data: querystring.stringify({
          formhash,
          message,
          subject
        })
      }
      await put({ type: 'submitPost', payload: httpConfig })
    },
    async dailySignIn({ payload }, { put, select, selectAll }) {
      let { userInfo: { username }, formhash, webSite, signInfo } = select();
      let targetPrefix = `http://${webSite}/bbs/`
      if (isLoading) {
        return;
      }
      let httpConfig = {};
      let message = `ID: ${username}\r\n日期: ${new Date().Format("yyyy.M.dd")}\r\n心情: ......`
      if (!signInfo.tid) {
        // 主题帖签到
        Object.assign(httpConfig, {
          url: `${targetPrefix}post.php?action=newthread&fid=420&extra=page%3D1&topicsubmit=yes`,
          data: querystring.stringify({
            formhash,
            message,
            frombbs: 1,
            typeid: 797,
            selecttypeid: 797,
            readperm: 101,
            subject: `${username}/${new Date().getMonth() + 1}月份/打卡签到帖`
          })
        });
      } else {
        // 回复帖签到
        Object.assign(httpConfig, {
          url: `${targetPrefix}post.php?action=reply&fid=420&tid=${signInfo.tid}&extra=&replysubmit=yes`,
          data: querystring.stringify({
            formhash,
            message,
            subject: ""
          })
        });
      }
      await put({ type: 'submitPost', payload: httpConfig })
      signInfo.isSigned = true
      put({ type: 'UPDATE_DISCUZ', payload: { signInfo: Object.assign({}, signInfo) } })
    },
    async monthSignIn({ payload }, { put, select, selectAll }) {
      let tid = wx.getStorageSync('tid') || '8186986'
      try {
        if (new Date().getDate() > 10) {
          toast('每月1-10号才可以签到')
          return
        }
        if (await confirm("确认上报上月签到数据吗?") && await confirm("再次确认") && await confirm("三次确认")) {
          let {
            formhash,
            userInfo: { username },
            webSite
          } = select();
          let targetPrefix = `http://${webSite}/bbs/`
          let lastMonthSignInfo = await put({ type: 'getLastMonthSignInfo' })
          let httpConfig = {
            url: `${targetPrefix}post.php?action=reply&fid=420&tid=${tid}&extra=page%3D1&replysubmit=yes`,
            data: querystring.stringify({
              formhash,
              subject: "",
              message: `ID: ${username}\r\n签到次数: ${lastMonthSignInfo.count}\r\n签到链接: [bbs]${encodeURIComponent(`thread-${lastMonthSignInfo.tid}-1-1.html`)}[/bbs]`,
              fid: 420,
              wysiwyg: 0
            })
          }
          await put({ type: 'submitPost', payload: httpConfig })
          toast("上报成功!");
        }
      } catch (error) {

      }
    },
    async getPageData({ payload: { url, selector } }, { put, select, selectAll }) {
      let postData = {
        httpConfig: {
          url,
          method: "get",
          responseType: "arraybuffer"
        },
        encoding: "gbk",
        selector
      };
      wx.showLoading({
        title: '加载中...',
      })
      isLoading = true
      let { data } = await http.post({ url: `${select().proxyPrefix}/api/html2Json`, data: postData });
      // wx.hideLoading()
      isLoading = false
      return data
    },
    async getLastMonthSignInfo({ payload }, { put, select, selectAll }) {
      let { userInfo: { username }, formhash, webSite, proxyPrefix } = select();
      let targetPrefix = `http://${webSite}/bbs/`
      let postData = {
        httpConfig: {
          url: `${targetPrefix}search.php`,
          data: `formhash=${formhash}&srchtxt=${username}&srchuname=&searchsubmit=true&srchtype=title&srchfilter=all&srchtypeid=&srchfrom=0&before=&orderby=lastpost&ascdesc=desc&srchfid%5B%5D=all`,
          method: "post",
          responseType: "arraybuffer"
        },
        encoding: "gbk",
        selector: selectors.search
      };
      let { data } = await http.post({ url: `${proxyPrefix}/api/html2Json`, data: postData });
      let lastMonthSignInfo = {}
      let now = new Date()
      let month = now.getMonth()
      for (let index = 0; index < data.length; index++) {
        const { title, count, tid } = data[index];
        if (title == `${username}/${month || 12}月份/打卡签到帖`) {
          lastMonthSignInfo = {
            title,
            tid,
            count: ++count
          }
          break
        }
      }
      return lastMonthSignInfo
    }
  },
  /**
   * 用于定义同步action，也是唯一可修改redux state的入口
   */
  reducers: {
    UPDATE_DISCUZ({ payload: newState }, state) {
      if (newState.webSite) {
        wx.setStorageSync('webSite', newState.webSite)
      }
      return { ...state, ...newState }
    },
  },
}