import { createApp } from 'vue'
import App from './App.vue'
import User from './components/User.vue'

import './assets/main.css'


createApp(App).mount('#app')
createApp(User).mount('#user')