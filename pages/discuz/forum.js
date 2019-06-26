// pages/discuz/forum.js
import selectors from "../../utils/html2JsonSelector";
import { dispatcher } from '../../utils/zoro.weapp.js'
import { connect } from '../../utils/redux.weapp.js'
import { pageCache, querystring } from '../../utils/util.js'
import http from '../../utils/http.js'
let { discuz: { UPDATE_DISCUZ, getPageData } } = dispatcher
const config = connect(({ discuz: { formhash, HOST, userInfo, webSite } }) => ({ formhash, HOST, userInfo, webSite }))({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    forumList: [],
    pageInfo: {
      currPageNum: 1,
      totalPageNum: 1,
      nextPageNum: null,
      nextUrl: null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = ''
    if (options.url) {
      url = decodeURIComponent(options.url)
    }
    this.setData({
      url
    }, this.getForumPageData(url))
  },
  routerToThread({ currentTarget: { dataset: { path } } }) {
    wx.navigateTo({
      url: '/pages/discuz/thread?url=' + encodeURIComponent(path),
    })
  },
  async getForumPageData(url) {
    let pageData = {};
    if (pageCache.has(url)) {
      pageData = pageCache.get(url);
    } else {
      let selector = selectors.forum;
      pageData = await getPageData({ url, selector });
      pageCache.set(url, pageData);
    }
    let { forumList, pageInfo, documentTitle } = pageData
    wx.setNavigationBarTitle({
      title: documentTitle,
    })
    let { currPageNum } = pageInfo
    if (pageInfo && currPageNum != 1 && this.data.url) {
      pageInfo.prevUrl = this.data.url
        .replace(/.*bbs\//g, "")
        .replace(
          /(\d*)\.html/,
          `${currPageNum - 1}.html`
        );
    } else {
    }
    this.setData({
      forumList,
      pageInfo
    })
  },
  reload() {
    pageCache.delete(this.data.url)
    this.getForumPageData(this.data.url)
  },
  pageChange({ detail }) {
    let { webSite, pageInfo: { prevUrl, nextUrl } } = this.data
    let targetHost = `http://${webSite}/bbs/`
    if (detail == 'prev') {
      let url = targetHost + prevUrl
      this.setData({
        url
      }, this.getForumPageData(url))
    } else {
      if (nextUrl) {
        let url = targetHost + nextUrl
        this.setData({
          url
        }, this.getForumPageData(url))
      }
    }
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
Page(config)