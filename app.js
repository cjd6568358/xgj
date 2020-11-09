//app.js
import { calculatGUID, blockList, initApp } from './utils/util.js'
import zoro from './utils/zoro.weapp.js'
import { setStore } from './utils/redux.weapp.js'
import discuz from './models/discuz.js'

const app = zoro()
app.model(discuz)
const store = app.start(false)
setStore(store)

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

// if (!String.prototype.padStart) {
//   String.prototype.padStart = function padStart(targetLength, padString) {
//     targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
//     padString = String((typeof padString !== 'undefined' ? padString : ' '));
//     if (this.length > targetLength) {
//       return String(this);
//     }
//     else {
//       targetLength = targetLength - this.length;
//       if (targetLength > padString.length) {
//         padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
//       }
//       return padString.slice(0, targetLength) + String(this);
//     }
//   };
// }

initApp().then(openid => {
  wx.setStorageSync('openid', openid)
  if (blockList.includes(openid)) {
    return
  }
  App({
    onLaunch: function () {
      let guid = wx.getStorageSync('guid') || calculatGUID()
      wx.setStorageSync('guid', guid)
      this.globalData.guid = guid
      app.setup()
    },
    globalData: {
      version: '0.0.1',
      guid: "",
      openid: openid,
    }
  })
})

const updateManager = wx.getUpdateManager()

updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  // console.log(res.hasUpdate)
})

updateManager.onUpdateReady(function () {
  wx.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success: function (res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate()
      }
    }
  })

})

updateManager.onUpdateFailed(function () {
  // 新的版本下载失败
  wx.showToast({
    title: '新版本下载失败',
  })
})