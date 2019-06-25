import http from './http.js'

let code2Session = (code) => {
  return http.get({
    url: `wechat/code2Session/${code}`
  })
}

export {
  code2Session,
}