// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App';
import router from './router';
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import Plugins from './components/plugins/test';
import myToast from '@/components/plugins/myToast/toast.js'
import '@/assets/styles/reset.less'
import '@/assets/styles/frame.less'

Vue.config.productionTip = false;

Vue.use(Plugins, { name: 'chiles' });
Vue.use(myToast)
Vue.use(ElementUI);


const vm = new Vue({
  router,
  store,
  render: h =>h(App)
}).$mount('#app');

window.Vue = Vue;
window.vue = vm;
