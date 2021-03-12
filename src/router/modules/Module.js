
const Layout = () => import('@/components/Frame/layout')
const Module = () => import('@/page/Module/module_rule')

export default {
    path: '/module',
    name: 'Module',
    component: Layout,
    meta: {
        icon: 'el-icon-house',
        title: 'Module'
    },
    redirect: '/module/index',
    children: [
        {
            path: '/module/index',
            name: 'moduleIndex',
            component: Module,
            meta: {
                title: 'module 中心',
            }
        }
    ]
}