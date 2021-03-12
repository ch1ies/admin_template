<template>
    <div>
    <el-button @click="handleLink">跳转</el-button>
    <h2> User {{ $route.params.id }}</h2>
    <router-view></router-view>
    <!-- <h2>name:{{ $route.params.name }}</h2>
     <h2>id: {{ $route.params.id }}</h2> -->
     <!-- <insert-temp></insert-temp> -->
    </div>
</template>

<script>
// 动态路由匹配

export default {
  methods: {
    handleLink() {
      this.$router.push({
        name: 'insertCom',
      });
    },
  },
  mounted() {
  },
  components: {
  },
};

</script>
