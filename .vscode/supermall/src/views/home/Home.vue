<!--
 * @Author: your name
 * @Date: 2020-06-24 23:33:02
 * @LastEditTime: 2020-06-25 17:11:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\home\Home.vue
--> 
<template>
  <div id="home" class="home-nav">
      <nav-bar><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from 'network/home'
  export default {
    name: "Home",
    components:{
      NavBar
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    created(){
      //请求多个数据
      getHomeMultidata().then(res=>{
        this.banners = res.data.banner
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>
