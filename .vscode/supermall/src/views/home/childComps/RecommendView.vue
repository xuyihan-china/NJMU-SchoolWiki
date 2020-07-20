<!--
 * @Author: your name
 * @Date: 2020-06-25 20:37:50
 * @LastEditTime: 2020-07-19 23:50:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\home\childComps\RcommendView.vue
--> 
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <!-- 在根 item 遍历子元素也可以拿到item -->
      <!-- v-for ="item in recommends  " -->
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name:"RecommendView",
   /*  props:{
        recommends:{
           type:Array,
           default(){
               return [];
           }
        }
    } */
    props:{
      recommends:{
        type:Array,
        default(){
          return [];
        }
      }
    }
}
</script>

<style>
    .recommend {
    display: flex;
    margin-top: 0;
    font-size: 14px;
    padding-bottom: 20px;
    border-bottom: 3px solid #eee;
    background-color: white;
    border: 0px 0px solid white;
  }

  .recommend-item {
    flex: 1;
    padding-top: 15px;
    text-align: center;
  }

  .recommend img {
    width: 80px;
    height: 80px;
    /* margin-bottom: 10px; */
  }
</style>