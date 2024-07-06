import './assets/main.css'
import  {store}  from './components/store'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


const app = createApp(App)


app.use(router)


app.use(store)
app.mount('#app')