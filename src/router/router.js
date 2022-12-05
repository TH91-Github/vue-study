import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/components/ErrorPage"
import HomeView from "@/components/HomeView"

const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
        { 
          path : "/", 
          name : "HomeView", 
          component : HomeView 
        },
        {   // 잘못된 경로 : ErrorPage
            path : "/:pathMatch(.*)",
            name : "not-found",
            component : ErrorPage
        }
    ]
});

export default router;


