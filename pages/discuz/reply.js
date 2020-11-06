import { toast } from '../../utils/util'
import { dispatcher } from '../../utils/zoro.weapp.js'
let { discuz: { submitReply } } = dispatcher
// pages/discuz/reply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject: "",
    message: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 监听content事件，获取上一页面通过eventChannel传送到当前页面的数据
    this.getOpenerEventChannel().on('content', ({ fid = "", tid = "", title }) => {
      this.setData({
        fid,
        tid
      })
      wx.setNavigationBarTitle({
        title,
      })
    })
  },
  async bindSubmit() {
    let { fid, tid, subject, message } = this.data;
    if (!message || message.length < 20) {
      toast('内容长度不能少于20个字')
      return
    }
    await submitReply({
      subject,
      message,
      fid,
      tid
    });
    this.getOpenerEventChannel().emit('reload', {});
    wx.navigateBack({
      delta: 1,
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