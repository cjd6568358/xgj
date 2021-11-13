// pages/discuz/user.js
import { formatTime, selectors, onAppReady, testing, protocol } from "../../utils/index";
import { dispatcher } from '../../utils/zoro.weapp.js'
import { connect } from '../../utils/redux.weapp.js'
let { discuz: { UPDATE_DISCUZ, getPageData } } = dispatcher
const config = connect(({ discuz: { isLogin, signInfo, userInfo, webSite } }) => ({ isLogin, signInfo, userInfo, webSite }))({

  /**
   * 页面的初始数据
   */
  data: {
    favorites: [],
    creditList: [],
    recentReply: [],
    recentTopics: []
  },
  async getMyPageData() {
    let { webSite, signInfo } = this.data;
    let pageData = await getPageData({ url: `${protocol}${webSite}/bbs/my.php`, selector: selectors.my });
    let { formhash, username, creditList, recentReply, recentTopics } = pageData;
    recentTopics &&
      recentTopics.forEach(item => {
        if (
          item &&
          item.title ==
          `${username}/${new Date().getMonth() +
          1}月份/打卡签到帖`
        ) {
          if (
            item.lastPost.includes(formatTime(new Date(), "yyyy-M-d"))
          ) {
            signInfo.isSigned = true;
          } else {
            signInfo.tid = item.tid;
          }
        }
      });
    this.setData({
      creditList,
      recentReply,
      recentTopics
    })
    UPDATE_DISCUZ({ signInfo: Object.assign({}, signInfo), formhash })
  },
  routerToThread({ currentTarget: { dataset: { href, scrollTop } } }) {
    let { webSite } = this.data;
    if (!href.startsWith("http")) {
      href = `${protocol}${webSite}/bbs/${href}`
    }
    if (scrollTop) {
      wx.navigateTo({
        url: '/pages/discuz/thread?url=' + encodeURIComponent(href) + "&scrollTop=" + scrollTop,
      })
    } else {
      wx.navigateTo({
        url: '/pages/discuz/thread?url=' + encodeURIComponent(href),
      })
    }
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
  onShow: async function () {
    onAppReady().then(async () => {
      wx.showLoading({
        title: '加载中',
      })
      if (this.data.isLogin) {
        await this.getMyPageData();
        this.setData({
          favorites: wx.getStorageSync('favorites') || []
        })
      } else {
        if (!testing) {
          wx.redirectTo({
            url: '/pages/discuz/index',
          })
        }
      }
      if (!testing) {
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
Page(config)