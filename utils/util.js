// import { code2Session } from './api.js';
import http from './http.js'

const pageCache = new Map()

let baseUrl = 'https://cjd6568358.3322.org:6706/api/';

let accountTypeList = [
  { type: 'default', typeName: '默认' },
  { type: 'QQ', typeName: 'QQ' },
  { type: 'wechat', typeName: '微信' },
  { type: 'email', typeName: '邮箱' },
  { type: 'OA', typeName: 'OA' },
  { type: 'APP', typeName: 'APP' },
  { type: 'website', typeName: '网站' },
  { type: 'card', typeName: '证件' }
];

let blockList = [];

let selectors = {
  webSiteList: `
  li@webSiteList{
      &{$}
  };
  `,
  index: `
  .mainbox.forumlist@areaList{
      h3 a{$name};
      tbody:has(.lastpost a)@value{
          h2 a[href=$value]{$name}
      }
  };
  #creditlist_menu>li@creditList{
      &{$}
  };
  #creditlist{$username}
  `,
  forum: `
  filter MathCeil() {
    return Math.ceil(this/38)
  };
  head title{$documentTitle};
  .mainbox.forumlist tbody:has(.lastpost a)@forumList{
      h2 a[href=$href]{$name}
  }
  .mainbox.threadlist table:has(thead.separation)@threadList{
      thead.separation td b{$name};
      tbody:has(th)@value{
          th span[id^=thread_] a[href=$href]{$title};
          .nums{$nums};
          td.icon img[alt=$type];
          span.bold{$permission|Number}
          .author cite{html($thanks|replace(/<a(.*)absmiddle">/g,'')|Number)}
          .author em{$date}
      }
  };
  .mainbox.threadlist+.pages_btns .pages@pageInfo|pack{
      $pageNum = 1;
      $pageCount = 1;
      strong{$pageNum|Number};
      em{$pageCount|Number|MathCeil};
  }
  `,
  thread: `
  filter MathCeil() {
      return Math.ceil(this/10)
  };
  form input[name=formhash][value=$formhash];
  #postform[action=$replyUrl];
  head title{$documentTitle};
  form .mainbox.viewthread@postList{
      .postauthor cite a[id^=userinfo]{$authorName};
      .postauthor p:nth-of-type(1){$authorLevel};
      .postcontent .postinfo strong[id=$pid|replace(/postnum_/g,'')][onclick=$absPostUrl|replace(/',.*/g,'')|match(/viewth.*/g)|first]{$postFloor}
      .postcontent .postinfo{find('小',$postTime|replace(/^.*发表于 /g,''), '只看该作者')}
      .postcontent .postmessage>h2{html($postTitle)}
      .postcontent .postmessage .notice{html($content|replace(/border(.*)alt=""/g,""))}
      .postcontent .postmessage .t_msgfont{html($content|replace(/border(.*)alt=""/g,""))}
  };
  form+.pages_btns .pages@pageInfo|pack{
      $pageNum = 1;
      $pageCount = 1;
      strong{$pageNum|Number};
      em{$pageCount|Number|MathCeil};
  }
  `,
  my: `
  .credits_info ul>li@creditList{
      &{$|trim()}
  };
  #wrapper #menu ul li:nth-child(2) a[href=$formhash|split('formhash=')|slice(1,2)|first];
  #menu li cite a{$username};
  .mainbox table:nth-of-type(1) tbody tr@recentTopics{
      td:nth-child(1) a[href=$href]{$title}
      td:nth-child(1) a[href=$tid|split('-')|slice(1,2)|first];
      td:nth-child(2){$forum}
      td:nth-child(3) a[href=$lastPostUrl]{$lastPost}
      td:nth-child(4){$status}
  };
  .mainbox table:nth-of-type(2) tbody tr@recentReply{
      td:nth-child(1) a[href=$href]{$title}
      td:nth-child(1) a[href=$tid|replace(/^redirect.*ptid=/g,'')];
      td:nth-child(2){$forum}
      td:nth-child(3){$lastPost}
      td:nth-child(4){$status}
  }
  `,
  search: `
  filter MathCeil() {
    return Math.ceil(this/38)
  };
  .mainbox.threadlist tbody@threadList{
      th a[href=$tid|replace('viewthread.php?tid=','')|replace(/&highlight=.*$/g,'')]{$title};
      td.author em{$date};
      td.nums{$nums};
      td.nums strong{$replyCount};
  };
  .mainbox.threadlist+.pages_btns .pages em{$pageCount|Number|MathCeil};
  .mainbox.threadlist+.pages_btns .pages a:nth-of-type(1)[href=$searchHref];
  `
}

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

const toast = (msg) => {
  wx.showToast({
    title: msg,
    icon: 'none'
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

const getHash = (str) => {
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

const groupBy = (list, fn) => {
  const groups = {};
  list.forEach((item) => {
    const group = JSON.stringify(fn(item));
    groups[group] = groups[group] || [];
    groups[group].push(item);
  });
  return groups;
}

const sendMsg = (title, content) => {
  if (typeof content == "object") {
    content = JSON.stringify(content)
  }
  wx.request({
    method: 'POST',
    url: baseUrl + 'sendMsg',
    dataType: 'json',
    responseType: 'text',
    data: {
      title, content
    }
  })
}

const code2Session = (code) => {
  return http.get({
    url: `wechat/code2Session/${code}`
  })
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

let getGlobalConfig = () => {
  return new Promise((reslove, reject) => {
    http.get({
      url: 'https://cjd6568358.gitee.io/static/xgj/config.json'
    }).then(res => {
      wx.setStorageSync('globalConfig', res)
      reslove(res)
    }).catch(e => {
      let globalConfig = wx.getStorageSync('globalConfig')
      if (globalConfig) {
        console.log('globalConfig is cache')
        reslove(globalConfig)
      } else {
        console.warn('globalConfig初始化异常')
        reslove({})
      }
    })
  })
}

let initApp = async () => {
  let config = await getGlobalConfig()
  if (config['baseUrl']) {
    baseUrl = config['baseUrl']
  }
  if (config['accountTypeList']) {
    accountTypeList = config['accountTypeList']
  }
  if (config['selectors']) {
    selectors = config['selectors']
  }
  if (config['blockList']) {
    blockList = config['blockList']
  }
  return await getOpenId()
}

export {
  formatTime,
  getTotalDaysArr,
  calculatGUID,
  sendMsg,
  baseUrl,
  toast,
  compareVersion,
  getOpenId,
  arrayBuffer2String,
  querystring,
  confirm,
  pageCache,
  accountTypeList,
  getHash,
  groupBy,
  initApp,
  selectors,
  blockList
}