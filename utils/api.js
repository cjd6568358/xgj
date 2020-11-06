import http from './http.js'

/**
 * 加密字符串
 * @param {String} text 
 * @param {String} key 
 */
let encryptAES = async (text, key) => {
  let { statusCode, data } = await http.post({ url: `encryptAES`, data: { data: text, key } })
  if (statusCode == 1) {
    return data
  }
}

/**
* 解密字符串
* @param {String} encryptedString 
* @param {String} key 
*/
let decryptAES = async (encryptedText, key) => {
  let { statusCode, data } = await http.post({ url: `decryptAES`, data: { data: encryptedText, key } })
  if (statusCode == 1) {
    return data
  }
}


let string2File = async (text, key, email, fileName) => {
  let { statusCode, data } = await http.post({ url: `string2File`, data: { data: text, key, email, fileName } })
  if (statusCode == 1) {
    return data
  }
}

export {
  encryptAES,
  decryptAES,
  string2File
}