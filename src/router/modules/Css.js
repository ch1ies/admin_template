
const Layout = () => import('@/components/Frame/layout')
const Css = () => import('@/page/Css/css')

export default {
    path: '/css',
    name: 'Css',
    component: Layout,
    meta: {
        icon: 'el-icon-reading',
        title: 'Css'
    },
    redirect: '/css/index',
    children: [
        {
            path: '/css/index',
            name: 'CssIndex',
            component: Css,
            meta: {
                title: 'css 中心',
            }
        }
    ]
}