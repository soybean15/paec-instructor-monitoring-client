import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './config/axios'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import '@/css/index.css'



const pinia = createPinia()
const app = createApp(App).use(Quasar, quasarUserOptions)

app.use(pinia)
app.use(router)
app.mount('#app')