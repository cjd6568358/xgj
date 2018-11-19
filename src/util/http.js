import axios from 'axios'
const httpClient = axios.create({
    withCredentials: true
});
httpClient.interceptors.request.use(async(config) => {
    // Do something before request is sent
    if (document.cookie) {
        config.headers['corscookies'] = document.cookie
    }
    return config;
}, async function(error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
httpClient.interceptors.response.use(async(response) => {
    // eslint-disable-next-line
    console.log('request url:' + response.request.responseURL);
    // Do something with response data
    return response;
}, async function(error) {
    // Do something with response error
    return Promise.reject(error);
});

export default httpClient