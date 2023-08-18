import { createApp } from "vue";
import App from "./App.vue";
// 특정한 폴더의 index라는 이름의 파일을 가져올떄는 index 생략가능
//import router from "./routes/index.js"
import router from "./routes"
import store from "./store"
import loadImage from "./plugins/loadImage";

//use메소드 : vueJS 프로젝트에 연결할 플러그인(라이브러리)을 지정하는 메소드
createApp(App)
  .use(router) // $router, $route
  .use(store) //$store
  .use(loadImage) //$loadImage
  .mount("#app");

