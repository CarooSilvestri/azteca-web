import Vue from 'vue'
import App from './App.vue'

import Home from '../src/pages/Home.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

const home = { template: Home }

const routes = [
  { path: '/', component: home },
]

Vue.use(routes)

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  render: h => h(App),
}).$mount('#app')
