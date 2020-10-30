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
    host: 'https://cjd6568358.3322.org:6706',
    platom: 'N270',
    gfw: false
}]
export {
    proxyServers
}