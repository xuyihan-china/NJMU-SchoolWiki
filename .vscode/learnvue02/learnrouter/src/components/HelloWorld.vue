<template>
  <div class="hello">
    <router-link to="/h/message" >首页</router-link>
    <router-link to="/h/news">新闻</router-link>
    
    <router-view>

    </router-view>
    <!-- 
      子组件挂载到父组件中
     -->
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  /* 
    整理思路 ：
    1.为了可以记录选中的消息还是新闻 在activated 中调用 
    2.离开前保存到path中
    3.activated和unactivated这两个函数 只有组件用了keepalive才是有效果的
    其他时候无效的 使用<keep-alive>
    如果在 keep alive标签中 如果需要频繁创建和销毁 那么可以使用include 和exclude
    include 匹配的组件 正则表达式会被保存
  */
  created(){
    console.log('hellowworld create')
  },
  mounted(){
    /* template被挂载的时候 */
  },
  updated(){
    /* 界面被更新的时候 */
  },
  destroyed(){
    console.log('hellowworld destroyed')
  },
  activated(){
    this.$router.push(this.path)
    console.log('activated')
  },
  deactivated(){
    console.log('deactivated')
  },
  beforeRouteLeave(to,from,next){
    this.path=this.$route.path
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
