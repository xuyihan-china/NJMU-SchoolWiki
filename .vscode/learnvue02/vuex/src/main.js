/*
 * @Author: your name
 * @Date: 2020-05-27 16:12:53
 * @LastEditTime: 2020-05-28 17:16:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\.vscode\learnvue02\vuex\src\main.js
 */ 
import Vue from 'vue'
import App from './App'
//组件
import router from './router'
//插件router
import store from './store'
//插件 store
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
