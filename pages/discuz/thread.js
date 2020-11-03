// pages/discuz/thread.js
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
    postList: [],
    url: "",
    tid: "",
    fid: "",
    documentTitle: '',
    scrollTop: 0,
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
    }, this.getThreadPageJson(url, options.scrollTop))
  },
  async getThreadPageJson(url, scrollTop = 0) {
    let pageData = {};
    if (pageCache.has(url)) {
      pageData = pageCache.get(url);
    } else {
      let selector = selectors.thread;
      pageData = await getPageData({ url, selector });
      pageCache.set(url, pageData);
    }
    let { tid, fid, webSite } = this.data
    let targetBaseUrl = `http://${webSite}/bbs/`
    let {
      documentTitle,
      pageInfo,
      formhash,
      replyUrl,
      postList = []
    } = pageData;
    wx.setNavigationBarTitle({
      title: documentTitle,
    })
    if (replyUrl) {
      tid = replyUrl.replace(
        /(^post.*tid=)(\d.*)(&extra=.*$)/g, "$2");
      fid = replyUrl.replace(
        /(^post.*fid=)(\d.*)(&tid=.*$)/g, "$2");
    }
    postList.forEach(item => {
      item.content = item.content
        .replace(/\t/g, ``)
        .replace(/="attachment/g, `="${targetBaseUrl}attachment`)
        .replace(/="images/g, `="${targetBaseUrl}images`)
        .replace(/\<img/gi, '<img style="max-width:100%;"')
        .replace(/="http:\/\/(.*)\/bbs\//g, `="${targetBaseUrl}`)
        .replace(/" margin-right: 850px;>/g, `;margin-right: 850px;">`)
        // .replace(/="(viewthread|thread.*)" target/g, ($0, $1) => {
        //   return `="${
        //     process.env.BASE_URL
        //     }discuz/thread/${encodeURIComponent(
        //       targetBaseUrl + $1
        //     )}" target`;
        // })
        .replace(/:14pt/g, ":5vw");
    });
    if (pageInfo && pageInfo.currPageNum != 1) {
      pageInfo.prevUrl = `thread-${tid}-${pageInfo.currPageNum - 1}-1.html`;
    }
    UPDATE_DISCUZ({ formhash })
    this.setData({
      postList,
      documentTitle,
      tid,
      fid,
      pageInfo
    }, () => {
      wx.hideLoading()
      wx.pageScrollTo({
        scrollTop,
      })
    })
  },
  reload() {
    pageCache.delete(this.data.url)
    this.getThreadPageJson(this.data.url)
  },
  pageChange({ detail }) {
    let { webSite, pageInfo: { prevUrl, nextUrl } } = this.data
    let targetBaseUrl = `http://${webSite}/bbs/`
    if (detail == 'prev') {
      let url = targetBaseUrl + prevUrl
      this.setData({
        url
      }, this.getThreadPageJson(url))
    } else {
      if (nextUrl) {
        let url = targetBaseUrl + nextUrl
        this.setData({
          url
        }, this.getThreadPageJson(url))
      }
    }
  },
  onPageScroll({ scrollTop }) {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      this.timer = null
      this.setData({
        scrollTop
      })
    }, 500)
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