<!--
 * @Author: your name
 * @Date: 2020-06-24 22:09:49
 * @LastEditTime: 2020-07-09 17:32:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\App.
--> 
<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
