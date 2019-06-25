// pages/discuz/index.js
import selectors from "../../utils/html2JsonSelector";
import { dispatcher } from '../../utils/zoro.weapp.js'
import { connect } from '../../utils/redux.weapp.js'
import { pageCache, querystring } from '../../utils/util.js'
import http from '../../utils/http.js'
let { discuz: { logout, UPDATE_DISCUZ, getPageData } } = dispatcher
const config = connect(({ discuz: { isLogin, HOST, PLATOM, signInfo, userInfo, webSite } }) => ({ isLogin, HOST, PLATOM, signInfo, userInfo, webSite }))({
  /**
   * 页面的初始数据
   */
  data: {
    areaList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  logout,
  async checkSigned() {
    let { HOST, webSite, signInfo } = this.data;
    let targetHost = `http://${webSite}/bbs/`
    let url = `${targetHost}my.php`;
    let selector = selectors.my;
    let pageData = await getPageData({ url, selector });
    let { formhash, username, recentReply, recentTopics } = pageData;
    recentTopics &&
      recentTopics.forEach(item => {
        if (
          item &&
          item.title ==
          `${username}/${new Date().getMonth() +
          1}月份/打卡签到帖`
        ) {
          if (
            item.lastPost.includes(
              new Date().Format("yyyy-M-d")
            )
          ) {
            signInfo.isSigned = true;
          } else {
            signInfo.tid = item.tid;
          }
        }
      });
    UPDATE_DISCUZ({ signInfo, formhash })
  },
  async getIndexPageData() {
    let { webSite } = this.data;
    let targetHost = `http://${webSite}/bbs/`
    let url = `${targetHost}index.php`;
    let selector = selectors.index;
    let pageData = {};
    if (pageCache.has(url)) {
      pageData = pageCache.get(url)
    } else {
      pageData = await getPageData({ url, selector });
      pageCache.set(url, pageData)
    }
    let { creditList, username, areaList } = pageData
    if (!username) {
      logout();
    } else {
      let userInfo = Object.assign({}, this.data.userInfo, { creditList, username });
      UPDATE_DISCUZ({ userInfo })
      this.setData({
        areaList
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (!this.data.signInfo.isSigned) {
      this.checkSigned();
    }
    this.getIndexPageData();
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
Page(config)