
<script>
/**
 * h ==> cteateElement(){} 函数
 *  接受三个参数
 * 1. {String | Object | Function}
 *  一个HTML的标签名， 组件选项对象，或者resolve了上述任何一种的async函数，必填项
 * 2. {Object}
 *  一个与模版中 attribute 对应的 【数据对象】，可选
 *  深入数据对象
 *  https://cn.vuejs.org/v2/guide/render-function.html
 *    属性： style , class, attrs, props, domProps, on,
 *          nativeOn, directives, scopedSlots
 * 3. {String | Array}
 * 自己虚拟节点(Vnode),由createElement() 构建而成
 * 也可以使用字符串来生成 ‘文本虚拟节点’，可选
 */
// 全局注册的组件
import Vue from 'vue';

const v1 = Vue.component('anchored-heading', {
  render(h) {
    // eslint-disable-next-line no-console
    // console.log(this); // proxy
    return h(
      `h${this.level}`, // 标签名称
      this.$slots.default, // 子节点数组
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});
const v2 = Vue.component('functional-testing', {
  functional: true, // 标记了functional 意味着无状态，无this，可以传递第二个参数context
  render(h, context) {
    // eslint-disable-next-line no-console
    console.log(context);
    return h(
      // eslint-disable-next-line no-unexpected-multiline
      `h${context.props.level}`, // 标签名称
      context.children, // 子节点数组
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});

// 文件名和template模版在一起定义，也可以使用引入单文件组件的形式来注册全局组件
// import vue-component from '...
// Vue.component('my-component', vue-component)
// 在vue-cli3 中不推荐使用模版编译，会报警告
const v3 = Vue.component('my-component', {
  data() {
    return {
      name: '123',
    };
  },
  template: '<h1>{{ name }}</h1>',
});

export default {
  v1,
  v2,
  v3
};
</script>
