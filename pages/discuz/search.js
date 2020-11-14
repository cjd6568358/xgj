// pages/discuz/search.js
import { dispatcher } from '../../utils/zoro.weapp.js'
import { connect } from '../../utils/redux.weapp.js'
import { selectors, toast } from '../../utils/util.js'
let { discuz: { searchData, getPageData } } = dispatcher
const config = connect(({ discuz: { webSite } }) => ({ webSite }))(
  {

    /**
     * 页面的初始数据
     */
    data: {
      srchtxt: '',
      srchuname: '',
      orderBy: 'lastpost',
      sortType: 'desc',
      threadList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    async onSearch() {
      let { srchtxt, srchuname, orderBy, sortType } = this.data
      if (srchtxt || srchuname) {
        wx.showLoading({
          title: '正在查询...',
        })
        let { threadList, pageCount, searchHref } = await searchData({ srchtxt, srchuname, orderBy, sortType })
        wx.hideLoading()
        this.setData({
          threadList,
          searchHref: searchHref.replace(/page=(.*)$/g, ''),
          pageNum: 1,
          pageCount
        })
      }
    },
    orderByChange({ detail: { value } }) {
      this.setData({
        orderBy: value
      })
    },
    sortTypeChange({ detail: { value } }) {
      this.setData({
        sortType: value ? 'asc' : 'desc'
      })
    },
    async loadMore() {
      let { pageNum, pageCount } = this.data
      if (pageNum >= pageCount) {
        toast("没有更多啦!")
        return
      } else {
        let { webSite, searchHref } = this.data
        let { threadList, threadTotal } = await getPageData({ url: `http://${webSite}/bbs/${searchHref}page=${pageNum + 1}`, selector: selectors.search })
        if (threadList.length > 0) {
          this.setData({
            threadList: this.data.threadList.concat(threadList),
            pageNum: pageNum + 1,
            pageCount: Math.ceil(threadTotal / 38) || 1
          })
        }
      }
    },
    routerToThread({ currentTarget: { dataset: { tid } } }) {
      let { webSite } = this.data
      wx.navigateTo({
        url: '/pages/discuz/thread?url=' + encodeURIComponent(`http://${webSite}/bbs/thread-${tid}-1-1.html`),
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
      this.loadMore()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
  }
)
Page(config)