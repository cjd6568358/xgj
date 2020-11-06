// pages/account/list.js
import { accountTypeList, confirm } from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountTypeList: [],
    resultList: [],
    slideButtons: [{
      type: 'warn',
      text: '删除',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      accountTypeList,
      onSearch: this.onSearch.bind(this)
    })
  },
  onDialogConfirm() {
    this.setData({
      dialogVisible: false,
    })
  },
  onSearch(value) {
    let resultList = this.accountData.map(item => {
      if (JSON.stringify(item).includes(value)) {
        return item
      } else {
        return null
      }
    }).filter(item => item)
    this.setData({
      resultList
    })
    return Promise.resolve([])
  },
  onClear() {
    this.setData({
      resultList: this.accountData
    })
  },
  slideButtonTap({ currentTarget: { dataset: { item } } }) {
    confirm('确认要删除吗?').then(() => {
      let i = this.accountData.findIndex(info => info.guid === item.guid)
      this.accountData.splice(i, 1)
      let resultList = this.data.resultList
      let ii = resultList.findIndex(info => info.guid === item.guid)
      resultList.splice(ii, 1)
      this.setData({
        resultList
      })
    })
  },
  onItemClick({ currentTarget: { dataset: { item } } }) {
    wx.navigateTo({
      url: '/pages/account/index',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('accountInfo', item)
      }
    })
  },
  onCreateAcount() {
    wx.navigateTo({
      url: '/pages/account/index',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('accountInfo', {})
      }
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
    let accountData = wx.getStorageSync('accountData') || [
      // { type: 0, remark: '百度', username: '111', password: '222' },
      // { type: 1, remark: '百度', username: '111', password: '222' },
      // { type: 2, remark: '百度', username: '111', password: '222' },
      // { type: 3, remark: '百度', username: '111', password: '222' },
      // { type: 4, remark: '百度', username: '111', password: '222' },
      // { type: 5, remark: '百度', username: '111', password: '222' },
      // { type: 6, remark: '百度', username: '111', password: '222' },
      // { type: 7, remark: '百度', username: '111', password: '222' },
      // { type: 0, remark: '百度', username: '111', password: '222' },
      // { type: 1, remark: '百度', username: '111', password: '222' },
      // { type: 2, remark: '百度', username: '111', password: '222' },
      // { type: 3, remark: '百度', username: '111', password: '222' },
      // { type: 4, remark: '百度', username: '111', password: '222' },
      // { type: 5, remark: '百度', username: '111', password: '222' },
      // { type: 6, remark: '百度', username: '111', password: '222' },
      // { type: 7, remark: '百度', username: '111', password: '222' },
    ]
    this.accountData = accountData
    this.setData({
      resultList: this.accountData
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