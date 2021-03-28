import Vue from 'vue'
import App from './App.vue'
import AOS from "aos"
import VueRouter from 'vue-router'
import Routes from './Routes'
import VueLazyLoad from 'vue-lazyload'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/custom.scss'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'aos/dist/aos.css'
import 'bootstrap'
import 'hover.css'
import 'hover.css/css/hover-min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'
import 'animate.css/animate.min.css'


Vue.use(VueLazyLoad)
Vue.config.productionTip = false




Vue.use(VueRouter)




App.AOS = new AOS.init({ disable: "phone" });


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})


new Vue({

  render: h => h(App),
  router: router
}).$mount('#app')
