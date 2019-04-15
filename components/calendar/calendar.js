// components/calendar/calendar.js
import { formatTime, getTotalDaysArr } from '../../utils/util.js'

Component({
  externalClasses: ['has-data-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    defaultValue: {
      type: null, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: Date.now(), // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    headerTitleFmt: {
      type: String,
      value: 'yyyy年M月',
    },
    mapData: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        if (newVal.length == 0 && oldVal.length == 0) {
          return
        }
        let { headerTitleFmt, mapData, year, month } = this.data
        this.setData(this.parseDate(new Date(year, month - 1, 1), headerTitleFmt, mapData))
      }
    },
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
    prevClick: function () {
      let year = this.data.year
      let month = this.data.month
      if (month == 1) {
        year = year - 1
        month = 12
      }
      else {
        month--
      }
      let ts = new Date(year, month - 1, 1)
      let parsedDate = this.parseDate(ts);
      this.setData(parsedDate)
      this.triggerEvent('prevClick', { year, month })
    },
    nextClick: function () {
      let year = this.data.year
      let month = this.data.month
      if (month == 12) {
        year = year + 1
        month = 1
      } else {
        month++
      }
      let ts = new Date(year, month - 1, 1)
      let parsedDate = this.parseDate(ts);
      this.setData(parsedDate)
      this.triggerEvent('nextClick', { year, month })
    },
    cellClick(event) {
      if (!event.target.dataset.day || this.data.activeItem.timestamp == event.target.dataset.day.timestamp) return
      this.setData({
        activeItem: event.target.dataset.day,
      })
      let year = this.data.year
      let month = this.data.month
      this.triggerEvent('cellClick', event.target.dataset.day)
    },
    parseDate(ymd, fmt = 'yyyy年M月', mapData) {
      let now = null
      if (typeof ymd == 'object' && ymd.getTime) {
        now = ymd;
      } else {
        now = new Date(ymd);
      }
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let activeItem = {}
      let headerText = formatTime(now, fmt)
      let totalDays = getTotalDaysArr(year, month).map((date, index) => {
        let dateTime = new Date(year, month - 1, date)
        let item = {
          year,
          month,
          timestamp: dateTime.getTime(),
          date,
          dayOfWeek: dateTime.getDay()
        }
        // 高亮今日
        if (!activeItem.date && (Date.now() - dateTime > 0 && Date.now() - dateTime < 86400000)) {
          item.isToday = true
          activeItem = item
        }
        // 附加数据
        if (mapData && mapData.length && mapData[0].year == year && mapData[0].month == month) {
          for (let i = 0; i < mapData.length; i++) {
            if (mapData[i].date == date) {
              item.data = mapData[i].data;
              mapData.splice(i, 1);
              break;
            }
          }
        }
        return item
      });
      console.log('mapData', mapData)
      this.triggerEvent('cellClick', activeItem)
      return {
        activeItem,
        totalDays,
        month,
        year,
        headerText
      }
    }
  },
  attached() {
    let { defaultValue, headerTitleFmt, mapData } = this.properties
    this.setData(this.parseDate(defaultValue, headerTitleFmt, mapData))
  }
})
