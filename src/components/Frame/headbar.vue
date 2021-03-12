<template>
    <nav class="header">
        <div class="collapse-btn" @click="hadnleSidebar">
            <i class="el-icon-menu"></i>
        </div>
        <div class="logo"> USUP GO</div>
        <div class="header-right">
            <el-dropdown trigger='click' @command="handleCommand">
                <span class="el-dropdown-link">
                    {{ user }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="password">修改密码</el-dropdown-item>
                    <el-dropdown-item divided command="exit">退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      user: 'SUN',
      isCollapse: false, // 控制侧边栏的显示隐藏
    };
  },
  methods: {
    hadnleSidebar() {
      this.isCollapse = !this.isCollapse;
      this.$emit('sidebar', this.isCollapse);
    },
    handleCommand() {
    // 由vuex 来控制登陆的信息
    },
  },
};
</script>

<style lang='less' scoped>
.header{
  .collapse-btn{
    float: left;
    padding: 2px 20px 0;
    cursor: pointer;
    height: 60px;
    &:hover{
      background-color: #283446;
    }
    i{
      font-size: 20px;
    }
  }
  .logo{
    float: left;
    font-size: 21px;
  }
  .header-right{
    float: right;
    padding-right: 30px;
    .item{
      margin-right: 25px;
      i{
        font-size: 21px;
      }
    }
    .el-dropdown {
      color: #fff;
      .el-dropdown-link{
        cursor: pointer;
      }
    }
  }
}
</style>
