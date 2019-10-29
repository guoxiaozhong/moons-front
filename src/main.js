// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAMap from 'vue-amap'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/* 高德地图 */
Vue.use(VueAMap)
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '80a94c15187acd540384eabc82c5ac4a',
  // 插件集合
  plugin: ['AMap.Geolocation'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
})
