import axios from 'axios'
import Agent from 'agentkeepalive'
// import temme from 'temme'
// let temme = null
const keepaliveAgent = new Agent({
    maxSockets: 100,
    maxFreeSockets: 10,
    timeout: 60000,
    freeSocketTimeout: 30000
})
const httpClient = axios.create({
    withCredentials: true
});
httpClient.defaults.httpAgent = keepaliveAgent;
httpClient.interceptors.request.use(async (config) => {
    // let temmeConvert = localStorage.getItem('temmeConvert')
    // if (config.url.includes('html2Json') && temmeConvert === 'client') {
    //     config.temmeConvert = temmeConvert
    //     config.url = config.url.replace('html2Json', 'advancedProxy')
    // }
    // Do something before request is sent
    if (document.cookie) {
        config.headers['corscookies'] = document.cookie
    }
    return config;
}, async function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
httpClient.interceptors.response.use(async (response) => {
    // if (response.config.temmeConvert === 'client') {
    //     if (!temme) {
    //         let { default: temmeLib } = await import(/* webpackChunkName: 'temme' */'temme')
    //         temme = temmeLib
    //     }
    //     let selector = JSON.parse(response.config.data).selector
    //     response.data.data = temme(response.data.data, selector)
    // }
    // eslint-disable-next-line
    console.log('request url:' + response.request.responseURL);
    // Do something with response data
    return response;
}, async function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default httpClient