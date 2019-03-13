// const HOST1 = "//common-server.herokuapp.com";
// const HOST2 = "https://www.cjd6568358.tk:6707";
// const HOST1 = "//localhost:3030";
const proxyServers = [{
    protocol: 'all',
    host: '//common-server.herokuapp.com',
    platom: 'herokuapp',
    gfw: true
}, {
    protocol: 'https',
    host: 'https://common-server-fkh5q7kaw.now.sh',
    platom: 'now',
    gfw: true
}, {
    protocol: 'https',
    host: 'https://www.cjd6568358.tk:6707',
    platom: 'n270_https',
    gfw: false
}, {
    protocol: 'http',
    host: 'http://www.cjd6568358.tk:6704',
    platom: 'n270_http',
    gfw: false
}]
export {
    proxyServers
}