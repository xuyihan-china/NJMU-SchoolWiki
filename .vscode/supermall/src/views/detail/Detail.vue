<!--
 * @Author: your name
 * @Date: 2020-06-28 19:07:29
 * @LastEditTime: 2020-07-11 13:50:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\detail\Detail.vue
--> 
<template>
  <div>
    <detail-nav-bar/>
    <detail-swiper :images="topImages"></detail-swiper>
      
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import {getDetail} from "network/detail";
export default {
    name:"Detail",
    components:{
      DetailNavBar,
      DetailSwiper
    },
    data(){
      return{
        iid:null,
        topImages:[]
      }
    },
    created(){
      this.iid=this.$route.params.iid
      getDetail(this.iid).then(res=>{
        let data = res.result 
        console.log(data)
        this.topImages= data.itemInfo.topImages
       
      })
    },
    methods:{
      
    }
    
}
</script>


<style scoped>
    
</style>