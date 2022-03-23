import { createRouter, createWebHistory } from 'vue-router'
import Gallery from '../views/gallery.vue'
import Contact from '../views/contact.vue'
import Swiper from '../views/swiper.vue'
import Config from '../views/config.vue'
import Product from '../views/product.vue'

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
  {
    path: '/swiper',
    name: 'Swiper',
    component: Swiper,
  },
  {
    path: '/config',
    name: 'Config',
    component: Config,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
