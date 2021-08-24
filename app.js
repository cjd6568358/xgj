//app.js
import { calculatGUID, blockList, initApp } from './utils/index'
import zoro from './utils/zoro.weapp.js'
import { setStore } from './utils/redux.weapp.js'
import discuz from './models/discuz.js'

const app = zoro()
app.model(discuz)
const store = app.start(false)
setStore(store)

initApp().then(openid => {
  App({
    onLaunch: function () {
      let guid = wx.getStorageSync('guid') || calculatGUID()
      wx.setStorageSync('guid', guid)
      if (blockList.includes(openid)) {
        return
      }
      app.setup()
    },
    onError: (error) => {
      console.log(error)
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