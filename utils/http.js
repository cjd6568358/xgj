import { sendMsg, querystring } from './util.js'
const http = ((config) => {
  let request = {};
  let methods = ['get', 'post', 'put', 'delete'];
  let baseUrl = 'https://cjd6568358.3322.org:6706/api/';
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
            let originData = {}
            originData = querystring.parse(defaultConfig.url.split('?')[1])
            let query = querystring.stringify(Object.assign({}, originData, postData))
            if (query) {
              defaultConfig.url = defaultConfig.url.split('?')[0] + '?' + query
            }
          } else {
            defaultConfig.data = postData
          }
        } else {
          if (method == 'get') {
            defaultConfig.url += '?' + Object.keys(postData).map((key, index) => {
              return `${key}=${postData[key]}`
            }).join('&')
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