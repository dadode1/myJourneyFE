import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '@/views/AuthPage.vue'
import MainJourneyPage from '@/views/MainJourneyPage.vue'
import TestPage from "@/views/TestPage.vue";

const routes = [
  { path: '/', redirect: '/login' }, // default to login page
  { path: '/login', name: 'Login', component: AuthPage },
  { path: '/main', name: 'Main', component: MainJourneyPage },
  { path: '/test', name: 'Test', component: TestPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
