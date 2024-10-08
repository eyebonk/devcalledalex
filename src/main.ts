import { createApp } from 'vue'
import FontAwesomeIcon from './plugins/fontawesome.ts'
import './css/app.css'
import App from './App.vue'

const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
