// pages/sign/sign.js
import { formatTime, getTotalDaysArr } from '../../utils/util.js'
import http from '../../utils/http.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signData: [],
    selectedItem: [],
    totalDays: getTotalDaysArr(new Date().getFullYear(), new Date().getMonth() + 1)
  },
  // 自定义事件监听
  onCalendarCellClick(e) {
    // console.log(e.detail)
    let selectedItem = (e.detail && e.detail.data) || []
    selectedItem.forEach(item => {
      item.hms = formatTime(new Date(item.timestamp), 'yyyy-MM-dd hh:mm:ss')
    })
    this.setData({
      selectedItem
    })
  },
  onCalendarPrevClick(e) {
    let signData = this.getSignData(e.detail.year, e.detail.month);
    console.log('onCalendarPrevClick', e.detail, signData)
    this.setData({
      signData
    })
  },
  onCalendarNextClick(e) {
    let signData = this.getSignData(e.detail.year, e.detail.month);
    console.log('onCalendarNextClick', e.detail, signData)
    this.setData({
      signData
    })
  },
  sign() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let signData = this.getSignData(year, month);
    signData.push({
      year,
      month,
      date: now.getDate(),
      timestamp: now.getTime()
    })
    this.setSignData(year, month, signData);
    this.setData({
      signData
    })
  },
  getSignData(year, month) {
    let signData = []
    if (year && month) {
      month = ('' + month).padStart(2, 0);
      signData = wx.getStorageSync(`signData${year}${month}`) || [];
    }
    return signData
  },
  setSignData(year, month, data) {
    if (year && month) {
      month = ('' + month).padStart(2, 0);
      wx.setStorageSync(`signData${year}${month}`, data);
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.get({
      url:'https://cjd6568358.3322.org:6706/api/test'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let signData = this.getSignData(year, month);
    this.setData({
      signData
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