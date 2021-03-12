/**
 * 自定义插件，利用全局使用
 * 以import的方式导入时，toast已经不是一个组件函数了，而是被render过后的对象
 */
import Toast from './toast.vue'

console.log(Toast)   // 1. 被vue-loader 处理，默认导出是一个ES Module 是一个Vue.js 组件的对象
const obj = {};
obj.install = function(Vue) {
    // 1. 创建组件构造器
    // let toastConsturtor = Vue.component("myToast", Toast)
    let toastConsturtor = Vue.extend(Toast)  // 2. 组件构造器（构造函数）
    console.dir(toastConsturtor)
    // 2. 以new 的方式，根据组件构造器每创建出一个组件实例对象
    const toast = new toastConsturtor(    // 3. 实例对象
        {
        el: document.createElement('div')
        }
    )
    // 3. 手动将组件实例对象，挂载到一个元素上,等同于使用 el
    // toast.$mount(document.createElement('div'))
    console.log(toast)
    // 4. toast.$el 对应的就是div， 挂载到页面dom元素上
    document.body.appendChild(toast.$el)
    
    Vue.prototype.$myToast = toast.show
}
export default obj;