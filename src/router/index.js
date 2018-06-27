import Vue from 'vue'
import Router from 'vue-router'
import Seller from '@/components/seller/Seller'
import Goods from '@/components/goods/Goods'
import Ratings from '@/components/ratings/Ratings'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    }
  ]
})
