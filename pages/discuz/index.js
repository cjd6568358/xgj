// pages/discuz/index.js
import selectors from "../../utils/html2JsonSelector";
import { dispatcher } from '../../utils/zoro.weapp.js'
import { connect } from '../../utils/redux.weapp.js'
import { pageCache, querystring } from '../../utils/util.js'
import http from '../../utils/http.js'
let { discuz: { logout, UPDATE_DISCUZ, switchProxy, getPageData, dailySignIn, monthSignIn } } = dispatcher
const config = connect(({ discuz: { isLogin, HOST, PLATOM, signInfo, userInfo, webSite, proxyServerList } }) => ({ isLogin, HOST, PLATOM, signInfo, userInfo, webSite, proxyServerList }))({
  /**
   * 页面的初始数据
   */
  data: {
    areaList: [],
    isOwner: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('openid') === 'oZ_Zn5KcVjk5CyWfgHLm4T8MQ_3s') {
      this.setData({
        isOwner: true
      })
    }
  },
  logout,
  dailySignIn,
  monthSignIn,
  switchProxy,
  async login() {
    let { HOST, webSite, userInfo: { username, password, QA } } = this.data;
    let targetHost = `http://${webSite}/bbs/`
    if (username && password) {
      let QAarr = QA.split(",");
      let questionid = (QAarr.length > 1 && QAarr[0]) || null;
      let answer = (QAarr.length > 1 && QAarr[1]) || null;
      let formData = {
        formhash: "30b7da0e",
        cookietime: "315360000",
        loginfield: "username",
        questionid,
        answer,
        username,
        password,
        userlogin: "true"
      };
      if (!questionid || !answer) {
        delete formData.questionid;
        delete formData.answer;
      }
      let postData = {
        httpConfig: {
          url: `${targetHost}logging.php?action=login&loginsubmit=true`,
          method: "post",
          responseType: "arraybuffer",
          data: querystring.stringify(formData)
        },
        encoding: "gbk"
      };
      wx.showLoading({
        title: '加载中...',
      })
      await http.post({ url: `${HOST}/api/advancedProxy`, data: postData });
      wx.hideLoading()
      let isLogin = !!wx.getStorageSync("cdb3_auth")
      if (isLogin) {
        UPDATE_DISCUZ({ isLogin, webSite })
        this.checkSigned();
        this.getIndexPageData();
      }
    }
  },
  inputChange({ currentTarget: { dataset: { key } }, detail: { value } }) {
    if (key == "webSite") {
      UPDATE_DISCUZ({ webSite: value })
    } else {
      this.data.userInfo[key] = value
      let newUserInfo = Object.assign({}, this.data.userInfo)
      UPDATE_DISCUZ({ userInfo: newUserInfo })
    }

  },
  async checkSigned() {
    let { webSite, signInfo } = this.data;
    let url = `http://${webSite}/bbs/my.php`;
    let selector = selectors.my;
    let pageData = await getPageData({ url, selector });
    let { formhash, username, recentReply, recentTopics } = pageData;
    recentTopics &&
      recentTopics.forEach(item => {
        if (
          item &&
          item.title ==
          `${username}/${new Date().getMonth() +
          1}月份/打卡签到帖`
        ) {
          if (
            item.lastPost.includes(
              new Date().Format("yyyy-M-d")
            )
          ) {
            signInfo.isSigned = true;
          } else {
            signInfo.tid = item.tid;
          }
        }
      });
    UPDATE_DISCUZ({ signInfo: Object.assign({}, signInfo), formhash })
    if (this.data.areaList.length) {
      wx.hideLoading()
    }
  },
  async getIndexPageData() {
    let { webSite } = this.data;
    let targetHost = `http://${webSite}/bbs/`
    let url = `${targetHost}index.php`;
    let selector = selectors.index;
    let pageData = {};
    if (pageCache.has(url)) {
      pageData = pageCache.get(url)
    } else {
      pageData = await getPageData({ url, selector });
      pageCache.set(url, pageData)
    }
    let { creditList, username, areaList } = pageData
    if (!username) {
      logout();
      wx.hideLoading()
    } else {
      let userInfo = Object.assign({}, this.data.userInfo, { creditList, username });
      UPDATE_DISCUZ({ userInfo })
      this.setData({
        areaList
      }, () => {
        wx.hideLoading()
      })
    }
  },
  routerToForum({ currentTarget: { dataset: { path } } }) {
    let { webSite } = this.data;
    let url = `http://${webSite}/bbs/` + path
    wx.navigateTo({
      url: '/pages/discuz/forum?url=' + encodeURIComponent(url),
    })
  },
  routerToMy() {
    wx.navigateTo({
      url: '/pages/discuz/my'
    })
  },
  async updateWebSiteList() {
    let gfwProxyServers = this.data.proxyServerList.filter(item => item.gfw);
    let HOST =
      gfwProxyServers[
        Math.floor(Math.random() * gfwProxyServers.length)
      ].host;
    let url = `http://www.oznewspaper.com/`;
    let selector = selectors.webSiteList;
    let pageData = await getPageData({ url, selector, HOST });
    let webSiteList = [];
    pageData.webSiteList.forEach(webSite => {
      webSiteList.push(webSite.replace("\n", "").replace(/ .*/g, ""));
    });
    wx.setStorageSync("webSiteList", webSiteList)
    UPDATE_DISCUZ({ webSiteList })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let { signInfo, isLogin } = this.data
    if (isLogin) {
      if (!signInfo.isSigned) {
        this.checkSigned();
      }
      this.getIndexPageData();
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
Page(config)