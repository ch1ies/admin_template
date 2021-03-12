<template>
    <aside>
        <el-menu unique-opened class="el-menu-vertical-demo" :collapse="isCollapse">
            <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
            <template v-for="(item, index) in routers" v-if=" item.meta && !item.meta.notMenu">
                <el-submenu  :key="index" :index="item.path"> 
                    <template slot="title">
                        <i :class="item.meta.icon"></i>
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <router-link
                    v-for="subItem in item.children"
                    :to="{ path: subItem.path }"
                    :key="subItem.path"
                    >
                        <el-menu-item :index="subItem.path">
                            {{ subItem.meta? subItem.meta.title : '' }}
                        </el-menu-item>
                    </router-link>
                </el-submenu>
            </template>
        </el-menu>
    </aside>
</template>

<script>
import {routerMap} from '@/router/routerMap'
/**
 * 1. 根据路由结构来渲染侧边栏
 * 2. 若为后端控制权限,则应根据后端返回的权限列表 menu 来渲染
 * 3. 若为前端控制权限,通过路由控制
 */

export default {
    props: {
        isCollapse: {
            type: Boolean,
            require: false,
            default: false
        }
    },
    data() {
        return {
            routers: routerMap[0].children
        }
    },
    methods: {
        // handleClick(item) {
        //     console.log(item, 'item=======')
        // }
    },
    mounted() {
        console.log(this.routers, '======')
        console.log(this.$route, 'route')
    }
}
</script>
<style lang="less">
    .aside {
        height: 100%;
        overflow-y: scroll;
        .el-menu {
            height: 100%;
            .iconfont{
                vertical-align: middle;
                margin-right: 10px;
                width:24px;
                text-align: center;
                font-size: 18px;
            }
        }
    }
</style>