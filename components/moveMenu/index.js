// components/moveMenu/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    key: {
      type: String
    },
    x: {
      type: Number,
      value: -30
    },
    y: {
      type: Number,
      value: -30
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    local: {
      x: 20,
      y: 20
    }
  },
  lifetimes: {
    attached: function () {
      console.log(`moveMenu attached==============>`)
      // 在组件实例进入页面节点树时执行
      let { key, x, y } = this.properties
      console.log(`properties:`, this.properties)
      let { windowWidth, windowHeight } = wx.getSystemInfoSync()
      if (x < 0) {
        x += windowWidth - 40
      }
      if (y < 0) {
        y += windowHeight - 40
      }
      let cachedPosition = wx.getStorageSync(`move_menu_position_${key}`)
      console.log(`move_menu_position_${key}:`, cachedPosition)
      if (cachedPosition && typeof cachedPosition === 'string') {
        cachedPosition = JSON.parse(cachedPosition)
      }
      this.setData({
        local: cachedPosition || { x, y }
      })
      console.log(`moveMenu attached==============>`)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onMoveChange({ detail: { x, y } }) {
      wx.setStorageSync(`move_menu_position_${this.properties.key}`, JSON.stringify({ x, y }))
    }
  }
})
