/*
 * @Author: your name
 * @Date: 2020-06-24 23:28:18
 * @LastEditTime: 2020-07-19 20:48:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\router\index.js
 */ 
//安装插件 引入插件
import Vue from 'vue'
import VueRouter from 'vue-router'
//路由的懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path:'/detail/:iid',//注意要有冒号
    component:Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出router
export default router
