import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ShoppingCart from '../views/ShoppingCart'
import SuccesView from '../views/Succes'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product/:id',
    props: true,
    name: 'product',
    component: ProductView
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
  },
  {
    path: '/success',
    name: 'success',
    component: SuccesView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
