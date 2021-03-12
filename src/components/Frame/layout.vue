<template>
  <div>
      <el-breadcrumb separator="/" style="margin: 15px 0">
        <el-breadcrumb-item v-for="item in bread" :key="item.title">
            {{ item.title}}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['bread'])
    },
    mounted() {
        console.log(this.bread, 'bread=====')
    }
}
</script>

<style>

</style>