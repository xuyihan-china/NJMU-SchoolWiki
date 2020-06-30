<!--
 * @Author: your name
 * @Date: 2020-06-28 19:07:29
 * @LastEditTime: 2020-06-29 16:49:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\detail\Detail.vue
--> 
<template>
  <div>
    <detail-nav-bar/>
      <!-- <h2>详情页</h2>
      <h1>{{iid}}</h1> -->
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import {getDetail} from "network/detail";
export default {
    name:"Detail",
    components:{
      DetailNavBar
    },
    data(){
      return{
        iid:null,
        res:null
      }
    },
    created(){
      this.iid=this.$route.params.iid
      getDetail(this.iid).then(res=>{
        console.log(res)
      })
    },
    methods:{
      
    }
    
}
</script>


<style scoped>
    
</style>