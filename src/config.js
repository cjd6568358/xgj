// const HOST1 = "//common-server.herokuapp.com";
// const HOST2 = "https://www.cjd6568358.tk:6707";
// const HOST1 = "//localhost:3030";
const proxyServers = [{
    protocol: 'all',
    host: '//common-server.herokuapp.com',
    platom: 'HEROKUAPP',
    gfw: true
}, {
    protocol: 'https',
    host: 'https://common-server.cjd6568358.now.sh',
    platom: 'NOW',
    gfw: true
}, {
    protocol: 'https',
    host: 'https://cjd6568358.3322.org:6707',
    platom: 'N270',
    gfw: false
}]
export {
    proxyServers
}