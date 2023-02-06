import Vue from 'vue'
import App from './App.vue'

import { routes } from './router'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
 router,
  render: h => h(App),
}).$mount('#app')
