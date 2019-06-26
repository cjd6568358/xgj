// components/modal.js
Component({
  externalClasses: ['external-container-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    options: {
      type: Object, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: {
        allowMaskClick: true,
        showModal: false,
        position: 'center'
      }, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    status: 'opened'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    maskClick() {
      if (this.data.options.allowMaskClick) {
        this.closeModal();
      }
      setTimeout(() => {
        this.triggerEvent('maskClick')
      }, 300)
    },
    closeModal() {
      this.setData({
        status: 'closed'
      })
    },
    catchtap(e) {
      console.log(e)
    },
  },
  attached() {
  }
})