<!--
 * @Author: your name
 * @Date: 2020-06-22 17:15:14
 * @LastEditTime: 2020-06-22 23:50:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\mall\src\components\tabbar\TabbarItem.vue
--> 
<template>
  <div class="tab-bar-item">
    
    <div v-if="!isActive"><slot name="item-icon" ></slot></div>
    <div v-else><slot name="item-icon-active" ></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
    
  </div>
</template>

<script>
export default {
  name: "Tabbaritem",
  props:{
    path:String
  },
  data(){
      return{
          isActive: false          
      }
  },
  methods:{
    itemClick(){
      if(this.path == this.$route.path){
        this.$router.push(this.path)
      }else{
        console.log("不等于")
        console.log(this.path)
        console.log(this.$route.path)
      }
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active{
    color: pink;
}
</style>