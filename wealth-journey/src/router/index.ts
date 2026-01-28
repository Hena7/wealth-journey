import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView.vue' // Import it
import LoginView from '@/views/LoginView.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import IncomeView from '@/views/IncomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ... potentially other routes like Home
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: 'income',
          name: 'income',
          component: IncomeView,
        },
      ],
    },
  ],
})

export default router
