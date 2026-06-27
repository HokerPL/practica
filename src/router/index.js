import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage
    },
    {
      path: '/Catalog',
      name: 'Catalog',
      component: () => import('../pages/Catalog.vue'),
    },
    {
      path: '/BrendsPage',
      name: 'BrendsPage',
      component: () => import('../pages/BrendsPage.vue'),
    },
    {
      path: '/TenderZapros',
      name: 'TenderZapros',
      component: () => import('../pages/TenderZapros.vue'),
    },
    {
      path: '/PartherPage',
      name: 'PartherPage',
      component: () => import('../pages/PartherPage.vue'),
    },
    {
      path: '/ContactPage',
      name: 'ContactPage',
      component: () => import('../pages/ContactPage.vue'),
    },
    {
      path: '/StatiPage',
      name: 'StatiPage',
      component: () => import('../pages/StatiPage.vue'),
    },
  ],
})

export default router
