import Vue from 'vue'
import App from './App'
import router from './router'
/* 这个会自动找到index.js */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
