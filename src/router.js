import Vue from 'vue'
import Router from 'vue-router'

const LoginView = () =>
    import ( /* webpackChunkName: "LoginView" */ './views/Login/index.vue')
const SignView = () =>
    import ( /* webpackChunkName: "SignView" */ './views/Sign/index.vue')
const VideoView = () =>
    import ( /* webpackChunkName: "VideoView" */ './views/Video/index.vue')
const DiscuzView = () =>
    import ( /* webpackChunkName: "DiscuzView" */ './views/Discuz/index.vue')
const DiscuzForumView = () =>
    import ( /* webpackChunkName: "DiscuzForumView" */ './views/Discuz/forum.vue')
const DiscuzMyView = () =>
    import ( /* webpackChunkName: "DiscuzMyView" */ './views/Discuz/my.vue')
const DiscuzThreadView = () =>
    import ( /* webpackChunkName: "DiscuzThreadView" */ './views/Discuz/thread.vue')
const MyView = () =>
    import ( /* webpackChunkName: "MyView" */ './views/My/index.vue')
const PasswordListView = () =>
    import ( /* webpackChunkName: "PasswordListView" */ './views/Password/list.vue')
const PasswordView = () =>
    import ( /* webpackChunkName: "PasswordView" */ './views/Password/index.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/login/:type?',
            name: 'LoginView',
            component: LoginView
        },
        {
            path: '/video',
            name: 'VideoView',
            component: VideoView
        },
        {
            path: '/discuz',
            name: 'DiscuzView',
            component: DiscuzView
        },
        {
            path: '/discuz/forum/:url',
            name: 'DiscuzForumView',
            component: DiscuzForumView,
            props: true
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
            path: '/sign',
            name: 'SignView',
            component: SignView
        },
        {
            path: '/password',
            name: 'PasswordListView',
            component: PasswordListView
        },
        {
            path: '/password/:type/:id?',
            name: 'PasswordView',
            component: PasswordView,
            props: true
        },
        {
            path: '/my',
            name: 'MyView',
            component: MyView
        },
        {
            path: '*',
            redirect: '/video'
        },
    ]
})