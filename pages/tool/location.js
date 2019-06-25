// pages/location/location.js
let markers = [
  {
    iconPath: "./images/location.svg",
    id: 0,
    latitude: 31.279495,
    longitude: 121.442941,
    width: 30,
    height: 30,
    // label: {
    //   content: "公司",
    //   color: '',
    //   fontSize: '',
    //   // x: -10,
    //   // y: -1,
    //   borderWidth: 2,
    //   borderColor: '#ddd',
    //   borderRadius: 5,
    //   bgColor: '#f3f5f7',
    //   padding: 5,
    //   // textAlign: ''
    // },
    callout: {
      content: "公司",
      // color: '',
      // fontSize: '',
      borderRadius: 5,
      // bgColor: '#f3f5f7',
      padding: 5,
      display: 'ALWAYS',
      // textAlign: ''
    }
  }
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lon: null,
    lat: null,
    markers: markers,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      lon: options.lon,
      lat: options.lat
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.mapCtx = wx.createMapContext('map')
    // setTimeout(() => {
    //   this.mapCtx.moveToLocation();
    // }, 500)

    this.timer = setInterval(() => {
      wx.getLocation({
        success: (res) => {
          console.log(res)
          if (res.longitude != this.data.lon || res.latitude != this.data.lat) {
            this.setData({
              lon: res.longitude,
              lat: res.latitude
            })
          }
        },
      })
    }, 3000)
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
    this.timer && clearInterval(this.timer)
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