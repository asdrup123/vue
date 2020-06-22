// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap' // Import js file
import 'bootstrap/dist/css/bootstrap.min.css' // Import css file
import 'jquery'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'// Install BootstrapVue
import i18n from './i18n'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)
Vue.use(BootstrapVue)// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

router.push('/')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
