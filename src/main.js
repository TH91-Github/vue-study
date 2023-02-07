import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import commonJs from "./assets/js/common"
import store from './store/'

createApp(App)
  .use(router)
  .use(commonJs)
  .use(store)
  .mount('#app')
