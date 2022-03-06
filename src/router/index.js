import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/ShopView',
    name: 'ShopView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
