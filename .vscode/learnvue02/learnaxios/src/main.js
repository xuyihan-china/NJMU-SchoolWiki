/*
 * @Author: your name
 * @Date: 2020-05-28 20:53:16
 * @LastEditTime: 2020-05-29 13:02:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit'
 * @FilePath: \test\.vscode\learnvue02\learnaxios\src\main.js
 */ 
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
axios.defaults.baseURL ='http://152.136.185.210:8000/api/n3'
axios.defaults.timeout= 5000
//会返回一个promise
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   methods:'get'
// }).then(val =>{
//   console.log(val)
// })
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }.then(val =>{
//     console.log(val)
//   })
// })
//传入数组
axios.all([axios({
  url:'/home/multidata',
}),axios({
  url:'/home/data',
  params:{
    type:'sell',
    page:5
  }
})]).then(axios.spread((res1,res2)=>{
  console.log(res1)
  console.log(res2)
}))