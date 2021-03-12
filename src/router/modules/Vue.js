
const Layout = () => import('@/components/Frame/layout')
const Vue = () => import('@/page/Vue/vue')

export default {
    path: '/vue',
    name: 'Vue',
    component: Layout,
    meta: {
        icon: 'el-icon-price-tag',
        title: 'Vue'
    },
    redirect: '/vue/index',
    children: [
        {
            path: '/vue/index',
            name: 'vueIndex',
            component: Vue,
            meta: {
                title: 'Vue 中心',
            }
        }
    ]
}