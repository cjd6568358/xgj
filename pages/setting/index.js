import { getHash, toast, groupBy } from '../../utils/util'
import { encryptAES, decryptAES, string2File } from '../../utils/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    halfDialog: {
      show: false,
      type: 'export',
      items: [{ value: 1, name: '签到数据' }, { value: 2, name: '帐号数据' }],
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
    this.checkedValues = ["1", "2"]
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  backupStore() {
    wx.showActionSheet({
      itemList: ['备份', '还原'],
      success: ({ tapIndex }) => {
        if (tapIndex === 0) {
          // 备份
          let { halfDialog } = this.data
          halfDialog.show = true
          halfDialog.type = 'export'
          this.setData({
            halfDialog
          })
        } else {
          // 还原
          let { halfDialog } = this.data
          halfDialog.show = true
          halfDialog.type = 'import'
          this.setData({
            halfDialog
          })
        }
      }
    })
  },
  bindHalfDialogClick() {
    let { halfDialog } = this.data
    if (halfDialog.type === 'export') {
      let backup = {};
      // 帐号数据备份
      if (this.checkedValues.includes('1')) {
        backup.accountData = wx.getStorageSync('accountData');
      }
      // 签到数据备份
      if (this.checkedValues.includes('2')) {
        let signKeys = wx.getStorageInfoSync().keys.filter(key => key.includes('signData'))
        let signData = []
        signKeys.forEach(key => signData = signData.concat(wx.getStorageSync(key)))
        backup.signData = signData;
      }
      backup.hash = getHash(JSON.stringify(backup));
      this.fileData = JSON.stringify(backup);
      this.setData({
        "halfDialog.show": false,
        "keyDialog.show": true
      })
    } else {
      wx.chooseMessageFile({
        count: 1,
        type: 'all',
        success: async (res) => {
          let fs = wx.getFileSystemManager()
          this.encryptText = fs.readFileSync(res.tempFiles[0].path, "utf8")
          this.setData({
            "keyDialog.show": true
          })

        }
      })
      this.setData({
        "halfDialog.show": false,
      })
    }
  },
  async onDialogConfirm() {
    let { halfDialog, key, email } = this.data
    if (halfDialog.type === 'export') {
      let fileName = `xgj_${new Date().Format("yyyyMMddhhmmss")}.bak`;
      if (key && email) {
        // 小程序本地存储
        let encryptText = await encryptAES(this.fileData, key)
        let filePath = wx.env.USER_DATA_PATH + '/' + fileName
        let fs = wx.getFileSystemManager()
        fs.writeFileSync(filePath, encryptText, "utf8")
        // 线上邮箱保存
        await string2File(encryptText, "", email, fileName)
        toast('备份成功,文件已发送至您的邮箱')
        this.setData({
          "halfDialog.show": false,
          "keyDialog.show": false
        })
        this.bindDialogClose();
      } else {
        toast('密钥&&邮箱必填')
      }
    } else {
      let backupData = await decryptAES(this.encryptText, key)
      if (backupData) {
        try {
          backupData = JSON.parse(backupData)
        } catch (error) {
          toast.info("文件序列化校验失败");
          return;
        }
        let oldHash = backupData.hash;
        delete backupData.hash;
        let newHash = getHash(JSON.stringify(backupData));
        if (oldHash != newHash) {
          toast.info("文件hash校验失败:" + newHash + "-" + oldHash);
          return;
        }
        let { accountData, signData } = backupData
        if (this.checkedValues.includes('1') && accountData) {
          wx.setStorageSync('accountData', accountData);
        }
        if (this.checkedValues.includes('2') && signData) {
          // 清除本地签到数据
          let signKeys = wx.getStorageInfoSync().keys.filter(key => key.includes('signData'))
          signKeys.forEach(key => wx.removeStorageSync(key))
          signData = groupBy(signData, ({ year, month }) => `signData${year}${month}`)
          // 恢复备份数据
          Object.keys(signData).forEach(key => wx.setStorageSync(key, signData[key]))
        }
        this.setData({
          "keyDialog.show": false
        })
        toast('数据还原成功')
        this.bindDialogClose()
      } else {
        toast('解析失败,请更换文件或密钥!')
      }
    }
  },
  bindCheckboxChange({ detail: { value } }) {
    this.checkedValues = value
  },
  bindDialogClose() {
    this.checkedValues = ["1", "2"]
    this.encryptText = ""
    this.setData({
      key: '',
      email: ''
    })
  },
  // onGotUserInfo({ detail: { userInfo } }) {
  //   this.setData({
  //     userInfo
  //   })
  //   wx.setStorageSync('userInfo', userInfo)
  // },
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