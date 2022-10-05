import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from './store'

import axios from 'axios'

window.axios = axios

window.axios.defaults.baseURL = '//localhost:4044/api'; 
createApp(App)
    .use(store) 
    .use(router)
    .mount('#app')
