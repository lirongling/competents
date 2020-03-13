import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Comm from '../views/Comm'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Comm,
        children: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '首页'
            },
        }, {
            path: '/tendency',
            name: 'tendency',
            component: () =>
                import ('../views/Tendency.vue'),
            meta: {
                title: '趋势'
            },
        }, {
            path: '/login',
            name: 'login',
            component: () =>
                import ('../views/Login'),
            meta: {
                title: '通用登录'
            },
        }, {
            path: '/picture',
            name: 'picture',
            component: () =>
                import ('../views/Picture'),
            meta: {
                title: '图片预览'
            },
        }, {
            path: '/inform',
            name: 'inform',
            component: () =>
                import ('../views/Inform'),
            meta: {
                title: '通知图标'
            },
        }, {
            path: '/label',
            name: 'label',
            component: () =>
                import ('../views/Label'),
            meta: {
                title: '标签选择器'
            },
        }, {
            path: '/progress',
            name: 'progress',
            component: () =>
                import ('../views/Progress'),
            meta: {
                title: '进度条'
            },
        }, {
            path: '/lock',
            name: 'lock',
            component: () =>
                import ('../views/Lock'),
            meta: {
                title: '锁屏'
            },
        }, {
            path: '/full',
            name: 'full',
            component: () =>
                import ('../views/Full'),
            meta: {
                title: '全屏'
            },
        }, {
            path: '/hurdle',
            name: 'hurdle',
            component: () =>
                import ('../views/Hurdle'),
            meta: {
                title: '底部工具栏'
            },
        }, {
            path: '/dialog',
            name: 'dialog',
            component: () =>
                import ('../views/Dialog'),
            meta: {
                title: '可拖拽dialog'
            },
        }]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),

    },
    {
        path: '/lockView',
        name: 'lockView',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/LockView'),
        meta: {
            title: '锁屏中'
        },
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    let isLock = sessionStorage.getItem('isLock')

    if (to.path === '/lockView')
        next()
    else
        isLock != 0 ? next() : next('/lockView')
        // if (to.path==='/edit'||to.path==='/look') {
        //     let a=to.query._id
        //     a ? next():next('/published')
        // }
        // console.log(from.path)
        // console.log(to.path === from.path)
        // if (!(from.path == '/login' && to.path === from.path)) {

    // } else {
    //     next(false)
    // }

    next()


})

export default router