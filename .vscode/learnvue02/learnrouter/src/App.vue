<template>
  <div id="app">
    <slot>
    <img src="./assets/logo.png">
    </slot>
    <router-link to="/">首页</router-link>
    <router-link to="/h" tag="button" replace>hello world</router-link >
    <button @click="profileclick">ann1</button>
    <button @click="userclick">ann2</button>
    <!-- <router-link :to="'/user/'+userid" tag="button" replace>查看用户名</router-link>
    <router-link :to="{path:'/profile',query:{name:'coderwhy',age:18,height:199}}" >档案</router-link> -->
    <!-- 动态路由  userid 先传入 routerlink 许逸涵 然后 传给组件 -->
    <!-- <router-link to="/h" tag="li">给我去</router-link > -->
    <!--   <button @click="indexclick">首页</button>
    <button @click="homeclick">home</button> -->
    <!-- 相当于 a href 标签 -->
    <!-- 将 router link 标签 转化为 其他标签有一个属性叫做 tag -->
    <!-- 调用replace 属性 而不是push 的压栈方法  replace不会加上相应的历史记录 -->
    <!-- 替换掉当前的 history 记录  -->
    <!-- 里面有一个 router-link-active 的class 运用这个class可以灵活的加上css样式 表示正再使用的插件 -->
    <!-- 但是可以其别名 属性 active-class="active" 使用的时候就用active -->
    <!-- 如果想统一修改 在 router = new 里加上 linkActiveClass:'active'-->
    <h2>我是app组件</h2>
    <keep-alive exclude="user">
    <router-view>
    </router-view>
    </keep-alive>
    <!-- router view 是占位的东西 就是组件等一会展示再哪个位置 -->
    <!-- 这是决定最外层的东西 如果是children -->
  </div>
</template>

<script>
export default {
  name: 'App',
  /* 通过代码的方式修改路径 用vue router来修改*/
  data(){
    return{
      userid:'许逸涵'
    }
  },
  methods:{
    indexclick(){
        console.log('indexclick')
        /*  vue向所有的属性中添加了$router属性*/
        this.$router.push('/xyh')
        /* push replace about */
    },
    homeclick(){
        console.log('homeclick')
        this.$router.push('/h')
        /* push => push state */
    },
    profileclick(){
      this.$router.push('/user/'+this.userid)
    },
    userclick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'kobe',
          age:19,
          height:197
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
