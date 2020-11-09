import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import openModal from './components/Modal/index'
import Toast from './components/Toast/index'
import { initApp } from './util'
import './registerServiceWorker'

Vue.config.errorHandler = function (err, vm, info) {
    // handle error
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    // 只在 2.2.0+ 可用
    console.log(err)
}
Vue.config.productionTip = false
Vue.prototype.$openModal = openModal
Vue.prototype.$Toast = Toast
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
initApp().then(() => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})

window.onerror = (err) => {
    console.log(err)
}
window.attachimg = window.attachimginfo = window.fetchOffset = window.copycode = window.signature = window.fastreply = window.tagshow = window.zoom = window.zoomdrag = window.zoomST = window.zoomimgresize = window.zoomimgadjust = window.zoomclose = window.videoPlay = () => { }