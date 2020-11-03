// pages/account/verify.js
import { toast } from '../../utils/util'
import http from '../../utils/http'
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let cipherText = wx.getStorageSync('accountData') || ''
    if (getApp().globalData.accountData || cipherText === '') {
      this.navigateToList()
    } else {
      this.setData({
        cipherText
      })
    }
  },
  async bindClick() {
    let { verifyCode, verifyCode2 } = this.data
    if (verifyCode !== verifyCode2) {
      toast('两次秘钥不一致请重新输入!')
      this.setData({
        verifyCode2: ''
      })
    } else if (!verifyCode && !verifyCode2) {
      toast('秘钥不能为空!')
    } else {
      if (this.isLoading) {
        return
      }
      this.isLoading = true
      wx.showLoading({
        title: '正在处理...',
      })
      let { data, statusCode } = await http.post({ url: `${proxyBaseUrl}decryptAES`, data: { data: this.data.cipherText, key: verifyCode } })
      wx.hideLoading({
        success: (res) => { },
      })
      this.isLoading = false
      if (statusCode === 1) {
        getApp().globalData.accountData = data
        this.navigateToList()
      } else {
        toast('无效的秘钥!')
      }
    }
  },
  navigateToList() {
    wx.navigateTo({
      url: '/pages/account/list',
      events: {
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('content', getApp().globalData.accountData || [])
        wx.hideLoading({
          success: (res) => { },
        })
      }
    })
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