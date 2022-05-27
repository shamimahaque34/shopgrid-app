import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component:  () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/category-product/:id',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/CategoryView.vue')
  },
  {
    path: '/product-detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/DetailView.vue')
  },

  {
    path: '/show-cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/CheckoutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
