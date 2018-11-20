const HtmlWebpackPlugin = require('html-webpack-plugin')
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
            clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
            skipWaiting: true, // 强制等待中的 Service Worker 被激活
            runtimeCaching: [
                // 配置路由请求缓存
                {
                    urlPattern: "(?<!(.html|.svg|.png|.jpg|.json|.js|.css|.txt))$", // 匹配文件
                    handler: 'networkFirst', // 网络优先
                    options: {
                        cacheableResponse: {
                            statuses: [200, 404]
                        }
                    }
                }
            ]
        }
    },
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         return {
    //             plugins: [
    //                 new HtmlWebpackPlugin({
    //                     "minify": {
    //                         "removeComments": true,
    //                         "collapseWhitespace": true,
    //                         "removeAttributeQuotes": true,
    //                         "collapseBooleanAttributes": true,
    //                         "removeScriptTypeAttributes": true
    //                     },
    //                     "template": "E:\\workspace\\xgj\\public\\index.html",
    //                     "filename": "404.html"
    //                 })
    //             ]
    //         }
    //     } else {
    //         // 为开发环境修改配置...
    //     }
    // },
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
    // pages: {//pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    //     index: {//除了 entry 之外都是可选的
    //         entry: 'src/main.js',// page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
    //         template: 'public/index.html',// 模板来源
    //         filename: 'index.html',// 在 dist/index.html 的输出
    //         title: '小管家2.0',// 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
    //         chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    //     },
    //     notFound: {//除了 entry 之外都是可选的
    //         entry: 'src/main.js',// page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
    //         template: 'public/index.html',// 模板来源
    //         filename: '404.html',// 在 dist/index.html 的输出
    //         title: '小管家2.0',// 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
    //         chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    //     },
    // },
    baseUrl: '/xgj',
    outputDir: 'docs',
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
}