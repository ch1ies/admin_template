// 根据路由结构，生成页面模版
import Vue from 'vue';
import Router from 'vue-router';
// import insertVue from '../components/insertVue';


const Login = () => import('@/page/common/login')
const Error = () => import('@/page/common/Error')
const Frame = () => import('@/components/Frame/Frame')
const Index = () => import('@/page/index')

import Html from './modules/Html'
import Css from './modules/Css'
import Javascript from './modules/Javascript'
import Module from './modules/Module'
import VueIn from './modules/Vue'
import React from './modules/React'
import Others from './modules/Others'


// vue 使用路由
Vue.use(Router);

export const routerMap = [
  {
    path: '/',
    name: 'frame',
    component: Frame,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
        meta: {
          title: "主页",
          icon: 'iconfont icon-index-on',
          // notMenu: false,
        }
      },Html,Css,Javascript,Module,VueIn,React,Others,
      
      // 匹配所有路径，只要不在路由列表内，就重定向到404页面
      // 通配符的路由应该放在最后
      // {
      //   path: '*',
      //   redirect: '/404',
      //   name: 'notFound',
      // },
    ]
  },
];

const router = new Router({
  mode: 'hash', // 还可以使用history模式
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ].concat(routerMap)
});


export default router;
