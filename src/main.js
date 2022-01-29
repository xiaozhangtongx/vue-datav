import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/scss/global.scss'
import * as echarts from 'echarts'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5050'
Vue.prototype.$http = axios

// 引入全局css
import './assets/scss/style.scss'
// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/chart-bar.js'
import 'vue-awesome/icons/chart-area.js'
import 'vue-awesome/icons/chart-pie.js'
import 'vue-awesome/icons/chart-line.js'
import 'vue-awesome/icons/align-left.js'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

// 全局注册
Vue.component('icon', Icon)
Vue.use(dataV)
Vue.use(Antd)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
