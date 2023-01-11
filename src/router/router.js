import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/components/ErrorPage"
import MainView from "@/components/MainView"
/* 컴포넌트 리스트 */
import guideView from "@/components/guide/guideView"
import BannerView from "@/components/banner/BannerView"
/* 맛 지도 */
import FoodMap from "@/components/FoodMap/FoodMap"  // 상세 페이지
import FoodMapView from "@/components/FoodMap/FoodMapView"  // 메인 노출 될 요약 정보
/* 개인 기록 */
import RecordStory from "@/components/RecordStory/RecordStory"  // 상세 페이지
import RecordStoryView from "@/components/RecordStory/RecordStoryView"  // 메인 노출 될 요약 정보

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
      path : "/guide", 
      name : "가이드", 
      meta: {
        tit : "컴포넌트 산출물" 
      },
      component : guideView
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
      path : "/FoodMapView", 
      name : "FoodMap 메인 노출", 
      meta: {
        tit : "FoodMap" 
      },
      component : FoodMapView
    },
    { 
      path : "/RecordStory", 
      name : "RecordStory", 
      meta: {
        tit : "RecordStory" 
      },
      component : RecordStory 
    },
    { 
      path : "/RecordStoryView", 
      name : "RecordStory 메인 노출", 
      meta: {
        tit : "RecordStory" 
      },
      component : RecordStoryView 
    },

    // component
    { 
      path : "/banner", 
      name : "BannerView 컴포넌트", 
      meta: {
        tit : "BannerView" 
      },
      component : BannerView 
    },
  ]
});
router.afterEach((to) => { // title 태그  변경
  document.title = to.meta.tit;
});
export default router;
