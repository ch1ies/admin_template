const Layout = () => import('@/components/Frame/layout')
const User = () => import('@/page/Others/user')
const tableTest = () => import('@/page/Others/user')
const Slot = () => import('@/page/Others/tableTest')
const render = () => import('@/page/Others/render')
// const insertCom = () => import('@/components/insertTem.js')
// const User = () => import('@/page/Others/user')

// const NotFound = { template: '<p> Page not found</p>' };  //这种方法在runtime-only时不行
const NotFound = () => import('@/page/common/Error')
import insertCom from '@/components/insertTemp';


export default {
    path: '/other',
    name: 'other',
    component: Layout,
    meta: {
        title: 'Other',
        icon: 'el-icon-school'
    },
    redirect: '/other/render',
    children: [
      {
        path: '/other/render',
        name: 'render',
        component: render,
        meta: {
            title: '渲染页面',
            icon: 'el-icon-ship',
            // notMenu: false,
        }
      },
      {
        path: '/other/slot',
        name: 'slot',
        component: Slot,
        meta: {
          title: '插槽测试',
          icon: 'el-icon-ship',
          // notMenu: false,
        }
      },
      {
        path: '/other/table',
        name: 'tableTest',
        component: tableTest,
        meta: {
          title: '表格页面',
          icon: 'el-icon-data-analysis',
          // notMenu: false,
        }
      },
      {
        path: '/other/404',
        component: NotFound,
        meta: {
          notMenu: true,
          title: '404'
        }

      },
      // 动态路由匹配
      {
        path: '/user/:id',
        component: User,
        name: 'User',
        children: [
          {
            path: 'detail',
            component: insertCom,
            name: 'insertCom',
          },
        ],
      },
    ]

}