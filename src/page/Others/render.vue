<template>
    <div class="page">
        <h2>render</h2>
        <!-- <anchored-heading :level="3">hello world</anchored-heading> -->
        <!-- <anchored-heading :level="1">Hello world!</anchored-heading> -->
        <!-- <functional-testing :level="3"> functional-testing</functional-testing> -->
        <list />
    </div>
</template>

<script>
import list from './list';

export default {
  components: {
    list,
  },
};
</script>

<style lang="less" scoped>
  .page {
    margin: 20px;
  }
</style>
