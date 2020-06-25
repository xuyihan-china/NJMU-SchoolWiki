/*
 * @Author: your name
 * @Date: 2020-06-24 22:09:49
 * @LastEditTime: 2020-06-24 23:47:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
