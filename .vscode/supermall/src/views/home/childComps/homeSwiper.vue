<!--
 * @Author: your name
 * @Date: 2020-06-25 17:57:34
 * @LastEditTime: 2020-06-25 18:16:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\home\childComps\homeSwiper.vue
--> 
<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" >
        <a href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
//导入轮播图
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style>
</style>