<template>
  <div class="home">
    <home-hearder></home-hearder>
    <div class="middle-content">
      <left-menu></left-menu>
      <nav-title></nav-title>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HomeHearder from '../components/home/HomeHearder'
import NavTitle from '../components/home/NavTitle'
import LeftMenu from '../components/home/LeftMenu'

export default {
  name: 'Home',
  components: {
    HomeHearder,
    NavTitle,
    LeftMenu
  }
}
</script>

<style lang="scss" scoped>
 .home {
   width: 100%;
   .home-hearder {
    width: 100%;
   }
   .middle-content {
      height: 100%;
      .left-menu {
        width: 20%;
        float:left;
        height: 100%;
      }
      .nav-title {
        margin-left:20%;
        height:45px; 
      }
   }
 }
</style>