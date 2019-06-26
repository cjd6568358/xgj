import { code2Session } from './api.js';

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

const calculatGUID = () => {
  let guid = '';
  for (let i = 1; i <= 32; i++) {
    let n = Math.floor(Math.random() * 16.0).toString(16);
    guid += n;
    if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) {
      guid += '-';
    }
  }
  return guid;
}

const sendMsg = (title, content) => {
  if (typeof content == "object") {
    content = JSON.stringify(content)
  }
  wx.request({
    method: 'POST',
    url: 'https://cjd6568358.3322.org:6706/api/sendMsg',
    dataType: 'json',
    responseType: 'text',
    data: {
      title, content
    }
  })
}

const toast = (msg) => {
  wx.showToast({
    title: msg,
    icon: 'none'
  })
}

const compareVersion = (v1, v2) => {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

const getOpenId = () => {
  return new Promise((resolve, reject) => {
    let openid = wx.getStorageSync('openid')
    if (!openid) {
      // 登录
      wx.login({
        success: res => {
          if (res.code) {
            // 发送 res.code 到后台换取 openid, sessionKey, unionId
            code2Session(res.code).then(({ statusCode, statusMsg, data }) => {
              if (statusCode == 1) {
                wx.setStorageSync('openid', data.openid)
                resolve(data.openid)
              } else {
                sendMsg('微信小管家', "code2Session error:" + statusMsg)
                reject(statusMsg)
              }
            })
          } else {
            sendMsg('微信小管家', "wx.login error:" + res.errMsg)
            reject(res.errMsg)
          }
        },
        fail: () => {
          sendMsg('微信小管家', "wx.login error:")
          reject("wx.login error:")
        }
      })
    } else {
      resolve(openid)
    }
  })
}

const arrayBuffer2String = (buf) => {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

const querystring = {
  parse: function (string) {
    var parsed = {};
    string = (string !== undefined) ? string : window.location.search;
    if (typeof string === "string" && string.length > 0) {
      if (string[0] === '?') {
        string = string.substring(1);
      }
      string = string.split('&');
      for (var i = 0, length = string.length; i < length; i++) {
        var element = string[i],
          eqPos = element.indexOf('='),
          keyValue, elValue;
        if (eqPos >= 0) {
          keyValue = element.substr(0, eqPos);
          elValue = element.substr(eqPos + 1);
        }
        else {
          keyValue = element;
          elValue = '';
        }
        elValue = decodeURIComponent(elValue);
        if (parsed[keyValue] === undefined) {
          parsed[keyValue] = elValue;
        }
        else if (parsed[keyValue] instanceof Array) {
          parsed[keyValue].push(elValue);
        }
        else {
          parsed[keyValue] = [parsed[keyValue], elValue];
        }
      }
    }
    return parsed;
  },
  stringify: function (obj) {
    var string = [];
    if (!!obj && obj.constructor === Object) {
      for (var prop in obj) {
        if (obj[prop] instanceof Array) {
          for (var i = 0, length = obj[prop].length; i < length; i++) {
            string.push([encodeURIComponent(prop), encodeURIComponent(obj[prop][i])].join('='));
          }
        }
        else {
          string.push([encodeURIComponent(prop), encodeURIComponent(obj[prop])].join('='));
        }
      }
    }
    return string.join('&');
  }
}

const confirm = (text) => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '提示',
      content: text,
      success: function (res) {
        if (res.confirm) {
          resolve(true)
        } else if (res.cancel) {
          resolve(false)
        }
      }
    })
  })
}

const pageCache = new Map()

export {
  formatTime,
  getTotalDaysArr,
  calculatGUID,
  sendMsg,
  toast,
  compareVersion,
  getOpenId,
  arrayBuffer2String,
  querystring,
  confirm,
  pageCache
}