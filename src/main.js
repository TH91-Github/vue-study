import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import commonJs from "./assets/js/common"

createApp(App).use(router).use(commonJs).mount('#app')
