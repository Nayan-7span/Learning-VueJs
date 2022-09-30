import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./Routes"
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'



createApp(App).use(router).mount('#app')
