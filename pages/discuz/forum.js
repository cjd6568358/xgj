// pages/discuz/forum.js
import { dispatcher } from '../../utils/zoro.weapp.js'
import { connect } from '../../utils/redux.weapp.js'
import { selectors, pageCache } from '../../utils/util.js'
let { discuz: { getPageData } } = dispatcher
const config = connect(({ discuz: { formhash, userInfo, webSite } }) => ({ formhash, userInfo, webSite }))({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    forumList: [],
    threadList: [],
    pageInfo: {
      pageNum: 1,
      pageCount: 1
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
      url,
      fid: +url.replace(/(^.*-)(\d.*)(-.*$)/g, '$2')
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
    let { forumList, threadList, pageInfo = {
      pageNum: 1,
      pageCount: 1
    }, documentTitle } = pageData
    wx.setNavigationBarTitle({
      title: documentTitle,
    })
    let { pageNum, pageCount } = pageInfo
    if (pageInfo && pageNum != 1 && url) {
      pageInfo.prevUrl = url.replace(/(^.*-)(\d.*)(.html$)/g, `$1${pageNum - 1}$3`)
    }
    if (pageInfo && pageNum < pageCount && url) {
      pageInfo.nextUrl = url.replace(/(^.*-)(\d.*)(.html$)/g, `$1${pageNum + 1}$3`)
    }
    this.setData({
      forumList,
      threadList,
      pageInfo
    })
  },
  pageChange({ detail }) {
    let { pageInfo: { prevUrl, nextUrl } } = this.data
    if (detail == 'prev') {
      let url = prevUrl
      this.setData({
        url
      }, this.getForumPageData(url))
    } else {
      if (nextUrl) {
        let url = nextUrl
        this.setData({
          url
        }, this.getForumPageData(url))
      }
    }
  },
  onReload() {
    let { url } = this.data
    pageCache.delete(url)
    this.getForumPageData(url)
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