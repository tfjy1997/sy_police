<template>
  <div class="home">
    <home-hearder></home-hearder>
    <div class="middle-content">
      <left-menu></left-menu>
      <nav-title></nav-title>
      <router-view class="content"></router-view>
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
  min-width: 1024px;
   .home-hearder {
    width: 100%;
    min-width: 920px;
   }
   .middle-content {
      height: calc( 100% - 75px );
      min-width: 960px;
      // overflow: hidden;
      .left-menu {
        width: 200px;
        float:left;
        height: 100%;
      }
      .nav-title {
        margin-left: 200px;
        height:45px; 
        min-width: 720px;
      }
      .content {
        margin-left: 200px;
        padding: 1% 3%;
        height: calc( 100% - 45px ) ;
        min-width: 900px;
        overflow: auto;
      }
   }
 }
</style>