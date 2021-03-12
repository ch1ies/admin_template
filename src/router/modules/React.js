
const Layout = () => import('@/components/Frame/layout')
const React = () => import('@/page/React/react')

export default {
    path: '/vue',
    name: 'React',
    component: Layout,
    meta: {
        icon: 'el-icon-money',
        title: 'React'
    },
    redirect: '/react/index',
    children: [
        {
            path: '/react/index',
            name: 'reactIndex',
            component: React,
            meta: {
                title: 'React 中心',
            }
        }
    ]
}