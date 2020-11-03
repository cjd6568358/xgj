// pages/discuz/forum.js
import selectors from "../../utils/html2JsonSelector";
import { dispatcher } from '../../utils/zoro.weapp.js'
import { connect } from '../../utils/redux.weapp.js'
import { pageCache, querystring } from '../../utils/util.js'
import http from '../../utils/http.js'
let { discuz: { UPDATE_DISCUZ, getPageData } } = dispatcher
const config = connect(({ discuz: { formhash, proxyBaseUrl, userInfo, webSite } }) => ({ formhash, proxyBaseUrl, userInfo, webSite }))({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    forumList: [],
    threadList: [],
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
  routerToForum({ currentTarget: { dataset: { path }, }, }) {
    let { webSite } = this.data;
    let url = `http://${webSite}/bbs/` + path;
    wx.navigateTo({
      url: "/pages/discuz/forum?url=" + encodeURIComponent(url),
    });
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
    let { forumList, threadList, pageInfo, documentTitle } = pageData
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
      threadList,
      pageInfo
    }, () => {
      wx.hideLoading()
    })
  },
  reload() {
    pageCache.delete(this.data.url)
    this.getForumPageData(this.data.url)
  },
  pageChange({ detail }) {
    let { webSite, pageInfo: { prevUrl, nextUrl } } = this.data
    let targetBaseUrl = `http://${webSite}/bbs/`
    if (detail == 'prev') {
      let url = targetBaseUrl + prevUrl
      this.setData({
        url
      }, this.getForumPageData(url))
    } else {
      if (nextUrl) {
        let url = targetBaseUrl + nextUrl
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