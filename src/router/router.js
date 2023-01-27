import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/components/ErrorPage"
import MainView from "@/components/MainView"
/* 가이드 리스트 */
import GuideView from "@/components/guide/GuideView"
import CommonGuide from "@/components/guide/CommonGuide"
import BannerGuide from "@/components/guide/BannerGuide"
import SlideGuide from "@/components/guide/SlideGuide"
import TabGuide from "@/components/guide/TabGuide"
/* 개인 기록 */
import RecordStory from "@/components/RecordStory/RecordStory"
/* 맛 지도 */
import FoodMap from "@/components/FoodMap/FoodMap"

const router = createRouter({
  history : createWebHistory(),
  routes : [ // path별 component를 추가한다.
    { // 잘못된 경로 : ErrorPage
      path : "/:pathMatch(.*)",
      name : "not-found",
      meta: {
        tit : "Error" 
      },
      component : ErrorPage
    },
    { 
      path : "/", 
      name : "MainView", 
      meta: {
        tit : "Vue th91" 
      },
      component : MainView
    },
    { 
      path : "/FoodMap", 
      name : "FoodMap", 
      meta: {
        tit : "FoodMap" 
      },
      component : FoodMap
    },
    { 
      path : "/RecordStory", 
      name : "RecordStory", 
      meta: {
        tit : "RecordStory" 
      },
      component : RecordStory 
    },
    {  // guide
      path : "/guide/GuideView", 
      name : "Guide 컴포넌트", 
      meta: {
        tit : "GuideView" 
      },
      component : GuideView 
    },
    {  // 공통 ui 가이드
      path : "/guide/CommonGuide", 
      name : "공통 가이드", 
      meta: {
        tit : "공통 UI 가이드" 
      },
      component : CommonGuide
    },
    {  // 컴포넌트 별 가이드
      path : "/guide/BannerGuide", 
      name : "BannerGuide 컴포넌트", 
      meta: {
        tit : "BannerGuide" 
      },
      component : BannerGuide 
    },
    { 
      path : "/guide/SlideGuide", 
      name : "SlideGuide 컴포넌트", 
      meta: {
        tit : "SlideGuide" 
      },
      component : SlideGuide 
    },
    { 
      path : "/guide/TabGuide", 
      name : "TabGuide 컴포넌트", 
      meta: {
        tit : "TabGuide" 
      },
      component : TabGuide 
    },
  ],
  scrollBehavior() { // to, from, savedPosition
    // 항상 맨 위로 스크롤
    return { top: 0 }
  }
});
router.afterEach((to) => { // title 태그  변경
  document.title = to.meta.tit;
});
export default router;
