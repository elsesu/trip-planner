import './assets/main.css'
import  {store}  from './components/store'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './index.css'


const app = createApp(App)
const pinia = createPinia()

app.use(router)


app.use(store)
app.mount('#app')