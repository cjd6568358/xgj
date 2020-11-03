// pages/account/list.js
import { confirm } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      onSearch: this.onSearch.bind(this)
    })
    //获取事件对象
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptData事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('content', (accountData) => {
      this.accountList = [{ type: 'default', typeName: '默认', remark: '百度', username: '111', password: '222' },
      { type: 'QQ', typeName: 'QQ', remark: '百度', username: '111', password: '222' },
      { type: 'wechat', typeName: '微信', remark: '百度', username: '111', password: '222' },
      { type: 'email', typeName: '邮箱', remark: '百度', username: '111', password: '222' },
      { type: 'OA', typeName: 'OA', remark: '百度', username: '111', password: '222' },
      { type: 'APP', typeName: 'APP', remark: '百度', username: '111', password: '222' },
      { type: 'website', typeName: '网站', remark: '百度', username: '111', password: '222' },
      { type: 'card', typeName: '证件', remark: '百度', username: '111', password: '222' },
      { type: 'other', typeName: '其他', remark: '百度', username: '111', password: '222' },
      ]
      this.setData({
        resultList: this.accountList
      })
    })
  },
  onSearch(value) {
    let resultList = this.accountList.map(item => {
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
    console.log('onClear')
    this.setData({
      resultList: this.accountList
    })
  },
  slideButtonTap({ currentTarget: { dataset: { item } } }) {
    confirm('确认要删除吗?').then(() => {
      let { year, month, timestamp } = item
      let signData = this.getSignData(year, month).filter(data => data.timestamp !== timestamp);
      this.setSignData(year, month, signData)
      this.setData({
        signData
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