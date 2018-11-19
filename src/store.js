import Vue from 'vue'
import Vuex from 'vuex'
import { getCookie, delCookie } from "./util";
import { HOST1, HOST2 } from "./config";

Vue.use(Vuex)

let HOST = localStorage.getItem("api_host") || HOST1
let isLogin = !!getCookie("cdb3_auth")
let webSiteList = JSON.parse(localStorage.getItem("webSiteList") || '[]')
let webSite = getCookie("webSite") || webSiteList[0]

export default new Vuex.Store({
  state: {
    isLoading: false,
    discuz: {
      HOST,
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
        formhash: "",
        isSigned: false,
        tid: null,
        prevMonthSignThreadLastPostUrl: ""
      }
    }
  },
  mutations: {
    SET_HOST(state, HOST) {
      state.discuz.HOST = HOST
    },
    SET_LOADING_STATUS(state, STATUS) {
      state.isLoading = STATUS
    },
    UPDATE_DISCUZ(state, info) {
      Object.assign(state.discuz, info)
    },
  },
  actions: {
    logout() {
      delCookie("cdb3_auth");
      sessionStorage.clear();
      location.reload();
    },
    switchHost({ commit, state }) {
      let HOST = state.discuz.HOST === HOST1 ? HOST2 : HOST1;
      localStorage.setItem("api_host", HOST);
      commit('SET_HOST', HOST)
    }
  },
  getters: {
    targetHost: state => {
      return `http://${state.discuz.webSite}/bbs/`;
    }
  }
})
