import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { getAllCarsAction, getCurrentCarAction } from './store/actions'

const app = createApp(App)

app.use(store)

app.mount('#app')

getCurrentCarAction(store)
getAllCarsAction(store)

