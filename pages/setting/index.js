import { formatTime, toast, getStorageData, onAppReady, restoreData } from '../../utils/index'
import { encryptAES, string2File } from '../../utils/api'
import { getCloudDataSync, getCloudConfig, setCloudConfig } from '../../utils/store'
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
      getCloudConfig().then(cloudConfig => {
        this.setData({
          cloudConfig
        })
      })
    })
  },
  switchChange({ detail: { value } }) {
    if (value) {
      // 开启云备份(1.选择需要备份的数据类型)
      let { halfDialog } = this.data
      halfDialog.show = true
      halfDialog.type = 'cloud_backup'
      this.setData({
        halfDialog
      })
    } else {
      // 关闭云备份
      let { cloudConfig } = this.data
      cloudConfig.enable = 0;
      setCloudConfig(cloudConfig)
      this.setData({
        cloudConfig
      })
    }
  },
  backupStore() {
    wx.showActionSheet({
      itemList: ['备份至文件', '从文件还原', '从云备份还原'],
      success: ({ tapIndex }) => {
        if (tapIndex === 0) {
          // 备份至文件
          let { halfDialog } = this.data
          halfDialog.show = true
          halfDialog.type = 'backup'
          this.setData({
            halfDialog
          })
        } else if (tapIndex === 1) {
          // 从文件还原
          let { halfDialog } = this.data
          halfDialog.show = true
          halfDialog.type = 'restore'
          this.setData({
            halfDialog
          })
        } else if (tapIndex === 2) {
          // 从云备份还原
          let { halfDialog } = this.data
          halfDialog.show = true
          halfDialog.type = 'cloud_restore'
          this.setData({
            halfDialog
          })
        }
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
    } else if (halfDialog.type === 'cloud_backup') {
      // 开启云备份(2.输入云备份秘钥)
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
    } else if (halfDialog.type === 'cloud_restore') {
      this.setData({
        "halfDialog.show": false,
        "keyDialog.show": true
      })
    }
  },
  async onDialogConfirm() {
    let { halfDialog, key, email, cloudConfig } = this.data
    if (halfDialog.type === 'backup') {
      let fileName = `xgj_${formatTime(new Date(), "yyyyMMddhhmmss")}.bak`;
      if (key && email) {
        wx.showLoading({
          title: '',
        })
        // 小程序本地存储
        let encryptText = await encryptAES(this.fileData, key)
        wx.hideLoading({
          success: (res) => { },
        })
        let filePath = wx.env.USER_DATA_PATH + '/' + fileName
        let fs = wx.getFileSystemManager()
        fs.writeFileSync(filePath, encryptText, "utf8")
        // 线上邮箱保存
        await string2File(this.fileData, key, email, fileName)
        await wx.addFileToFavorites({
          filePath,
        })
        toast('备份成功,文件已发送至您的邮箱并加入收藏')
        this.setData({
          "halfDialog.show": false,
          "keyDialog.show": false
        })
        this.bindDialogClose();
      } else {
        toast('密钥&&邮箱必填')
      }
    } else if (halfDialog.type === 'cloud_backup') {
      // 开启云备份(3.保存云备份配置)
      Object.assign(cloudConfig, { key, enable: 1 })
      setCloudConfig(cloudConfig)
      this.setData({
        cloudConfig,
        key: "",
        "keyDialog.show": false
      })
    } else if (halfDialog.type === 'restore') {
      restoreData(this.encryptText, key, this.checkedValues).then(() => {
        this.setData({
          "keyDialog.show": false
        })
        toast('数据还原成功')
        this.bindDialogClose()
      }, toast)
    } else if (halfDialog.type === 'cloud_restore') {
      // 从云备份还原
      let cloudData = await getCloudDataSync()
      if (cloudData) {
        restoreData(cloudData.encryptText, key, this.checkedValues).then(() => {
          this.setData({
            "keyDialog.show": false
          })
          toast('数据还原成功')
          this.bindDialogClose()
        }, toast)
      } else {
        toast("找不到对应账号云备份数据");
      }
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
    if (this.data.halfDialog.type === 'cloud_backup') {
      getCloudConfig().then(cloudConfig => {
        this.setData({
          cloudConfig
        })
      })
    }
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