<!--
 * @Author: your name
 * @Date: 2020-06-01 22:52:24
 * @LastEditTime: 2020-06-21 23:32:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\mall\src\App.vue
--> 

<template>
  <div id="app">
    <div id="tabbar">
        <div class="tab-bar-item">首页</div>
        <div class="tab-bar-item">分类</div>
        <div class="tab-bar-item">购物车</div>
        <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
/* 在style引用的固定格式 @import */
    @import "./assets/css/base.css";
    #tabbar{
      display: flex;
      background-color:#f6f6f6;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0px -2px 0.8px rgba(100, 100, 100, 0.07);
    }
    .tab-bar-item{
      flex: 1;
      text-align: center;
      height: 49px;
    }
</style>
