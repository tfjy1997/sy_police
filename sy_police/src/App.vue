<template>
  <div id="app">
    <router-view class="sy-police-page"></router-view>
  </div>
</template>

<style lang="scss">
html, body {
  margin:0;
  padding:0;
  overflow: auto;


}
#app {
  height: 100%;
  width: 100%;
  min-width: 452px;
  overflow: auto;
}
.sy-police-page {
  width: 100%;
  height: 100%;
  position:fixed;
  
}
</style>
