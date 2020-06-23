/*
 * @Author: your name
 * @Date: 2020-06-22 21:04:58
 * @LastEditTime: 2020-06-22 23:50:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\mall\src\router\index.js
 */ 
import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)
const Home = ()=>import ('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const routes =[
    {
        path:'',
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
      }
]
const router = new VueRouter(
    routes
)
export default router