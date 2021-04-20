import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/base.css'
import './assets/js/sizeRem.js'

import { Button,NavBar,Tabbar, TabbarItem  } from 'vant';

Vue.use(Button).use(NavBar).use(Tabbar).use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
