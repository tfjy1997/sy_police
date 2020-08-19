<template>
  <div class="login">
    <img :src="bgImage" width="100%" height="100%" alt="">
    <div class="login-content">
      <img class="titleImage" :src="titleImage" alt="思雅派出所后台系统">
      <div class="input-content">
        <div class="content-item">
          <img :src="userImage" alt="">
          <span>用户名：</span>
          <input type="text">
        </div>
        <div class="content-item">
          <img :src="passwordImage" alt="">
          <span>密码：</span>
          <input type="password">
        </div>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        name: '',
        password: '',
        author: '1'
      },
      bgImage: require('../assets/images/login/bg-login.png'),
      titleImage: require('../assets/images/logo.png'),
      userImage: require('../assets/images/login/users.png'),
      passwordImage: require('../assets/images/login/password.png')
    }
  },
  methods: {
    login () {
      this.$store.commit('setUser', this.user)
      this.$router.push({ path: '/home' })
    }
  },
}
</script>

<style lang="scss" scoped>
  .login {
    height: 100%;
    width: 100%;
    .login-content {
      position: absolute;
      top: 25%;
      left: 30%;
      width: 40%;
      text-align: center;
      background-color: #FFF;
      padding: 45px 25px;
      min-width: 510px;
      min-height: 260px;
      div {
        margin-bottom: 35px;
      }
      .titleImage {
        margin-bottom: 35px;
      }
      .input-content {
        width: 60%;
        margin:auto;
        .content-item {
          border: 1px solid #DBDBDB;
          text-align: left;
          padding: 6px 15px;
          img {
            width: 8%;
            height: 8%;
            margin-right: 2%;
          }
          span {
            vertical-align: 20%; 
          }

          input {
            height: 30px;
            background:none;  
            outline:none; 
            vertical-align: 20%;  
            width: calc(100% - 100px);
            border:none;
            &:focus {
              border:none;
            }
          }
        }
      }
      .el-button {
        width: 70%;
      }
    }
  }
</style>