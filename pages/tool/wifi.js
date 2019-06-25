// pages/wifi/wifi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wifiList: [],
    wifiStatus: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.startWifi({
      success: () => {
        wx.getWifiList({
          fail(res) {
            if (res.errMsg.indexOf('getWifiList:fail') >= 0) {
              wx.showToast({
                title: '请手动打开WiFi开关',
              })
            }
          }
        });
        wx.onGetWifiList((res) => {
          res.wifiList.sort((a, b) => b.signalStrength - a.signalStrength)
          this.setData({
            wifiList: res.wifiList
          })
        })
      },
      complete(res) {
        wx.showToast({
          title: res.errMsg,
        })
      }
    })


    // wx.showToast({
    //   title: '22222222222',
    // })

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