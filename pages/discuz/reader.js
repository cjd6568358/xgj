// pages/discuz/read.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cdb3_sid = wx.getStorageSync('cdb3_sid')
    let cdb3_cookietime = wx.getStorageSync('cdb3_cookietime')
    let cdb3_auth = wx.getStorageSync('cdb3_auth')
    let webSite = wx.getStorageSync('webSite')
    this.getOpenerEventChannel().on('tid', (tid) => {
      this.setData({
        url: `https://cjd6568358.github.io/xgj/discuz/autoLogin?cookies=${JSON.stringify({ webSite, cdb3_sid, cdb3_cookietime, cdb3_auth })}&redirectTo=thread-${tid}-1-1.html`
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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