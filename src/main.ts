import { createApp } from 'vue'
import { store, key } from './store'
import App from './App.vue'
import router from './router'
import './index.css'

createApp(App).use(router, store, key).mount('#app')
