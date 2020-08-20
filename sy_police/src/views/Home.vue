<template>
  <div class="home">
    <home-hearder></home-hearder>
    <div>
      <left-menu></left-menu>
      <router-view></router-view>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHearder from '../components/home/HomeHearder'
import HomeFooter from '../components/home/HomeFooter'
import LeftMenu from '../components/home/LeftMenu'

export default {
  name: 'Home',
  components: {
    HomeHearder,
    HomeFooter,
    LeftMenu
  }
}
</script>

<style lang="scss" scoped>
 .home {
   .home-hearder {
     
   }
 }
</style>