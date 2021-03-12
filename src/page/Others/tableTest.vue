<template>
<div>
    <v-table></v-table>
    <button style="width:30px;height:30px" @click="handleIncrease">+</button>
    <span>{{ state }}</span>
    <button style="width:30px;height:30px" @click="handleDecrease">-</button>
</div>
</template>

<script>
import vTable from '@/components/tools/tables';

export default {
  data() {
    return {
      state: 0,
    };
  },
  methods: {
    handleIncrease() {
      this.state++;
    },
    handleDecrease() {
      this.state--;
    },
  },
  components: {
    vTable,
  },
};
</script>
