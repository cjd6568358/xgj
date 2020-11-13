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
      value: 20
    },
    y: {
      type: Number,
      value: 20
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
      // 在组件实例进入页面节点树时执行
      let { key, x, y } = this.properties
      let { windowWidth, windowHeight } = wx.getSystemInfoSync()
      if (x < 0) {
        x += windowWidth - 40
      }
      if (y < 0) {
        y += windowHeight - 40
      }
      let local = wx.getStorageSync(`move_menu_position_${key || 0}`) || { x, y }
      console.log(`moveMenu attached==============>`)
      console.log(`properties key:${key}, x:${x}, y:${y}`)
      console.log(`windowWidth:${windowWidth}, windowHeight:${windowHeight}`)
      console.log(`move_menu_position_${key || 0}:`, wx.getStorageSync(`move_menu_position_${key || 0}`))
      console.log(`local:`, local)
      console.log(`moveMenu attached==============>`)
      this.setData({
        local
      })
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
      wx.setStorageSync(`move_menu_position_${this.properties.key || 0}`, { x, y })
    }
  }
})
