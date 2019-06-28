// components/shortcutMenu/index.js
import { pageCache } from '../../utils/util.js'
import { dispatcher } from '../../utils/zoro.weapp.js'
import { connectComponent } from '../../utils/redux.weapp.js'
let { discuz: { submitReply } } = dispatcher
const config = connectComponent(({ discuz }) => ({}))({
  /**
     * 组件的属性列表
     */
  properties: {
    url: {
      type: String,
      value: ''
    },
    tid: {
      type: String,
      value: ''
    },
    fid: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    scrollTop: {
      type: Number,
      value: 0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isOpened: false,
    modalOption: {
      allowMaskClick: true,
      showModal: false,
      position: 'center'
    },
    reply: {
      subject: '',
      message: ''
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleclass() {
      this.setData({
        isOpened: !this.data.isOpened
      })
    },
    saveProgress() {
      let { url, tid, title, scrollTop } = this.properties
      let favorites = wx.getStorageSync('favorites') || []
      let i = favorites.findIndex(item => {
        return item.tid == tid;
      });

      let scrollObj = {
        href: url,
        tid: tid,
        title: title,
        scrollTop
      };
      if (i >= 0) {
        favorites.splice(i, 1, scrollObj);
      } else {
        favorites.push(scrollObj);
      }
      wx.setStorageSync('favorites', favorites)
    },
    delProgress() {
      let { tid } = this.properties
      let favorites = wx.getStorageSync('favorites') || []
      let i = favorites.findIndex(item => {
        return item.tid == tid;
      });
      favorites.splice(i, 1);
      wx.setStorageSync('favorites', favorites)
    },
    onReply() {
      this.showModal();
      this.toggleclass();
    },
    onReload() {
      pageCache.delete(this.properties.url)
      this.triggerEvent('reload')
    },
    showModal() {
      this.setData({
        "modalOption.showModal": true
      })
    },
    maskClick() {
      this.setData({
        "modalOption.showModal": false
      })
    },
    async submit(e) {
      let { fid, tid } = this.properties;
      let { reply: { subject, message } } = this.data
      await submitReply({
        subject,
        message,
        fid,
        tid
      });
      this.maskClick()
      this.onReload()
    },
    inputChange({ currentTarget: { dataset: key }, detail: { value } }) {
      let { reply } = this.data
      reply[key] = value
      this.setData({
        reply
      })
    }
  }
})
Component(config)
