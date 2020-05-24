import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import xyh from '@/components/xyh'
import user from '@/components/user'
Vue.use(Router)
/* 只要是插件就要 安装插件 vue.use */
export default new Router({
  routes: [
    {
      path: '/h',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/',
      component:xyh,
      name:'xyh'
    },
    {
      path:'',/* 缺省值  如果是 缺省值 重新定义到其他路径*/
      redirect:'/h'
      /* 重新定义方向 到另外一个路径 */
    },
    {
      path:'/user/:xuyiha',/* 这里要加上冒号  */
      component:user,
      name:'user'
    }
    
  ],
  mode:'history'
  /* 写上了mode之后 就会变成html5的模式 */
})
