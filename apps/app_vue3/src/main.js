import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Insightfe from '../../../packages/core/index'
console.log(Insightfe);

var app = createApp(App)

app.use(Insightfe, {
    apiKey: '123456',
    apiUrl: 'http://localhost:3000/api/report',
})

app.mount('#app')
