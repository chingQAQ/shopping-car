import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Hello'
import Shop from '@/components/MarketList'
import ShoppingCart from '@/components/ShoppingCart'
import ErrorPage from '@/components/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/shop',
    component: Shop,
  },
  {
    path: '/cart',
    component: ShoppingCart,
  },
  {
    path: '*',
    component: ErrorPage,
  }
]

export const router = new VueRouter({
  routes,
})
