import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"

createApp(App).use(router).mount('#app')


async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()