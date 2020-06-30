<!--
 * @Author: your name
 * @Date: 2020-06-29 16:29:14
 * @LastEditTime: 2020-06-29 16:53:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\detail\childComps\DetailSwiper.vue
--> 
<template>
  <swiper>
      <swiper-item >

      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name:"DetailSwiper",
    props:{
        images:Array,
        default(){
            return []
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
        height: 300px;
    }
</style>