import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import carApp from '../views/car-app.vue'
import carDetails from '../views/car-details.vue'
import carEdit from '../views/car-edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/car',
      name: 'car-app',
      component: carApp,
    },
    {
      path: '/car/:id',
      name: 'car-details',
      component: carDetails,
    },
    {
      path: '/car/edit/:id?',
      name: 'car-edit',
      component: carEdit,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
  ],
})

export default router
