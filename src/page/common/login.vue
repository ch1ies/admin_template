<template>
    <div class="warpper-content">
        <div class="content">
            <div class="title">
                <h1>My Channel</h1>
            </div>
            <div class="form">
                <p><input type="username" name="username" v-model="form.loginId" placeholder="用户名"></p>
                <p><input type="password" name="passward" v-model="form.loginPwd" placeholder="密码"></p>
                <p><button @click="login">登陆</button></p>
            </div>
        </div>
    
       
    </div>
</template>
<script>
import { LoginApi } from '@/api'
import { mapActions } from 'vuex'
import { USER_SIGNIN, USER_SIGNOUT } from '@/store/user'
export default {
    data() {
        return {
            form: {
                loginId: '',
                loginPwd: ''
            }
        }
    },
    methods: {
        ...mapActions([USER_SIGNIN,USER_SIGNOUT]),

        async login() {
            console.log(this.$store)
           let data = (await LoginApi(this.form)).data
           if (data.code === 0) {
               this.USER_SIGNIN(data.data)
               this.$message.success('登陆成功')
               this.$router.push({
                   name: 'index'
               })
           } else {
               this.$message.error(data.msg)
           }
        }
    },
    mounted() {
        this.USER_SIGNOUT()
    }
}
</script>
<style lang="less" scoped>
    .warpper-content {
        width: 100%;
        height: 100%;
        background: #abcdcd;
        .content {
            text-align: center;
            padding-top: 300px;
            .form {
                p {
                    margin-top: 10px;
                    margin-bottom: 20px;
                    input {
                        width: 200px;
                        height: 30px;
                        border: 0;
                    }
                    button {
                        width: 50px;
                        height: 30px;
                        background: #abcdef;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>