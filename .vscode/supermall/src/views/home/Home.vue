<!--
 * @Author: your name
 * @Date: 2020-06-24 23:33:02
 * @LastEditTime: 2020-06-26 21:50:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\home\Home.vue
--> 
<template>
  <div id="home" class="home-nav">
    <nav-bar id="yyc">
      <div slot="center">京东少年家</div>
    </nav-bar>
    <!--< div class="wrapper">
      <div class="content"> -->
        <scroll class="content"><!-- 要滚动的内容 -->
        <home-swiper :banners="banners" id="home-swiper"></home-swiper>
        <!-- home 大组件中 保留最少的标签值 -->
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control :title="['流行','新款','精选']" id="tac" @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
        </scroll>
      <!-- </div>
    </div> -->
  </div>
</template>

<script>
import HomeSwiper from "views/home/childComps/homeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import featureView from "views/home/childComps/featureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
//网络请求数据
import { getHomeMultidata, getHomeGoods } from "network/home";
import Scroll from "components/common/scroll/Scroll"
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    featureView,
    TabControl,
    GoodsList,
    Scroll
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //自己的方法 事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //上面调用了三次这种方法 每一次传递不通的参数 加载首页的时候就加载好了
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        //console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style scoped>
#yyc {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  background-color: rgb(226, 49, 49);
  color: white;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
#home-swiper {
  padding-top: 44px;
}
#tac {
  z-index: 100;
}
</style>
