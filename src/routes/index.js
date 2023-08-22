import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home'
import About from './About'
import Movie from './Movie'
import NotFound from "./NotFound";


export default createRouter({
  //Hash, History
  //Hash 모드
  //https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior() { 
    return {top: 0}
  },
  //pages
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/movie/:id",
      component: Movie,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});