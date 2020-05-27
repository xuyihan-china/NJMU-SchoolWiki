<!--
 * @Author: your name
 * @Date: 2020-05-27 16:12:53
 * @LastEditTime: 2020-05-27 16:52:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\.vscode\learnvue02\vuex\src\App.vue
--> 
<!--
 * @Author: xyh
--> 
<template>
  <div id="app">
    <button @click="counter++">+</button>
    <h2>{{counter}}</h2>
    <button @click="counter--">-</button>
    <h2>{{message}}</h2>
    <hellowVuex :counter="counter" />
  </div>
</template>

<script>
import HellowVuex from './components/HellowVuex'
/* 在上级组件中注册 */
export default {
  name: 'App',
  components:{
    HellowVuex
  },
  data(){
    return {
      message:'我是app',
      counter :0
    }
  }
}
</script>

<style>
</style>
