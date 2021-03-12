<template>
  <el-container>
    <el-header class="header">
        <head-bar v-on:sidebar="handleSidebar"></head-bar>
    </el-header>
    <el-container class="content">
      <el-aside class="aside" :width=" isCollapse ? '64px' : '240px'"  >
          <side-bar></side-bar>
      </el-aside>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import headBar from './headbar';
import sideBar from './sidebar';

export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleSidebar(isCollapse) {
      this.isCollapse = isCollapse
    }
  },
  components: {
    headBar,
    sideBar,
  },
};

</script>
<style>
    .header {
        background: #abcdef;
    }
    .aside {
        /* background: #afafaf; */
    }
</style>
