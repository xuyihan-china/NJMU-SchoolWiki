<!--
 * @Author: your name
 * @Date: 2020-06-25 17:57:34
 * @LastEditTime: 2020-06-28 16:35:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\home\childComps\homeSwiper.vue
--> 
<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" >
        <a href="item.link">
          <img :src="item.image"  @load="imageLoaded"  >
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
  data(){
    return{
      isLoad:false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoaded(){
      if (!this.isLoaded) {
      		this.$emit('swiperLoaded')
          this.isLoaded = true
        }
    }
  }
};
</script>

<style>
</style>