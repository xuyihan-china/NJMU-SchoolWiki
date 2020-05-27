<!--
 * @Author: your name
 * @Date: 2020-05-27 16:33:04
 * @LastEditTime: 2020-05-27 16:51:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editu
 * @FilePath: \test\.vscode\learnvue02\vuex\src\components\HellowVuex.vue
--> 

<template>
    <div>
        <h2>{{counter}}</h2>
        <h2>我是子组件</h2>
    </div> 
</template>

<script>
export default {
    name:"HellowVuex",
    props:{
        counter:Number
    }
}
</script>

<style>

</style>