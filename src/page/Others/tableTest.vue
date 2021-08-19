<template>
<div>
    <v-table></v-table>
    <button style="width:30px;height:30px" @click="handleIncrease">+</button>
    <span>{{ state }}</span>
    <button style="width:30px;height:30px" @click="handleDecrease">-</button>
    账号：<el-input v-model="search.loginId"></el-input>
    密码：<el-input v-model="search.loginPwd"></el-input>
    <el-button type="primary" @click="Login">提交</el-button>
</div>
</template>

<script>
import vTable from '@/components/tools/tables';
import { getStudentApi, LoginApi} from '@/api'

export default {
  data() {
    return {
      state: 0,
      search: {
        loginId: '',
        loginPwd: ''
      }
    };
  },
  methods: {
    handleIncrease() {
      this.state++;
    },
    handleDecrease() {
      this.state--;
    },
    async Login() {
      let data = (await LoginApi(this.search)).data
      console.log(data, 'data-----')
      if (data.code === 0) {
        console.log('登陆成功')
        this.$message.success('登陆成功')
      }
    }
  
  },
  mounted() {
    getStudentApi().then(res =>  res)
    // console.log(getStudentApi())
  },
  components: {
    vTable,
  },
};
</script>
