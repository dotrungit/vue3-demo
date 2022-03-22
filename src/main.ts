import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCalendar, faCaretDown)
import './index.css'

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
