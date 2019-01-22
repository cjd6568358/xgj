import { HOST1 } from "../config";
import http from "./http";
import Cookies from 'js-cookie'
import { async } from "q";
let checkWebp = function() {
    return new Promise(function(resolve) {
        if (getCookie('webpSupport') == 'true') {
            resolve(true);
        } else if (getCookie('webpSupport') == 'false') {
            resolve(false);
        } else {
            try {
                let bool = (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
                setCookie('webpSupport', bool);
                resolve(bool);
            } catch (err) {
                setCookie('webpSupport', false);
                resolve(false);
            }
        }
    });
}

let calculatGUID = function() {
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

let getYMD = function(timestamp = Date.now()) {
    let date = new Date(timestamp)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return { year, month, day }
}

let getHash = function(str) {
    var I64BIT_TABLE =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
    var hash = 5381;
    var i = str.length - 1;

    if (typeof str == 'string') {
        for (; i > -1; i--)
            hash += (hash << 5) + str.charCodeAt(i);
    } else {
        for (; i > -1; i--)
            hash += (hash << 5) + str[i];
    }
    var value = hash & 0x7FFFFFFF;

    var retValue = '';
    do {
        retValue += I64BIT_TABLE[value & 0x3F];
    }
    // eslint-disable-next-line
    while (value >>= 6);

    return retValue;
}

// let getCookieDomain = function() {
//     var host = location.hostname;
//     var ip = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
//     if (ip.test(host) == true || host == 'localhost') return host;
//     var regex = /([^/]*).*/;
//     var match = host.match(regex);
//     if (typeof match != 'undefined' && null != match) host = match[1];
//     if (typeof host != 'undefined' && null != host) {
//         var strAry = host.split('.');
//         if (strAry.length > 1) {
//             host = strAry[strAry.length - 2] + '.' + strAry[strAry.length - 1];
//         }
//     }
//     return '.' + host;
// }

let setCookie = function(cookieKey, cookieVal) {
    Cookies.set(cookieKey, cookieVal, { expires: 30 });
    // var env = getCookieDomain();
    // var date = 30;
    // var exp = new Date();
    // exp.setTime(exp.getTime() + date * 24 * 60 * 60 * 1000);
    // if (typeof cookieVal == 'object') {
    //     cookieVal = JSON.stringify(cookieVal);
    // }
    // document.cookie = cookieKey + '=' + encodeURIComponent(cookieVal) + ';domain=' + env + ';path=/;expires=' + exp.toGMTString();
}

let getCookie = function(cookieKey) {
    return Cookies.get(cookieKey);
    // var arr = document.cookie.match(new RegExp('(^| )' + cookieKey + '=([^;]*)(;|$)'));
    // if (arr != null) return decodeURIComponent(arr[2]);
    // return null;
}

let delCookie = function(cookieKey) {
    Cookies.remove(cookieKey);
    // var date = new Date();
    // date.setTime(date.getTime() - 1);
    // document.cookie = cookieKey + '=' + '' + ';path=/;expires=' + date.toGMTString();
}

/**
 * data 必须为字符串
 * @param {Object} params 
 */
let string2File = function(params = { fileName: '', data: '', encrypt: true }) {
    let HOST = HOST1;
    if (localStorage.getItem("api_host")) {
        HOST = localStorage.getItem("api_host");
    }
    if (typeof params.encrypt === 'undefined') {
        params.encrypt = true
    }
    http.post(`${HOST}/api/string2File`, params).then(res => {
        if (res.data.statusCode == 1) {
            window.open(`${HOST}/api/downloadFile/${res.data.data}`)
        }
    })
}

/**
 * 加密字符串
 * @param {String} data 
 * @param {String} key 
 */
let encryptAES = async function(data, key) {
    let HOST = HOST1;
    if (localStorage.getItem("api_host")) {
        HOST = localStorage.getItem("api_host");
    }
    let { data: resData } = await http.post(`${HOST}/api/encryptAES`, { data, key })
    if (resData.statusCode == 1) {
        return resData.data
    }
}

/**
 * 解密字符串
 * @param {String} encryptedString 
 * @param {String} key 
 */
let decryptAES = async function(data, key) {
    let HOST = HOST1;
    if (localStorage.getItem("api_host")) {
        HOST = localStorage.getItem("api_host");
    }
    let { data: resData } = await http.post(`${HOST}/api/decryptAES`, { data, key })
    if (resData.statusCode == 1) {
        return resData.data
    }
}

/**
 * 获取指定年月天数数组
 * @param {String|Number} yyyy 
 * @param {String|Number} MM 
 * @param {boolean} leftPad 
 */
let getTotalDaysArr = (yyyy, MM, leftPad = false) => {
    return new Array(new Date(yyyy, MM, 0).getDate()).fill(0).map((item, index) => {
        ++index
        return leftPad ? '0' + index : index
    })
}

/**
 * 动态加载脚本
 * @param {String} src 
 */
let loadScript = function(src) {
    return new Promise(function(resolve, reject) {
        var script = document.createElement('script');
        script.async = true;
        script.src = src;
        script.onload = () => {
                resolve(true);
            }
            // eslint-disable-next-line
        script.onerror = (e) => {
            reject(false);
        }
        document.body.appendChild(script);
    })
}

export {
    checkWebp,
    calculatGUID,
    getYMD,
    getHash,
    setCookie,
    getCookie,
    delCookie,
    string2File,
    getTotalDaysArr,
    loadScript,
    encryptAES,
    decryptAES
}