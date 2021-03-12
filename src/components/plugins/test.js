
// 注册一个全局的插件
const plugin = {
  install: (Vue, options) => {
    // 在Vue 的原型上添加方法
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.SayMyName = function () {
      console.log('测试插件的使用');
    };
    // 在Vue构造函数上添加属性
    // eslint-disable-next-line no-param-reassign
    Vue.testName = options.name;

    // eslint-disable-next-line no-param-reassign
    Vue.sayHello = function () {
      console.log('hello');
    };
  },
};


export default plugin;
