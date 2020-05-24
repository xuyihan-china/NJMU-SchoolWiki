import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import xyh from '@/components/xyh'
// import user from '@/components/user'
//实现路由懒加载 一个懒加载一个js文件
const  HelloWorld = ()=> import('@/components/HelloWorld')
const xyh = ()=> import('@/components/xyh')
const  user = ()=> import('@/components/user')
const  homenews = ()=> import('@/components/homenews')
const  homemessage = ()=> import('@/components/homemessage')
const profile = ()=> import('@/components/profile')
Vue.use(Router)
/* 只要是插件就要 安装插件 vue.use */
export default new Router({
  routes: [
    {
      path: '/h',
      name: 'HelloWorld',
      component: HelloWorld,
      /* 配置子组件用children */
      children:[
        {
          path:'news',/* 子路由不用加/ */
          component:homenews
        },
        {
          path:'message',
          component:homemessage
        },
        {
          path:'',
          redirect:'message'
        }
      ]
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
      /* 其实这是一个变量 */
      component:user,
      name:'user'
    },
    {
      path:'/profile',
      component:profile,
      name:'profile'
    }
    
  ],
  mode:'history'
  /* 写上了mode之后 就会变成html5的模式 */
})
