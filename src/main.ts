
import './scss/index.css'
import { createApp } from 'vue'

import Varlet from '@varlet/ui'
import '@varlet/touch-emulator'
import '@varlet/ui/es/style'

import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
app.use(Varlet)
app.mount('#app')
