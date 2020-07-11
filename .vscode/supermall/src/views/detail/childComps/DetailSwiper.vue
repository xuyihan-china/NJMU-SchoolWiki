<!--
 * @Author: your name
 * @Date: 2020-06-29 16:29:14
 * @LastEditTime: 2020-07-11 14:13:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\detail\childComps\DetailSwiper.vue
--> 
<template>
  <div>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in images"
                 :key="index" class="swiper-item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name:"DetailSwiper",
    props:{
       images:{
           type:Array,
           default(){
               return []
           }
       }
        
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
    .swiper-item{
        height: 200px;
    }
</style>