import { sendMsg, baseUrl, querystring } from './util.js'
const http = ((config) => {
  let request = {};
  let methods = ['get', 'post', 'put', 'delete'];
  methods.forEach((method) => {
    request[method] = (config) => {
      return new Promise((resolve, reject) => {
        let { data: postData = {}, url } = config;
        let isAbsoluteUrl = url.indexOf("//") >= 0;
        url = isAbsoluteUrl ? url : `${baseUrl}${url}`;
        let defaultConfig = {
          url,
          data: '',
          method,
          dataType: 'json',
          responseType: 'text',
          success: (res) => {
            let { data, statusCode, header } = res;
            if (header.corscookies) {
              header.corscookies.split("|$$|").forEach(cookie => {
                let [key, value] = cookie.split(';')[0].split('=')
                wx.setStorageSync(key, value)
              });
            }
            resolve(data)
          },
          fail: (res) => {
            reject(res)
          }
        }
        if (isAbsoluteUrl) {
          if (method == 'get') {
            let qs = querystring.stringify(Object.assign({}, postData))
            if (qs) {
              if (defaultConfig.url.split('?')[1]) {
                defaultConfig.url += '&'
              }
              defaultConfig.url += qs
            }
          } else {
            defaultConfig.data = postData
          }
        } else {
          if (method == 'get') {
            let qs = Object.keys(postData).filter(key => postData[key]).map((key, index) => {
              return `${key}=${postData[key]}`
            }).join('&')
            if (qs) {
              defaultConfig.url += '?' + qs
            }
          } else {
            defaultConfig.data = postData
          }
        }
        let cdb3_cookietime = wx.getStorageSync('cdb3_cookietime')
        let cdb3_auth = wx.getStorageSync('cdb3_auth')
        if (cdb3_cookietime && cdb3_auth) {
          defaultConfig.header = {
            corscookies: `cdb3_cookietime=${cdb3_cookietime};cdb3_auth=${cdb3_auth}`
          }
        }
        wx.request(defaultConfig)
      })
    }
  })
  return request;
})()
export default http