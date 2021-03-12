<template>
    <div>
        <my-slot>
            chiles
            <template slot="age"> 24</template>
            <template slot="gender"> 男</template>
            <template slot="mobile"> 111111111</template>
            <template slot="address"> nothing here</template>
        </my-slot>
        <my-slot >
            <!-- 作用域插槽: 父组件使用插槽内容时能够访问子组件中的数据,子组件通过slot属性传递数据-->
        </my-slot>
    </div>
</template>
    
<script>
import Vue from 'vue'
const mySlot = Vue.component("my-slot", {
    // template:'asd', 需使用vue-complie-loader 编译,
    // eslint-disable-next-line no-unused-vars
    render (h) {  // 不能使用箭头函数
        console.log(this, 'this=======')
        return ( 
            <div>
                <p> 姓名 : <span>{this.$slots.default}</span></p>
                <p> 年龄 : <span>{this.$slots.age}</span></p>
                <p> 性别 : <span>{this.$slots.gender}</span></p>
                <p> 手机号 : <span>{this.$slots.mobile}</span></p>
                <p> 地址 : <span>{this.$slots.address}</span></p>
                <p> id : <span>{this.$scopedSlots.default}</span></p>
            </div>
        )
    },
    data() {
        return {
            id: '1213123'
        }
    }
})
console.dir(mySlot)
export default {
    components: {
        // eslint-disable-next-line no-undef
        mySlot,
    }
}
</script>