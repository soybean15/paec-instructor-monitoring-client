import { createApp,markRaw } from 'vue'
import App from './App.vue'
import router from './router'
import './config/axios'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import '@/css/index.css'
import Plugin from '@quasar/quasar-ui-qcalendar/src/QCalendarDay.js'
import '@quasar/quasar-ui-qcalendar/src/css/calendar-day.sass'


const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
  })
const app = createApp(App).use(Quasar, quasarUserOptions)

app.use(Plugin)
app.use(pinia)
app.use(router)
app.mount('#app')