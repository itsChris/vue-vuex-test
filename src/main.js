import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { getAllCars } from './store/actions'

const app = createApp(App)

app.use(store)

app.mount('#app')

getAllCars(store)

