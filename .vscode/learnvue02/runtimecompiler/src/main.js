/*
 * @Author: your name
 * @Date: 2020-05-21 16:07:27
 * @LastEditTime: 2020-06-09 22:02:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\.vscode\learnvue02\runtimecompiler\src\main.js
 */ 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/* import组件 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  /* 组件文件来自component里 的app.vue */
  template: '<App/>'
  /* 用template中的东西把el中的东西去替换掉 */
  /* 你要再上一级组件中注册 再下一级写模板 */
})
