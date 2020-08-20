<template>
  <div class="home-hearder">
    <div class="title-text">
      <p class="zh">{{ titleZH }}</p>
      <p class="en">{{ titleEN }}</p>
    </div> 
    <div class="exit-btn" @click="exit">
      <img :src="exitImg">
      <p class="base-font-white">退出</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHearder',
  data() {
    return {
      titleZH: 'XXXXX后台管理系统',
      titleEN: 'xxxx xxxxxx xxxxxxx background management system',
      exitImg: require('@/assets/images/common/exit.png')
    }
  },
  methods: {
    exit() {
      this.$store.commit('setUser', {})
      this.$router.push({ name: 'Login'})
    }
  },
}
</script>

<style lang="scss" scoped>

  .home-hearder{
    width: 100%;
    height: 75px;
    background-color: $base-color;
    padding: 10px 10px;
    .title-text {
      color: $white-color;
      display: inline-block;
      width: 60%;
      .zh {
        font-size: 28px;
        min-width: 265px;
      }
      .en {
        font-size: 12px;
        min-width: 310px;
      }
    }
    .exit-btn {
      float: right;
      text-align: center;
      color: $white-color;
      margin-right: 25px;
      cursor: pointer;
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
</style>