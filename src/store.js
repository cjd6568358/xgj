import Vue from 'vue'
import Vuex from 'vuex'
import { getCookie, delCookie, setCookie, loadScript } from "./util";
import { HOST1, HOST2 } from "./config";

Vue.use(Vuex)

let HOST = localStorage.getItem("api_host") || HOST1
let temmeConvert = '客户端'
if (localStorage.getItem("temme_convert")) {
    temmeConvert = decodeURIComponent(localStorage.getItem("temme_convert"))
} else {
    localStorage.setItem("temme_convert", encodeURIComponent(temmeConvert));
}
let isLogin = !!getCookie("cdb3_auth")
let webSiteList = JSON.parse(localStorage.getItem("webSiteList") || '[]')
let webSite = getCookie("webSite") || webSiteList[0]
let debug = localStorage.getItem("debug") === 'true'
if (debug) {
    loadScript('https://wechatfe.github.io/vconsole/lib/vconsole.min.js').then(() => {
        new window.VConsole();
    })
}

export default new Vuex.Store({
    state: {
        isLoading: false,
        debug,
        temmeConvert,
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
        SET_TEMMECONVERT(state, STATUS) {
            state.temmeConvert = STATUS
        },
        SET_LOADING_STATUS(state, STATUS) {
            state.isLoading = STATUS
        },
        UPDATE_DISCUZ(state, info) {
            if (info.webSite) {
                setCookie('webSite', info.webSite)
            }
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
        },
        switchTemmeConvert({ commit, state }) {
            let STATUS = state.temmeConvert === "客户端" ? '服务端' : "客户端";
            localStorage.setItem("temme_convert", encodeURIComponent(STATUS));
            commit('SET_TEMMECONVERT', STATUS)
        }
    },
    getters: {
        targetHost: state => {
            return `http://${state.discuz.webSite}/bbs/`;
        }
    }
})