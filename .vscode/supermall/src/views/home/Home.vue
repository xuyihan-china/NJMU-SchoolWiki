<!--
 * @Author: your name
 * @Date: 2020-06-24 23:33:02
 * @LastEditTime: 2020-07-20 00:03:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\views\home\Home.vue
--> 
/* 
  home 是 大页面 大页面发送网络请求 然后通过父子组件通信 传入子组件
 */
<template>
  <div id="home" class="home-navs">
    <nav-bar id="yyc">
      <div slot="center">京东少年家</div>
    </nav-bar>
    <!--< div class="wrapper">
      <div class="content"> -->
        <!-- @scroll 是 emit 出来的？ -->
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore" ><!-- 要滚动的内容 --> 
        <home-swiper :banners="banners" id="home-swiper" @swiperLoaded="swiperLoaded"></home-swiper>
        <!-- home 大组件中 保留最少的标签值 -->
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <!-- feature view 就是一张图片 -->
        <tab-control :title="['流行','新款','精选']"
                      id="tac" @tabClick="tabClick"
                      ref="tabControl" ></tab-control>
        <goods-list :goods="showGoods"></goods-list>
        </scroll>
      <!-- </div>
    </div> -->
    <back-top @click.native="backClick" v-show="isShowBackTop"/><!-- 如果监听组建的点击要加上native -->
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
import BackTop from "components/content/backTop/BackTop";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    featureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  data() {
    //data的初始值
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
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
  mounted(){
    //组件都有属性 el 用于获取组件的元素
    //this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
  },
 /*  activated(){//进入组件激活
    this.saveY = this.$refs.scroll.positionY
    this.$refs.scroll.scrollTo(0,-this.saveY,0)
    //this.$refs.scroll.refresh
  },
  deactivated(){//不进入失效
    this.saveY = this.$refs.scroll.positionY
  } */
  //进入的时候 进入激活态 
    activated() {
      console.log("active TY"+this.saveY)
      //this.$refs.scroll.scrollTo(150, this.saveY,0)
      //keep alive 的 属性 activated deactivated
      this.$refs.scroll.refresh() //ok 一定要先刷新 然后再 scrollto 否则无法其效果
      this.$refs.scroll.scrollTo(250, this.saveY,0)
    },
    //离开组件 保存Y的位置
    deactivated() {
      //console.log(this.saveY)
       this.saveY = this.$refs.scroll.scroll.y
       //console.log(this.saveY)
       //console.log(this.$refs.scroll.scroll.y)
    }
  ,
  methods: {
    //自己的方法 事件监听相关的方法
    //子组件中 this.$emit('tabClick',index) 同时传入 index 在父组件中进行判断
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
    //网络请求 在methods 中写 为自己的data传递值
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
        //完成上拉加载更多 不然只会加载一次
        this.$refs.scroll.finishPullUp()
        //重新计算高度
        this.$refs.scroll.scroll.refresh()
      });
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    contentScroll(position){
      if(-position.y>1000){
        this.isShowBackTop = true
      }else{
        this.isShowBackTop= false
      }
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    swiperLoaded(){
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  }
};
</script>
/* 作用域在组件内 */
<style scoped>
#home{
  position: relative;
  height: 100vh;
  /* 只有这里设计了 height 100 vh 父元素才有高度给子元素定位  */
  /* 否则子类没有办法定位到里面 */
}
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
  /* position: sticky;
  top: 44px;
  z-index: 9; */
}
#home-swiper {
  padding-top: 44px;
}
#tac {
  z-index: 9;
}
.content{
    position: absolute;
    top: 0px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
}

</style>
