import router from './routerMap'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置路由守卫,设置一些信息
const setTitle = (to) => {
    document.title = to.meta.title ? to.meta.title : 'Slow is to Fast'
}
router.beforeEach((to, from, next) => {
    NProgress.start()
    // 此处应该做登陆验证
    if (!to.meta.noBread) store.dispatch('BREAD', to.matched)
        next()
     NProgress.done()
})

router.afterEach((to) => {
    setTitle(to)
})

export default router