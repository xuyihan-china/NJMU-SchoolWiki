<!--
 * @Author: your name
 * @Date: 2020-06-28 19:07:29
 * @LastEditTime: 2020-07-11 16:07:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\detail\Detail.vue
--> 
<template >
  <div  id="detail">
    <detail-nav-bar />
    <scroll class="content">
    <detail-swiper :images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
     <detail-shop-info :shop="shop"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import {getDetail ,Goods,Shop} from "network/detail";
export default {
    name:"Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll
    },
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop: {},
	      detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        goodsList: [],
        themeTops: [],
        currentIndex: 0
      }
    },
    created(){
      this.iid=this.$route.params.iid
      getDetail(this.iid).then(res=>{
        const data = res.result 
        console.log(data)
        this.topImages= data.itemInfo.topImages
        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
      
        this.detailInfo = data.detailInfo
      })
    },
    methods:{
      
    }
    
}
</script>


<style scoped>
   #detail {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 58px;
    left: 0;
    right: 0;
  }
</style>