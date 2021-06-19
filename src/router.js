import Vue from 'vue'
import Router from 'vue-router'

const SignView = () =>
    import( /* webpackChunkName: "SignView" */ './views/Sign/index.vue')
// const ToolsView = () =>
//     import ( /* webpackChunkName: "ToolsView" */ './views/Tools/index.vue')
const DiscuzView = () =>
    import( /* webpackChunkName: "DiscuzView" */ './views/Discuz/index.vue')
const DiscuzForumView = () =>
    import( /* webpackChunkName: "DiscuzForumView" */ './views/Discuz/forum.vue')
const DiscuzMyView = () =>
    import( /* webpackChunkName: "DiscuzMyView" */ './views/Discuz/my.vue')
const DiscuzThreadView = () =>
    import( /* webpackChunkName: "DiscuzThreadView" */ './views/Discuz/thread.vue')
const DiscuzAutoLoginView = () =>
    import( /* webpackChunkName: "DiscuzAutoLoginView" */ './views/Discuz/autoLogin.vue')
const MyView = () =>
    import( /* webpackChunkName: "MyView" */ './views/My/index.vue')
const AccountListView = () =>
    import( /* webpackChunkName: "AccountListView" */ './views/Account/list.vue')
const AccountView = () =>
    import( /* webpackChunkName: "AccountView" */ './views/Account/index.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/tools',
        //     name: 'ToolsView',
        //     component: ToolsView
        // },
        {
            path: '/discuz',
            name: 'DiscuzView',
            component: DiscuzView,
            meta: {
                keepAlive: true // true 表示需要使用缓存 false表示不需要被缓存
            }
        },
        {
            path: '/discuz/forum/:url',
            name: 'DiscuzForumView',
            component: DiscuzForumView,
            props: true,
            meta: {
                keepAlive: true // true 表示需要使用缓存 false表示不需要被缓存
            }
        },
        {
            path: '/discuz/my',
            name: 'DiscuzMyView',
            component: DiscuzMyView
        },
        {
            path: '/discuz/thread/:url',
            name: 'DiscuzThreadView',
            component: DiscuzThreadView,
            props: true
        },
        {
            path: '/discuz/autoLogin',
            name: 'DiscuzAutoLoginView',
            component: DiscuzAutoLoginView,
            props: true
        },
        {
            path: '/sign',
            name: 'SignView',
            component: SignView
        },
        {
            path: '/account',
            name: 'AccountListView',
            component: AccountListView
        },
        {
            path: '/account/:type/:id?',
            name: 'AccountView',
            component: AccountView,
            props: true
        },
        {
            path: '/my',
            name: 'MyView',
            component: MyView
        },
        {
            path: '*',
            redirect: '/sign'
        },
    ]
})