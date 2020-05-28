<!--
 * @Author: your name
 * @Date: 2020-05-27 16:12:53
 * @LastEditTime: 2020-05-28 12:16:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\.vscode\learnvue02\vuex\src\App.vue
--> 
<!--
 * @Author: xyh
--> 

<template>
<!-- devtools  -->
  <div id="app">
    <button @click="add">+</button>
    <h2>{{$store.state.counter}}</h2>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <h2>{{message}}</h2>
    <h3>--------------getters 的相关信息---------------</h3>
    <h2>{{$store.getters.powercounter}}</h2>
    <h3>--------------组件中的内容---------------------</h3>
    <hellowVuex  />
    <h3>-------------info的内容是否是响应式的-----------</h3>
    <h2>{{$store.state.info}}</h2>
  </div>
</template>

<script>
import HellowVuex from './components/HellowVuex'
//这种导出只有 export default 里自己起了名字才可以导出 name = HellowVuex
/* 在上级组件中注册 */
/* export const 只可以这么导入 */
import { INCREMENT} from './store/mutations-types'
export default {
  name: 'App',
  components:{
    HellowVuex
  },
  data(){
    return {
      message:'我是app',
      counter:0
    }
  },
  methods:{
    add(){
      //在这两个方法中提交mutations
      this.$store.commit(INCREMENT)
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(count){//payload 携带的 参数
      this.$store.commit('addCount',count)
    },
    updateInfo(){
      this.$store.dispatch('aupdateInfo','i am payload')
    }
    // addCount({
    //   type:'increment',
    //   count,
    //   age:18 这种风格 相当于 payload 是一个对象 这是一个对象赋值给counter对象
    // })
  }
}
</script>

<style>
</style>
