import { getHash } from '../../utils/util'
var myApp = getApp()
// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    halfDialog: {
      show: false,
      title: "数据备份",
      items: [{ value: 1, name: '签到数据' }, { value: 2, name: '帐号数据' }],
      buttons: [{
        type: 'primary',
        text: '确定',
        value: 1
      }]
    },
    dialogVisible: false,
    dialogTitle: '输入密钥',
    userInfo: wx.getStorageSync('userInfo') || null,
    networkType: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkboxValues = ["1", "2"]
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
  backupStore() {
    wx.showActionSheet({
      itemList: ['备份', '还原'],
      success: ({ tapIndex }) => {
        if (tapIndex === 0) {
          // 备份
          let { halfDialog } = this.data
          halfDialog.show = true
          this.setData({
            halfDialog
          })
        } else {
          // 还原
        }
      }
    })
  },
  bindCheckboxChange({ detail: { value } }) {
    this.checkboxValues = value
  },
  bindHalfDialogClose() {
    this.checkboxValues = ["1", "2"]
  },
  bindHalfDialogClick() {
    console.log(this.checkboxValues)
    let backup = {};
    let fileName = `xgj_${new Date().Format("yyyyMMddhhmmss")}.bak`;
    if (this.checkboxValues.includes('1')) {
      backup.accountData = wx.getStorageSync('accountData');
    }
    if (this.checkboxValues.includes('2')) {
      // backup.signData = await DbHelper.signRecords.toArray();
    }
    backup.hash = getHash(JSON.stringify(backup));
    let params = {
      fileName,
      data: JSON.stringify(backup),
      key
    };
  },
  onGotUserInfo({ detail: { userInfo } }) {
    this.setData({
      userInfo
    })
    wx.setStorageSync('userInfo', userInfo)
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
          url: `/pages/tool/location?lon=${res.longitude}&lat=${res.latitude}`,
        })
      },
    })
  },
  getSystemInfo() {
    wx.navigateTo({
      url: `/pages/tool/systemInfo`,
    })
  },
  openStorage() {
    wx.navigateTo({
      url: `/pages/tool/storage`,
    })
  },
  openWifi() {
    wx.navigateTo({
      url: `/pages/tool/wifi`,
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