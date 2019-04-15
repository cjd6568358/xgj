var myApp = getApp()
// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    networkType: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (myApp.globalData.userInfo) {
      this.setData({
        userInfo: myApp.globalData.userInfo
      })
    } else {
      myApp.userInfoReadyCallback = (res) => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    }
    wx.getNetworkType({
      success: (res) => {
        this.setData({
          networkType: res.networkType
        })
      },
    })
    wx.onNetworkStatusChange((res) => {
      this.setData({
        networkType: res.networkType
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onGotUserInfo(e) {
    // console.log(e.detail.errMsg)
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
    this.setData({
      userInfo: e.detail.userInfo
    })
    myApp.globalData.userInfo = e.detail.userInfo
  },
  clearAllStorage() {
    wx.showModal({
      title: '提示',
      content: '确认清除所有数据吗？',
      success: function (res) {
        if (res.confirm) {
          wx.clearStorageSync();
          wx.showToast({
            title: '清除成功',
          })
        } else if (res.cancel) {
        }
      }
    })

  },
  openLocation() {
    wx.getLocation({
      success: function (res) {
        wx.navigateTo({
          url: `/pages/location/location?lon=${res.longitude}&lat=${res.latitude}`,
        })
      },
    })
  },
  getSystemInfo() {
    wx.navigateTo({
      url: `/pages/systemInfo/systemInfo`,
    })
  },
  vibrateLong() {
    wx.vibrateLong({

    })
  },
  vibrateShort() {
    wx.vibrateShort({

    })
  },
  openWifi(){
    wx.navigateTo({
      url: `/pages/wifi/wifi`,
    })
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