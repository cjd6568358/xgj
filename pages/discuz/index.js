// pages/discuz/index.js
import { dispatcher } from "../../utils/zoro.weapp.js";
import { connect } from "../../utils/redux.weapp.js";
import { formatTime, selectors, pageCache, querystring } from "../../utils/index";
import http from "../../utils/http.js";
let {
  discuz: { logout, UPDATE_DISCUZ, getPageData, dailySignIn, monthSignIn },
} = dispatcher;
const config = connect(
  ({ discuz: { isOwner, isLogin, signInfo, userInfo } }) => ({
    isOwner,
    isLogin,
    signInfo,
    userInfo,
  })
)({
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
  dailySignIn,
  monthSignIn,
  async login() {
    let {
      userInfo: { username, password, QA },
    } = this.data;
    if (username && password && QA && QA.includes(",")) {
      let [questionid, answer] = QA.split(",");
      let formData = {
        formhash: "30b7da0e",
        cookietime: "315360000",
        loginfield: "username",
        questionid,
        answer,
        username,
        password,
        userlogin: "true",
      };
      if (!questionid || !answer) {
        delete formData.questionid;
        delete formData.answer;
      }
      let postData = {
        httpConfig: {
          url: `/bbs/logging.php?action=login&loginsubmit=true`,
          method: "post",
          responseType: "arraybuffer",
          data: querystring.stringify(formData),
        },
        encoding: "gbk",
      };
      wx.showLoading({
        title: "正在登录...",
      });
      await http.post({ url: `advancedProxy`, data: postData });
      wx.hideLoading();
      let isLogin = !!wx.getStorageSync("cdb3_auth");
      if (isLogin) {
        wx.setNavigationBarTitle({
          title: "首页",
        });
        UPDATE_DISCUZ({ isLogin });
        await this.getIndexPageData();
        await this.checkSigned();
      }
    }
  },
  inputChange({
    currentTarget: {
      dataset: { key },
    },
    detail: { value },
  }) {
    this.data.userInfo[key] = value;
    let newUserInfo = Object.assign({}, this.data.userInfo);
    UPDATE_DISCUZ({ userInfo: newUserInfo });
  },
  async checkSigned() {
    let { signInfo } = this.data;
    let url = `/bbs/my.php`;
    let selector = selectors.my;
    let pageData = await getPageData({ url, selector });
    let { formhash, username, recentTopics } = pageData;
    recentTopics &&
      recentTopics.forEach((item) => {
        if (
          item &&
          item.title ==
          `${username}/${new Date().getMonth() + 1}月份/打卡签到帖`
        ) {
          if (item.lastPost.includes(formatTime(new Date(), "yyyy-M-d"))) {
            signInfo.isSigned = true;
          } else {
            signInfo.tid = item.tid;
          }
        }
      });
    UPDATE_DISCUZ({ signInfo: Object.assign({}, signInfo), formhash });
  },
  async getIndexPageData() {
    let url = `/bbs/index.php`;
    let selector = selectors.index;
    let pageData = {};
    if (pageCache.has(url)) {
      pageData = pageCache.get(url);
    } else {
      pageData = await getPageData({ url, selector });
      pageCache.set(url, pageData);
    }
    let { creditList, username, areaList } = pageData;
    if (!username) {
      this.logout("获取首页数据失败,确认退出登录吗?");
    } else {
      let userInfo = Object.assign({}, this.data.userInfo, {
        creditList,
        username,
      });
      UPDATE_DISCUZ({ userInfo });
      this.setData({
        areaList,
      });
    }
  },
  routerToForum({
    currentTarget: {
      dataset: { path },
    },
  }) {
    let url = path;
    wx.navigateTo({
      url: "/pages/discuz/forum?url=" + encodeURIComponent(url),
    });
  },
  routerToUser() {
    wx.navigateTo({
      url: "/pages/discuz/user",
    });
  },
  async openMenu() {
    let { signInfo, userInfo } = this.data;
    let itemList = [
      "每日一签",
      "每月一签",
      `个人中心(${userInfo.username})`,
      "搜索",
      "退出登录",
    ];
    if (signInfo.isSigned) {
      itemList.shift();
    }
    wx.showActionSheet({
      itemList,
      success: ({ tapIndex }) => {
        let itemText = itemList[tapIndex];
        if (itemText.includes("每日一签")) {
          this.dailySignIn();
        } else if (itemText.includes("每月一签")) {
          this.monthSignIn();
        } else if (itemText.includes("个人中心")) {
          this.routerToUser();
        } else if (itemText.includes("搜索")) {
          wx.navigateTo({
            url: "/pages/discuz/search",
          });
        } else if (itemText.includes("退出登录")) {
          this.logout();
        } else {
        }
      },
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: async function () {
    let { isOwner, signInfo, isLogin } = this.data;
    if (!isOwner) {
      return
    }
    if (isLogin) {
      await this.getIndexPageData();
      if (!signInfo.isSigned) {
        await this.checkSigned();
      }
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let isLogin = !!wx.getStorageSync("cdb3_auth");
    if (isLogin) {
      wx.setNavigationBarTitle({
        title: "首页",
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
});
Page(config);
