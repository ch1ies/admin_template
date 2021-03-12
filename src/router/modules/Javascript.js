const Layout = () => import ('@/components/Frame/layout')
const Javascript = () => import ('@/page/Javascript/javascript')

export default {
    path: '/js',
    name: 'js',
    component: Layout,
    meta: {
        title: 'Javascript',
        icon: 'el-icon-files'
    },
    redirect: '/js/index',
    children: [
        {
            path: '/js/index',
            name: 'jsIndex',
            component: Javascript,
            meta: {
                title: 'Js 中心',
            }
        }
    ]
}