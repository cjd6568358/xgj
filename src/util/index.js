import { proxyServers } from "../config";
import http from "./http";
import Cookies from 'js-cookie'
let checkWebp = function () {
    return new Promise(function (resolve) {
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

let calculatGUID = function () {
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

let getYMD = function (timestamp = Date.now()) {
    let date = new Date(timestamp)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return { year, month, day }
}

let getHash = function (str) {
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

let setCookie = function (cookieKey, cookieVal) {
    Cookies.set(cookieKey, cookieVal, { expires: 30 });
}

let getCookie = function (cookieKey) {
    return Cookies.get(cookieKey);
}

let delCookie = function (cookieKey) {
    Cookies.remove(cookieKey);
}

/**
 * data 必须为字符串
 * @param {Object} params 
 */
let string2File = function (params = { fileName: '', data: '', key: '' }) {
    let HOST = proxyServers[2].host;
    if (typeof params.encrypt === 'undefined') {
        params.encrypt = true
    }
    let tmpForm = document.createElement('form');
    tmpForm.method = "post";
    tmpForm.action = `${HOST}/api/string2File`;
    tmpForm.target = 'name';
    var fileNameInput = document.createElement("input");
    fileNameInput.type = "hidden";
    fileNameInput.name = "fileName"
    fileNameInput.value = params.fileName;
    tmpForm.appendChild(fileNameInput);
    var dataInput = document.createElement("input");
    dataInput.type = "hidden";
    dataInput.name = "data"
    dataInput.value = params.data;
    tmpForm.appendChild(dataInput);
    var encryptInput = document.createElement("input");
    encryptInput.type = "hidden";
    encryptInput.name = "key"
    encryptInput.value = params.key;
    tmpForm.appendChild(encryptInput);
    tmpForm.addEventListener('submit', () => {
        var iWidth = 1100; //弹出窗口的宽度;
        var iHeight = 550; //弹出窗口的高度;
        var iTop = (window.screen.availHeight - 30 - iHeight) / 2; //获得窗口的垂直位置;
        var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; //获得窗口的水平位置;        
        window.open('about:blank', 'name', "height=" + iHeight + ", width=" + iWidth + ", top=" + iTop + ", left=" + iLeft + ",toolbar=no, menubar=no,  scrollbars=yes,resizable=yes,location=no, status=no");
    });
    document.body.appendChild(tmpForm);
    tmpForm.submit()

    // http.post(`${HOST}/api/string2File`, params).then(res => {
    //     if (res.data.statusCode == 1) {
    //         window.open(`${HOST}/api/downloadFile/${res.data.data}`)
    //     }
    // })
}

/**
 * 加密字符串
 * @param {String} data 
 * @param {String} key 
 */
let encryptAES = async function (data, key) {
    let HOST = proxyServers[0].host;
    if (localStorage.getItem("v_host")) {
        HOST = localStorage.getItem("proxy_host");
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
let decryptAES = async function (data, key) {
    let HOST = proxyServers[0].host;
    if (localStorage.getItem("proxy_host")) {
        HOST = localStorage.getItem("proxy_host");
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
let loadScript = function (src) {
    return new Promise(function (resolve, reject) {
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