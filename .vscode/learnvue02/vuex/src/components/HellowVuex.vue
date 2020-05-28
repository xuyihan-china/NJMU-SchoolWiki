<!--
 * @Author: your name
 * @Date: 2020-05-27 16:33:04
 * @LastEditTime: 2020-05-28 17:17:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editu
 * @FilePath: \test\.vscode\learnvue02\vuex\src\components\HellowVuex.vue
--> 

<template>
    <div>
        <h2>{{$store.state.counter}}</h2>
        <!-- 首先 {{}}中的数据要是动态的 要用 $store.state.xxx 来调用 -->
        <h2>我是子组件</h2>
    </div> 
</template>

<script>
//这个组件都是用export default 来向外暴露的
export default {
    name:"HellowVuex",
}
</script>

<style>

</style>