import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import './assets/style/index.scss'
import md5 from 'js-md5';


Vue.config.productionTip = false

Vue.use(ElementUI, {size: 'medium'})

Vue.prototype.$md5 = md5;

// let whiteList = [ 'Login', 'NoFind' ] //白名单
// router.beforeEach((to, from, next) => {
//   if(whiteList.includes(to.name) ) {
//     next()
//   } else {
//     let user = store.state.user
//     console.log(user)
//     if( user.author === '') {
//       next({ name: 'Login'})
//     } else {
//       next()
//     }
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
