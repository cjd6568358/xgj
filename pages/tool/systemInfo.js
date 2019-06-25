//systemInfo.js

Page({
  data: {
    systemInfo: []
  },
  onLoad: function () {
    let systemInfo = wx.getSystemInfoSync();
    var tmp = Object.keys(systemInfo).map(key => {
      return {
        name: key,
        value: systemInfo[key]
      }
    })
    this.setData({
      systemInfo: tmp
    })
    console.log(tmp)
  },
  getUserInfo: function (e) {
  }
})
