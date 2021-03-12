<template>
    <div>
        <ul>
            <li v-for="(item,index) in userList" :key="index">
                <el-button @click="handleClick(item)">跳转User页</el-button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      userList: [
        { name: '123', id: 1212 },
        { name: 'vfb', id: 3434 },
        { name: 'wqe', id: 4545 },
      ],
    };
  },
  methods: {
    handleClick({ id, name }) {
      this.$router.push({
        name: 'User',
        params: {
          id,
          name,
        },
      });
    },
  },
};
</script>
