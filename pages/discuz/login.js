// pages/discuz/login.js
// import computedBehavior from '../../utils/computed.js'
import { dispatcher } from '../../utils/zoro.weapp.js'
import { connect } from '../../utils/redux.weapp.js'
import { pageCache, querystring } from '../../utils/util.js'
let { discuz: { UPDATE_DISCUZ } } = dispatcher
const config = connect(({ discuz: { pageCache, isLogin, HOST, PLATOM } }) => ({ pageCache, isLogin, HOST, PLATOM }))({
  /**
   * 页面的初始数据
   */
  data: {
    webSite: '',
    username: "",
    password: "",
    QA: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data)
    if (this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/discuz/index',
      })
    } else {

    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  async login() {
    let { HOST, webSite, username, password, QA } = this.data;
    let targetHost = `http://${webSite}/bbs/`
    if (username && password) {
      let QAarr = QA.split(",");
      let questionid = (QAarr.length > 1 && QAarr[0]) || null;
      let answer = (QAarr.length > 1 && QAarr[1]) || null;
      let formData = {
        formhash: "30b7da0e",
        cookietime: "315360000",
        loginfield: "username",
        questionid,
        answer,
        username,
        password,
        userlogin: "true"
      };
      if (!questionid || !answer) {
        delete formData.questionid;
        delete formData.answer;
      }
      let postData = {
        httpConfig: {
          url: `${targetHost}logging.php?action=login&loginsubmit=true`,
          method: "post",
          responseType: "arraybuffer",
          data: querystring.stringify(formData)
        },
        encoding: "gbk"
      };
      wx.showLoading({
        title: '加载中...',
      })
      await http.post(`${HOST}/api/advancedProxy`, postData);
      wx.hideLoading()
      let isLogin = !!wx.getStorageSync("cdb3_auth")
      if (isLogin) {
        UPDATE_DISCUZ({ isLogin })
        wx.navigateTo({
          url: '/pages/discuz/index',
        })
      }
    }
  },
  inputChange({ currentTarget: { dataset: { key } }, detail: { value } }) {
    this.data[key] = value
    this.setData(this.data)
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