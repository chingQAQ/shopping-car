import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Hello'
import Shop from '@/components/MarketList'
import ShopList from '@/components/MarketListUl'
import ShoppingCart from '@/components/ShoppingCart'
import Product from '@/components/Product'
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
    children: [
      {
        path: '',
        component: ShopList,
      },
      {
        path: ':id(\\d+)',
        name: 'product',
        component: Product,
      },
    ],
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
