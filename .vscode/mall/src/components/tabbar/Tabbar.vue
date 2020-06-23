<!--
 * @Author: your name
 * @Date: 2020-06-22 16:33:30
 * @LastEditTime: 2020-06-22 18:46:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\mall\src\components\tabbar\Tabbar.vue
-->
<template>  
    <div id="tab-bar">
       <slot></slot>
    </div>
</template>
<script>
export default {
    name:"Tabbar"
}
</script>
<style >
    /* 在style引用的固定格式 @import */
   
    #tab-bar{
      display: flex;
      background-color:#f6f6f6;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0px -2px 0.8px rgba(100, 100, 100, 0.07);
    }
    
</style>
