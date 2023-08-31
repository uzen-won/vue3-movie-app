import { createApp } from 'vue'
import App from './App.vue'
import router from './routes' // Same as './routes/index.js'
import store from './store'  // Same as './store/index.js'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) // $route, $router
  .use(store) // $store
  .use(loadImage) // $loadImage
  .mount("#app");
