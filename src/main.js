// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/premisssion'
// 引入scss
import './assets/scss/reset.scss'
import './assets/font/iconfont.css'
import '@/assets/font/iconfont.js'
// 引入elemnet
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import axios from 'axios'
// 引入Echarts
import Echarts from 'echarts'
Vue.prototype.echarts = Echarts
Vue.use(Echarts)

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.use(ElementUI)
// let localRoutes = sessionStorage.getItem('router');
// if(localRoutes){
//   router.addRoutes(JSON.parse(localRoutes));
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
