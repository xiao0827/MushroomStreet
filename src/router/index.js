import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('../views/home/home')
const Category=()=>import('../views/category/category')
const Cart=()=>import('../views/shopcart/cart')
const Own=()=>import('../views/own/own')


Vue.use(Router)
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/own',
    component:Own
  },
]
export default new Router({
  routes,
  mode:'history'
})
