const formatTime = (date, fmt) => {
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

const getTotalDaysArr = (yyyy, MM, leftPad = false) => {
  return new Array(new Date(yyyy, MM, 0).getDate()).fill(0).map((item, index) => {
    ++index
    return leftPad ? '0' + index : index
  })
}

const http = (config) => {
  return new Promise((resolve, reject) => {
    let time = Date.now()
    let source = 202
    if (config.data && config.data.append) {
      config.data.append('time', time);
      config.data.append('source', source);
    } else {
      config.data = {
        data: config.data,
        time,
        source
      }
    }
    config.success = (data, statusCode, header) => {
      resolve(data, statusCode, header)
    }
    config.fail = (reason) => {
      reject(reason)
    }
    wx.request(config)
  })
}

module.exports = {
  formatTime,
  getTotalDaysArr,
  http
}
