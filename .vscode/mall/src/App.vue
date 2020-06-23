<!--
 * @Author: your name
 * @Date: 2020-06-01 22:52:24
 * @LastEditTime: 2020-06-22 23:53:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\mall\src\App.vue
--> 

<template>
  <div id="App">
    <router-view></router-view>
    <Tabbar>
      <TabbarItem path="/home"  @click="itemClick">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt />
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category"  @click="itemClick">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt />
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart"  @click="itemClick">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt />
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile"  @click="itemClick">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt />
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/tabbar/Tabbar";
import TabbarItem from "./components/tabbar/TabbarItem";
export default {
  name: "App",
  components: {
    Tabbar,
    TabbarItem
  },
  methods:{
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
