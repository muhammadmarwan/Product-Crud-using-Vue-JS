import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'ProductIndex',
      component: () => import('../views/Products/ProductIndex.vue')
    },
    {
      path: '/products/create',
      name: 'ProductCreate',
      component: () => import('../views/Products/ProductCreate.vue')
    },
    {
      path: '/products/:id/edit',
      name: 'ProductEdit',
      component: () => import('../views/Products/ProductEdit.vue'),
      props: true,
    },
    {
      path: '/products/:id/view',
      name: 'ProductView',
      component: () => import('../views/Products/ProductView.vue'),
      props: true,
    },
  ]
})

export default router
