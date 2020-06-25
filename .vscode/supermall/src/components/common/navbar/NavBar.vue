<!--
 * @Author: your name
 * @Date: 2020-06-25 15:23:59
 * @LastEditTime: 2020-06-25 16:18:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\components\common\navbar\NavBar.vue
--> 
<template>
    <div id="home">
    <div class="nav-bar">
        <!-- 给外面的布局，不要直接给slot 布局 slot会被直接覆盖掉 -->
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
    </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style>
    .nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;/* 文字居中排列 然后 撑起来flex布局 */
        text-align: center;
        box-shadow: 0px 1px 1px rgba(100, 100, 100,0.1);
    }
    .left , .right{
        width:60px;
        
    }
    /* 中间一大块 然后 左右flex布局 */
    .center{
        flex: 1;
        
    }
</style>