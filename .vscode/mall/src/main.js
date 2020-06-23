/*
 * @Author: your name
 * @Date: 2020-06-01 22:52:24
 * @LastEditTime: 2020-06-22 21:08:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \.vscode\mall\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
