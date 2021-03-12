<template>
    <div>
    <h1>首页</h1>
    <router-link :to="{name: 'render'}">
        <el-button>render</el-button>
     </router-link>

    <router-link :to="{name: 'tableTest'}">
        <el-button>table</el-button>
        <p>{{ student }}</p>
     </router-link>
     <button @click="handleClick">myToast</button>
     <div>
       <el-tooltip effect="light" content="兼容历史版本" placement="right-start">
         <i class="el-icon-question"></i>
         <!-- <el-button slot="reference">hello</el-button> -->
       </el-tooltip>
       <h2>1212</h2>
        <el-popover effect="light" content="兼容历史版本" placement="right-start">
         <!-- <i class="el-icon-question"></i> -->
         <el-button>hello hello</el-button>
         <i slot="reference" class="el-icon-question"></i>
       </el-popover>
     </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      student: '123',
    };
  },
  methods: {
    handleClick() {
      console.log(this)
      this.$myToast('你好呀', 2000)  
    }
  }
};
</script>
