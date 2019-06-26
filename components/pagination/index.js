// components/pagination/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currPageNum: {
      type: Number,
      value: 0
    },
    totalPageNum: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    prev() {
      this.triggerEvent('pageChange', "prev")
    },
    next() {
      this.triggerEvent('pageChange', "next")
    },
  }
})
