/*
 * @Author: your name
 * @Date: 2020-05-28 20:53:16
 * @LastEditTime: 2020-05-29 15:28:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit'
 * @FilePath: \test\.vscode\learnvue02\learnaxios\src\main.js
 */ 
import Vue from 'vue'
import App from './App'
import router from './router'
import {request} from '../network/request'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
request({
  url:'/home/mutidata'
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
/* 
  这里是设置全局的url 有些服务器是分布式的 通过nginx 来反向代理 所以这个url 不一定是唯一需要的url
  
*/
// axios.defaults.baseURL ='http://152.136.185.210:8000/api/n3'
// axios.defaults.timeout= 5000
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


//使用全局的axios 来经行配置axios

// axios.all([axios({
//   url:'/home/multidata',
// }),axios({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:5
//   }
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1)
//   console.log(res2)
// }))

//4.创建实例 axios
// const instance1 = axios.create({
//   baseURL:'http://152.136.185.210:8000/api/n3',
//   timeout:5000
// })
// instance1({
//   url:'/home/mutidata'
// }).then(res =>{
//   console.log(res)
// })
// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1 
//   }
// }).then(res =>{
//   console.log(res)
// })

// const instance2 = axios.create({
    
// })