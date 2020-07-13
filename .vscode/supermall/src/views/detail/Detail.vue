<!--
 * @Author: your name
 * @Date: 2020-06-28 19:07:29
 * @LastEditTime: 2020-07-13 23:08:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\detail\Detail.vue
--> 
<template >
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" />
    <scroll class="content" ref="scroll">
      <detail-swiper :images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="param" :param-info="paramInfo" />

      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="goodsList" />
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailCommentInfo,
    DetailParamInfo,
    DetailGoodsInfo,
    GoodsList
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      goodsList: [],
      themeTops: [],
      currentIndex: 0,
      getThemeTopY :{}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      const data = res.result;
      //console.log(data)
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);

      // 5.获取商品详细信息
      this.detailInfo = data.detailInfo;

      // 6.保存参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      this.getThemeTopY= debounce(()=>{
        this.themeTops = [];
        this.themeTops.push(0);
        this.themeTops.push(-this.$refs.param.$el.offsetTop);
        this.themeTops.push(-this.$refs.comment.$el.offsetTop);
        this.themeTops.push(-this.$refs.recommend.$el.offsetTop);
        this.themeTops.push(Number.MAX_VALUE);
        console.log(this.themeTops);
      },100)
     /*  this.$nextTick(() => {
        this.themeTops = [];
        this.themeTops.push(0);
        this.themeTops.push(-this.$refs.param.$el.offsetTop);
        this.themeTops.push(-this.$refs.comment.$el.offsetTop);
        this.themeTops.push(-this.$refs.recommend.$el.offsetTop);
        this.themeTops.push(Number.MAX_VALUE);
        console.log(this.themeTops);
      }); */
    });
    getRecommend().then(res => {
      console.log(res);
      this.goodsList = res.data.list;
    });
  },
  mounted() {
    /* imageLoad() {
	    	this.$refs.scroll.refresh()
        // 获取对应的offsetTop
        this.themeTops = []
        this.themeTops.push(0)
        this.themeTops.push(this.$refs.param.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
        console.log(this.themeTops)
	    }  */
  },

  methods: {
    imageLoad() {
      //this.$refs.scroll.refresh()
    },
    titleClick(index) {
       this.$refs.scroll.scrollTo(0, this.themeTops[index], 300);
    }
  }
};
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