import Vue from "vue";
import Vuex from "vuex";
import querystring from "querystring";
import {
  getCookie,
  delCookie,
  setCookie,
  loadScript,
  selectors,
  proxyServers,
} from "./util";
import http from "./util/http";

Vue.use(Vuex);

let HOST = localStorage.getItem("proxy_host");
if (!proxyServers.some((item) => item.host === HOST)) {
  localStorage.removeItem("proxy_host");
  HOST = proxyServers[0].host;
}

// let temmeConvert = 'client'
// if (localStorage.getItem("temmeConvert")) {
//     temmeConvert = localStorage.getItem("temmeConvert")
// } else {
//     localStorage.setItem("temmeConvert", temmeConvert);
// }
let isLogin = !!getCookie("cdb3_auth");
let webSiteList = JSON.parse(localStorage.getItem("webSiteList") || "[]");
let webSite = getCookie("webSite") || webSiteList[0];
let debug = localStorage.getItem("debug") === "true";
if (debug) {
  loadScript("https://wechatfe.github.io/vconsole/lib/vconsole.min.js").then(
    () => {
      new window.VConsole();
    }
  );
}

export default new Vuex.Store({
  state: {
    isLoading: false,
    debug,
    // temmeConvert,
    discuz: {
      formhash: "",
      HOST,
      isLogin,
      webSiteList,
      webSite,
      userInfo: {
        username: "",
        password: "",
        QA: "",
        creditList: [],
      },
      signInfo: {
        isSigned: false,
        tid: null,
      },
    },
  },
  mutations: {
    SET_HOST(state, HOST) {
      state.discuz.HOST = HOST;
    },
    // SET_TEMMECONVERT(state, STATUS) {
    //     state.temmeConvert = STATUS
    // },
    SET_LOADING_STATUS(state, STATUS) {
      state.isLoading = STATUS;
    },
    UPDATE_DISCUZ(state, info) {
      if (info.webSite) {
        setCookie("webSite", info.webSite);
      }
      Object.assign(state.discuz, info);
    },
  },
  actions: {
    logout() {
      delCookie("cdb3_auth");
      sessionStorage.clear();
      location.reload();
    },
    switchProxy({ commit, state }) {
      let HOST = proxyServers[0].host;
      let index = proxyServers.findIndex(
        (item) => item.host === state.discuz.HOST
      );
      if (index < proxyServers.length - 1) {
        HOST = proxyServers[index + 1].host;
      }
      localStorage.setItem("proxy_host", HOST);
      commit("SET_HOST", HOST);
    },
    // switchTemmeConvert({ commit, state }) {
    //     let STATUS = state.temmeConvert === "client" ? 'server' : "client";
    //     localStorage.setItem("temmeConvert", STATUS);
    //     commit('SET_TEMMECONVERT', STATUS)
    // },
    async submitPost({ commit, state }, httpConfig) {
      let {
        discuz: { HOST },
      } = state;
      let postData = {
        httpConfig: {
          method: "post",
          responseType: "arraybuffer",
        },
        encoding: "gbk",
      };
      Object.assign(postData.httpConfig, httpConfig);
      commit("SET_LOADING_STATUS", true);
      let res = await http.post(`${HOST}/api/advancedProxy`, postData);
      commit("SET_LOADING_STATUS", false);
      return res;
    },
    async submitReply(
      { dispatch, state, getters },
      { fid, tid, message = "", subject = "" }
    ) {
      let {
        isLoading,
        discuz: { formhash },
      } = state;
      let { targetHost } = getters;
      if (isLoading || !message) {
        return;
      }
      let httpConfig = {
        url: `${targetHost}post.php?action=reply&fid=${fid}&tid=${tid}&extra=page%3D1&replysubmit=yes`,
        data: querystring.stringify({
          formhash,
          message,
          subject,
        }),
      };
      await dispatch("submitPost", httpConfig);
    },
    async dailySignIn({ dispatch, state, getters }) {
      let {
        isLoading,
        discuz: {
          userInfo: { username },
          formhash,
          signInfo,
        },
      } = state;
      let { targetHost } = getters;
      if (isLoading) {
        return;
      }
      let httpConfig = {};
      let message = `ID: ${username}\r\n日期: ${new Date().Format(
        "yyyy.M.dd"
      )}\r\n心情: ......`;
      if (!signInfo.tid) {
        // 主题帖签到
        Object.assign(httpConfig, {
          url: `${targetHost}post.php?action=newthread&fid=420&extra=page%3D1&topicsubmit=yes`,
          data: querystring.stringify({
            formhash,
            message,
            frombbs: 1,
            typeid: 797,
            selecttypeid: 797,
            readperm: 101,
            subject: `${username}/${new Date().getMonth() + 1}月份/打卡签到帖`,
          }),
        });
      } else {
        // 回复帖签到
        Object.assign(httpConfig, {
          url: `${targetHost}post.php?action=reply&fid=420&tid=${signInfo.tid}&extra=&replysubmit=yes`,
          data: querystring.stringify({
            formhash,
            message,
            subject: "",
          }),
        });
      }
      await dispatch("submitPost", httpConfig);
      signInfo.isSigned = true;
    },
    async monthSignIn({ dispatch, state, getters }) {
      if (
        confirm("确认上报上月签到数据吗?") &&
        confirm("再次确认") &&
        confirm("三次确认")
      ) {
        let {
          discuz: {
            formhash,
            userInfo: { username },
          },
        } = state;
        let { targetHost } = getters;
        let lastMonthSignInfo = await dispatch("getLastMonthSignInfo");
        let httpConfig = {
          url: `${targetHost}post.php?action=reply&fid=420&tid=8186986&extra=page%3D1&replysubmit=yes`,
          data: querystring.stringify({
            formhash,
            subject: "",
            message: `ID: ${username}\r\n签到次数: ${
              lastMonthSignInfo.count
            }\r\n签到链接: [bbs]${encodeURIComponent(
              `thread-${lastMonthSignInfo.tid}-1-1.html`
            )}[/bbs]`,
            fid: 420,
            wysiwyg: 0,
          }),
        };
        await dispatch("submitPost", httpConfig);
        alert("上报成功!");
      }
    },
    async getPageData(
      { commit, state },
      { url, selector, HOST = state.discuz.HOST }
    ) {
      let postData = {
        httpConfig: {
          url,
          method: "get",
          responseType: "arraybuffer",
        },
        encoding: "gbk",
        selector,
      };
      commit("SET_LOADING_STATUS", true);
      let {
        data: { data },
      } = await http.post(`${HOST}/api/html2Json`, postData);
      commit("SET_LOADING_STATUS", false);
      return data;
    },
    async getLastMonthSignInfo({ dispatch, state, getters }) {
      let {
        discuz: {
          userInfo: { username },
          formhash,
        },
      } = state;
      let { targetHost } = getters;
      let postData = {
        httpConfig: {
          url: `${targetHost}search.php`,
          data: `formhash=${formhash}&srchtxt=${username}&srchuname=&searchsubmit=true&srchtype=title&srchfilter=all&srchtypeid=&srchfrom=0&before=&orderby=lastpost&ascdesc=desc&srchfid%5B%5D=all`,
          method: "post",
          responseType: "arraybuffer",
        },
        encoding: "gbk",
        selector: selectors.search,
      };
      let {
        data: {
          data: { threadList },
        },
      } = await http.post(`${state.discuz.HOST}/api/html2Json`, postData);
      let now = new Date();
      let month = now.getMonth();
      return new Promise(async (resolve) => {
        for (let index = 0; index < threadList.length; index++) {
          const { title, tid, href, date } = threadList[index];
          if (
            title == `${username}/${month || 12}月份/打卡签到帖` &&
            new Date(date).Format("yyyy") === new Date().Format("yyyy")
          ) {
            let pageData = await dispatch("getPageData", {
              url: `${targetHost}${href}`,
              selector: selectors.thread,
            });
            resolve({
              title,
              tid,
              count: pageData.pageInfo.total,
            });
          }
        }
      });
    },
  },
  getters: {
    targetHost: (state) => {
      return `http://${state.discuz.webSite}/bbs/`;
    },
  },
});
