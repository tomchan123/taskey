import DashboardView from '@/views/DashboardView.vue'
import SetupView from '@/views/SetupView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DashboardView,
  },
  {
    path: '/setup',
    component: SetupView,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
