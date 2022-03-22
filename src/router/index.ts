import { createRouter, createWebHistory } from 'vue-router'
import Gallery from '../views/gallery.vue'
import Contact from '../views/contact.vue'

const routes = [
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
