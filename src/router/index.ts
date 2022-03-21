import { createRouter, createWebHistory } from 'vue-router'
import Gallery from '../views/gallery.vue'

const routes = [
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
