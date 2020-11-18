// pages/discuz/thread.js
import { dispatcher } from '../../utils/zoro.weapp.js'
import { connect } from '../../utils/redux.weapp.js'
import { selectors, pageCache, toast } from '../../utils/util.js'
let { discuz: { UPDATE_DISCUZ, getPageData } } = dispatcher
const config = connect(({ discuz: { formhash, userInfo, webSite } }) => ({ formhash, userInfo, webSite }))({

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
    renderType: "parser",
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
    let targetBase = `http://${webSite}/bbs/`
    let {
      documentTitle,
      pageInfo = {
        pageNum: 1,
        pageCount: 1
      },
      formhash,
      replyUrl,
      prevTopicUrl,
      nextTopicUrl,
      favoriteUrl,
      newThreadUrl,
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
    } else if (prevTopicUrl || nextTopicUrl) {
      tid = (prevTopicUrl || nextTopicUrl).replace(
        /(^redirect.*tid=)(\d.*)(&goto=.*$)/g, "$2");
      fid = (prevTopicUrl || nextTopicUrl).replace(
        /(^redirect.*fid=)(\d.*)(&tid=.*$)/g, "$2");
    } else if (favoriteUrl && newThreadUrl) {
      tid = favoriteUrl.replace(
        /(^my.*tid=)(\d.*)(.*$)/g, "$2");
      fid = newThreadUrl.replace(
        /(^post.*fid=)(\d.*)(&extra=.*$)/g, "$2");
    }
    postList.forEach(item => {
      item.content = item.content
        .replace(/[\t]/g, ``)
        .replace(/(\S)(<br>)(\S)/g, '$1$3')
        .replace(/="attachment/g, `="${targetBase}attachment`)
        .replace(/="images/g, `="${targetBase}images`)
        .replace(/="http:\/\/(.*)\/bbs\//g, `="${targetBase}`)
        .replace(/:14pt/g, ":5vw");
    });
    let { pageNum, pageCount } = pageInfo
    if (pageInfo && pageNum != 1) {
      pageInfo.prevUrl = url.replace(/(^.*thread-\d.*-)(\d.*)(-\d.html)/g, `$1${pageNum - 1}$3`)
    }
    if (pageInfo && pageNum < pageCount && url) {
      pageInfo.nextUrl = url.replace(/(^.*thread-\d.*-)(\d.*)(-\d.html)/g, `$1${pageNum + 1}$3`)
    }
    UPDATE_DISCUZ({ formhash })
    this.setData({
      documentTitle,
      tid,
      fid,
      replyUrl,
      pageInfo
    }, () => {
      Promise.all(postList.map((item, i) => {
        return new Promise((resolve) => {
          this.setData({
            [`postList[${i}]`]: item
          }, () => {
            resolve()
          })
        })
      })).then(() => {
        wx.pageScrollTo({
          scrollTop,
        })
      })
    })
  },
  bindLinkPress({ detail: { href, ignore } }) {
    console.log('bindLinkPress:', href)
    if (/viewthread\.php|thread\-.*\.html$/g.test(href)) {
      if (/viewthread\.php/g.test(href)) {
        href = href.replace(/(^.*tid=)(\d.*)&page=(\d.*)(#pid\d.*)/g, `thread-$2-$3-1.html`)
      }
      console.log('navigateTo=====>', href)
      let { webSite } = this.data;
      wx.navigateTo({
        url: '/pages/discuz/thread?url=' + encodeURIComponent(`http://${webSite}/bbs/` + href),
      })
      ignore()
    }
  },
  pageChange({ detail }) {
    let { pageInfo: { prevUrl, nextUrl } } = this.data
    if (detail == 'prev') {
      let url = prevUrl
      this.setData({
        url
      }, this.getThreadPageJson(url))
    } else {
      if (nextUrl) {
        let url = nextUrl
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
  onReload() {
    let { url } = this.data
    pageCache.delete(url)
    this.getThreadPageJson(url)
  },
  addFavorites() {
    let { url, tid, documentTitle, scrollTop } = this.data
    let favorites = wx.getStorageSync('favorites') || []
    let i = favorites.findIndex(item => {
      return item.tid == tid;
    });
    let scrollObj = {
      href: url,
      tid: tid,
      title: documentTitle,
      scrollTop
    };
    if (i >= 0) {
      favorites.splice(i, 1, scrollObj);
    } else {
      favorites.push(scrollObj);
    }
    wx.setStorageSync('favorites', favorites)
  },
  removeFavorites() {
    let { tid } = this.data
    let favorites = wx.getStorageSync('favorites') || []
    let i = favorites.findIndex(item => {
      return item.tid == tid;
    });
    favorites.splice(i, 1);
    wx.setStorageSync('favorites', favorites)
  },
  async openMenu() {
    let { fid, tid, documentTitle, replyUrl, renderType } = this.data
    let itemList = ['刷新', '搜索']
    if (replyUrl) {
      itemList.push('回复')
    }
    if (renderType === 'parser') {
      itemList.push('切换为性能模式')
    } else {
      itemList.push('切换为正常模式')
    }
    let favoritesHit = !!(wx.getStorageSync('favorites') || []).filter(item => {
      return item.tid == tid;
    })[0]
    if (favoritesHit) {
      itemList.push('删除阅读进度')
      itemList.push('更新阅读进度')
    } else {
      itemList.push('收藏阅读进度')
    }
    wx.showActionSheet({
      itemList,
      success: ({ tapIndex }) => {
        let itemText = itemList[tapIndex]
        if (itemText.includes('刷新')) {
          this.onReload()
        } else if (itemText.includes('回复')) {
          wx.navigateTo({
            url: '/pages/discuz/reply',
            events: {
              reload: this.onReload
            },
            success: function (res) {
              // 通过eventChannel向被打开页面传送数据
              res.eventChannel.emit('content', { fid, tid, title: documentTitle })
            }
          })
        } else if (itemText.includes('搜索')) {
          wx.navigateTo({
            url: "/pages/discuz/search",
          });
        } else if (itemText.includes('切换为性能模式')) {
          this.setData({
            renderType: "rich"
          })
        } else if (itemText.includes('切换为正常模式')) {
          this.setData({
            renderType: "parser"
          })
        } else if (itemText.includes('收藏阅读进度')) {
          this.addFavorites()
          toast('收藏成功!')
        } else if (itemText.includes('删除阅读进度')) {
          this.removeFavorites()
          toast('删除成功!')
        } else if (itemText.includes('更新阅读进度')) {
          this.removeFavorites()
          this.addFavorites()
          toast('更新成功!')
        } else {

        }
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