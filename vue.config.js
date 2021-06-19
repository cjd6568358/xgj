const HtmlWebpackPlugin = require('html-webpack-plugin')
// const handlerCb = async ({ url, request, event, params }) => {
//     return await fetch(request, { mode: 'cors' });
// };
module.exports = {
    pwa: {
        name: '小管家',
        themeColor: '#108ee9',
        msTileColor: 'transparent',
        iconPaths: {
            favicon32: 'favicon.png',
            favicon16: 'favicon.png',
            appleTouchIcon: 'img/logo.png',
            maskIcon: 'img/logo.png',
            msTileImage: 'img/logo.png'
        },
        workboxOptions: {
            importWorkboxFrom: 'local',
            clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
            skipWaiting: true, // 强制等待中的 Service Worker 被激活
            runtimeCaching: [
                // 配置路由请求缓存
                {
                    urlPattern: /\/xgj\/(tools|discuz|sign|account|my)$/, // 匹配文件
                    handler: 'NetworkFirst', // 网络优先
                    options: {
                        cacheableResponse: {
                            statuses: [200, 404]
                        }
                    }
                },
                // {
                //     urlPattern: /https:\/\/cjd6568358.gitee.io\/static\/xgj\/config.json/, // 匹配文件
                //     method: "GET",
                //     handler: handlerCb
                // }
            ]
        }
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            let option = null
            config.plugin('html').tap(args => {
                option = Object.assign({}, args[0])
                return args
            })
            option.filename = '404.html'
            config
                .plugin('404')
                .use(HtmlWebpackPlugin, [option]);
        } else {
            // 为开发环境修改配置...
        }
    },
    outputDir: 'docs',
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: false,
    parallel: undefined,
    css: undefined,
    publicPath: '/xgj'
}