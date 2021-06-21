import http from "./http";
import Cookies from "js-cookie";

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
    form+.pages_btns .threadflow a:nth-of-type(1)[href=$prevTopicUrl];
    form+.pages_btns .threadflow a:nth-of-type(2)[href=$nextTopicUrl];
    #ajax_favorite[href=$favoriteUrl];
    #newspecial_menu li:nth-of-type(1) a[href=$newThreadUrl];
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
        $total = 1;
        strong{$pageNum|Number};
        em{$pageCount|Number|MathCeil};
        em{$total|Number};
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
        th a[href=$href]
        th a[href=$tid|replace('viewthread.php?tid=','')|replace(/&highlight=.*$/g,'')]{$title};
        td.author em{$date};
        td.nums{$nums};
    };
    .mainbox.threadlist+.pages_btns .pages em{$pageCount|Number|MathCeil};
    .mainbox.threadlist+.pages_btns .pages a:nth-of-type(1)[href=$searchHref];
    `,
};

let accountTypeList = [
  { type: "default", typeName: "默认" },
  { type: "QQ", typeName: "QQ" },
  { type: "wechat", typeName: "微信" },
  { type: "email", typeName: "邮箱" },
  { type: "OA", typeName: "OA" },
  { type: "APP", typeName: "APP" },
  { type: "website", typeName: "网站" },
  { type: "card", typeName: "证件" },
];

let proxyServers = [
  {
    protocol: "https",
    host: "https://common-server-cjd6568358.vercel.app",
    platom: "NOW",
    gfw: true,
  },
  {
    protocol: "all",
    host: "//common-server.herokuapp.com",
    platom: "HEROKUAPP",
    gfw: true,
  },
  {
    protocol: "https",
    host: "https://cjd6568358.3322.org:6706",
    platom: "N270",
    gfw: false,
  },
];

let checkWebp = function() {
  return new Promise(function(resolve) {
    if (getCookie("webpSupport") == "true") {
      resolve(true);
    } else if (getCookie("webpSupport") == "false") {
      resolve(false);
    } else {
      try {
        let bool =
          document
            .createElement("canvas")
            .toDataURL("image/webp")
            .indexOf("data:image/webp") == 0;
        setCookie("webpSupport", bool);
        resolve(bool);
      } catch (err) {
        setCookie("webpSupport", false);
        resolve(false);
      }
    }
  });
};

let calculatGUID = function() {
  let guid = "";
  for (let i = 1; i <= 32; i++) {
    let n = Math.floor(Math.random() * 16.0).toString(16);
    guid += n;
    if (i == 8 || i == 12 || i == 16 || i == 20) {
      guid += "-";
    }
  }
  return guid;
};

let getYMD = function(timestamp = Date.now()) {
  let date = new Date(timestamp);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return { year, month, day };
};

let getHash = function(str) {
  var I64BIT_TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split(
    ""
  );
  var hash = 5381;
  var i = str.length - 1;

  if (typeof str == "string") {
    for (; i > -1; i--) hash += (hash << 5) + str.charCodeAt(i);
  } else {
    for (; i > -1; i--) hash += (hash << 5) + str[i];
  }
  var value = hash & 0x7fffffff;

  var retValue = "";
  do {
    retValue += I64BIT_TABLE[value & 0x3f];
  } while (
    // eslint-disable-next-line
    (value >>= 6)
  );

  return retValue;
};

let setCookie = function(cookieKey, cookieVal) {
  Cookies.set(cookieKey, cookieVal, { expires: 30 });
};

let getCookie = function(cookieKey) {
  return Cookies.get(cookieKey);
};

let delCookie = function(cookieKey) {
  Cookies.remove(cookieKey);
};

/**
 * data 必须为字符串
 * @param {Object} params
 */
let string2File = function(params = { fileName: "", data: "", key: "" }) {
  let HOST = proxyServers[2].host;
  if (typeof params.encrypt === "undefined") {
    params.encrypt = true;
  }
  let tmpForm = document.createElement("form");
  tmpForm.method = "post";
  tmpForm.action = `${HOST}/api/string2File`;
  tmpForm.target = "name";
  var fileNameInput = document.createElement("input");
  fileNameInput.type = "hidden";
  fileNameInput.name = "fileName";
  fileNameInput.value = params.fileName;
  tmpForm.appendChild(fileNameInput);
  var dataInput = document.createElement("input");
  dataInput.type = "hidden";
  dataInput.name = "data";
  dataInput.value = params.data;
  tmpForm.appendChild(dataInput);
  var encryptInput = document.createElement("input");
  encryptInput.type = "hidden";
  encryptInput.name = "key";
  encryptInput.value = params.key;
  tmpForm.appendChild(encryptInput);
  tmpForm.addEventListener("submit", () => {
    var iWidth = 1100; //弹出窗口的宽度;
    var iHeight = 550; //弹出窗口的高度;
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2; //获得窗口的垂直位置;
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; //获得窗口的水平位置;
    window.open(
      "about:blank",
      "name",
      "height=" +
        iHeight +
        ", width=" +
        iWidth +
        ", top=" +
        iTop +
        ", left=" +
        iLeft +
        ",toolbar=no, menubar=no,  scrollbars=yes,resizable=yes,location=no, status=no"
    );
  });
  document.body.appendChild(tmpForm);
  tmpForm.submit();

  // http.post(`${HOST}/api/string2File`, params).then(res => {
  //     if (res.data.statusCode == 1) {
  //         window.open(`${HOST}/api/downloadFile/${res.data.data}`)
  //     }
  // })
};

/**
 * 加密字符串
 * @param {String} data
 * @param {String} key
 */
let encryptAES = async function(data, key) {
  let HOST = proxyServers[0].host;
  if (localStorage.getItem("proxy_host")) {
    HOST = localStorage.getItem("proxy_host");
  }
  let { data: resData } = await http.post(`${HOST}/api/encryptAES`, {
    data,
    key,
  });
  if (resData.statusCode == 1) {
    return resData.data;
  }
};

/**
 * 解密字符串
 * @param {String} encryptedString
 * @param {String} key
 */
let decryptAES = async function(data, key) {
  let HOST = proxyServers[0].host;
  if (localStorage.getItem("proxy_host")) {
    HOST = localStorage.getItem("proxy_host");
  }
  let { data: resData } = await http.post(`${HOST}/api/decryptAES`, {
    data,
    key,
  });
  if (resData.statusCode == 1) {
    return resData.data;
  }
};

/**
 * 获取指定年月天数数组
 * @param {String|Number} yyyy
 * @param {String|Number} MM
 * @param {boolean} leftPad
 */
let getTotalDaysArr = (yyyy, MM, leftPad = false) => {
  return new Array(new Date(yyyy, MM, 0).getDate())
    .fill(0)
    .map((item, index) => {
      ++index;
      return leftPad ? "0" + index : index;
    });
};

/**
 * 动态加载脚本
 * @param {String} src
 */
let loadScript = function(src) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    // eslint-disable-next-line
    script.onerror = (e) => {
      reject(false);
    };
    document.body.appendChild(script);
  });
};

let getGlobalConfig = () => {
  return new Promise((reslove, reject) => {
    loadScript("https://cjd6568358.gitee.io/static/xgj/config.js").then(
      () => {
        if (window.globalConfig) {
          localStorage.setItem(
            "globalConfig",
            JSON.stringify(window.globalConfig)
          );
          reslove(window.globalConfig);
        } else {
          let globalConfig = localStorage.getItem("globalConfig");
          if (globalConfig) {
            console.log("globalConfig use cache data");
            reslove(JSON.parse(globalConfig));
          } else {
            console.warn("globalConfig初始化异常");
            reslove({});
          }
        }
      },
      () => {
        let globalConfig = localStorage.getItem("globalConfig");
        if (globalConfig) {
          console.log("globalConfig use cache data");
          reslove(JSON.parse(globalConfig));
        } else {
          console.warn("globalConfig初始化异常");
          reslove({});
        }
      }
    );
  });
};

let initApp = async () => {
  let config = await getGlobalConfig();
  if (config["accountTypeList"]) {
    accountTypeList = config["accountTypeList"];
  }
  if (config["selectors"]) {
    selectors = config["selectors"];
  }
};

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
  decryptAES,
  selectors,
  proxyServers,
  initApp,
};
