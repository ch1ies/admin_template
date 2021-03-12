const Layout = () => import('@/components/Frame/layout')
const Html = () => import('@/page/Html/Html.vue')

export default {
    path: '/html',
    name: 'html',
    component: Layout,
    meta: {
        title: 'Html',
        icon: 'el-icon-info'
    },
    redirect: '/html/index',
    children: [
        {
            path: '/html/index',
            name: 'htmlIndex',
            component: Html,
            meta: {
                title: 'html中心',
            }
        }
    ]
}