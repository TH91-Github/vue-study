import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/components/ErrorPage"
import MainView from "@/components/MainView"
import HomeView from "@/components/HomeView"

const router = createRouter({
  history : createWebHistory(),
  routes : [ // path별 component를 추가한다.
    { // 잘못된 경로 : ErrorPage
      path : "/:pathMatch(.*)",
      name : "not-found",
      component : ErrorPage
    },
    { 
      path : "/", 
      name : "MainView", 
      component : MainView 
    },
    { 
      path : "/home", 
      name : "HomeView", 
      component : HomeView 
    },
  ]
});

export default router;
