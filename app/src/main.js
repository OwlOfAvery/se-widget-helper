import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { GesturePlugin } from '@vueuse/gesture'
import './style.scss'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(GesturePlugin)
app.mount('#app')
