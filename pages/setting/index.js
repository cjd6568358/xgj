import { formatTime, toast, getStorageData, onAppReady, restoreData } from '../../utils/index'
import { string2File } from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    halfDialog: {
      show: false,
      type: 'backup',
      items: [{ value: 1, name: '签到' }, { value: 2, name: '帐号' }, { value: 3, name: '收藏' }],
      buttons: [{
        type: 'primary',
        text: '确定',
        value: 1
      }]
    },
    keyDialog: {
      show: false,
      title: "输入密钥",
    },
    key: '',
    email: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkedValues = ["1", "2", "3"]
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    onAppReady().then(() => {
    })
  },
  backupStore() {
    wx.showActionSheet({
      itemList: ['备份至文件', '从文件还原'],
      success: ({ tapIndex }) => {
        let { halfDialog } = this.data
        halfDialog.show = true
        if (tapIndex === 0) {
          // 备份至文件
          halfDialog.type = 'backup'
          this.setData({
            halfDialog
          })
        } else if (tapIndex === 1) {
          // 从文件还原
          halfDialog.type = 'restore'
        }
        this.setData({
          halfDialog
        })
      }
    })
  },
  bindHalfDialogClick() {
    let { halfDialog } = this.data
    if (halfDialog.type === 'backup') {
      this.fileData = getStorageData(this.checkedValues);
      this.setData({
        "halfDialog.show": false,
        "keyDialog.show": true
      })
    } else if (halfDialog.type === 'restore') {
      wx.chooseMessageFile({
        count: 1,
        type: 'all',
        success: async (res) => {
          let fs = wx.getFileSystemManager()
          this.encryptText = fs.readFileSync(res.tempFiles[0].path, "utf8")
          this.setData({
            "keyDialog.show": true
          })
        },
        fail(err) {
          console.log(err)
        }
      })
      this.setData({
        "halfDialog.show": false,
      })
    }
  },
  async onDialogConfirm() {
    let { halfDialog, key, email } = this.data
    if (halfDialog.type === 'backup') {
      let fileName = `xgj_${formatTime(new Date(), "yyyyMMddhhmmss")}.bak`;
      if (key && email) {
        wx.showLoading({
          title: '',
        })
        // 线上邮箱保存
        await string2File(this.fileData, key, email, fileName)
        toast('备份成功,文件已发送至您的邮箱并加入收藏')
        this.setData({
          "halfDialog.show": false,
          "keyDialog.show": false
        })
        this.bindDialogClose();
      } else {
        toast('密钥&&邮箱必填')
      }
    } else if (halfDialog.type === 'restore') {
      restoreData(this.encryptText, key, this.checkedValues).then(() => {
        this.setData({
          "keyDialog.show": false
        })
        toast('数据还原成功')
        this.bindDialogClose()
      }, toast)
    }
  },
  bindCheckboxChange({ detail: { value } }) {
    this.checkedValues = value
  },
  bindDialogClose() {
    // 异常终止流程后，重置所有参数
    this.checkedValues = ["1", "2", "3"]
    this.encryptText = ""
    this.setData({
      key: '',
      email: ''
    })
  },
  clearAllStorage() {
    wx.showModal({
      title: '提示',
      content: '确认清除所有数据吗？',
      success: function (res) {
        if (res.confirm) {
          wx.clearStorageSync();
          wx.showToast({
            title: '清除成功',
          })
        } else if (res.cancel) {
        }
      }
    })
  },
  openLocation() {
    wx.getLocation({
      success: function (res) {
        wx.navigateTo({
          url: `/pages/tool/location?lon=${res.longitude}&lat=${res.latitude}`,
        })
      },
    })
  },
  getSystemInfo() {
    wx.navigateTo({
      url: `/pages/tool/systemInfo`,
    })
  },
  openStorage() {
    wx.navigateTo({
      url: `/pages/tool/storage`,
    })
  },
  openWifi() {
    wx.navigateTo({
      url: `/pages/tool/wifi`,
    })
  },
  routerToReadMe() {
    wx.navigateTo({
      url: `/pages/discuz/index`,
    })
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