<template>
  <div class="cm-wrap">
    <div class="cm-home">
      <div class="cm-home__inner">
        <div class="cm-home__cont">
          <!-- 메뉴 카테고리 -->
          <div class="cm-home__category">
            <SliderCommon
              class="cm-home__category-swiper"
              :swiperOpt="swiperOpt" :slideList="slideList">
              <template v-slot="item">
                <a href="#" class="cm-home__category-item">
                  <div class="item-head">
                    <span class="ico">{{item.name}}</span>
                    <p class="item-head-tit">{{item.tit}}</p>
                    <p class="item-head-txt">{{item.txt}}</p>
                  </div>
                  <div class="item-info">
                    <p class="item-info-page">게시글 : <span class="num">{{item.pageNum}}</span></p>
                    <p class="item-info-update">최종 수정일 : <span class="date">{{item.updateDate}}</span></p>
                  </div>
                </a>
              </template>
            </SliderCommon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderCommon from '@/components/common/SliderCommon';
export default {
  components: {
    SliderCommon
  },
  data() {
    return {
      slideList : [
        {
          name:'Vue',
          tit:'Vue',
          subTit:'Vue 관련 ',
          href:'/vue',
          pageNum : 0,  // 수정 필요.
          updateDate : "2023-01-01"  // 수정 필요.
        },
        {
          name: 'Guide',
          tit:'Guide & Module',
          subTit:'가이드 모듈화 테스트',
          href: '/guide',
          pageNum : 0,
          updateDate : "2023-01-01"
        },
        {
          name: 'JS',
          tit:'Unit Testing',
          subTit:'JS 기능 관련',
          href: '/unittest',
          pageNum : 0,
          updateDate : "2023-01-01"
        },
        {
          name: 'JS',
          tit:'JavaScript',
          subTit:'JavaScript 관련 ',
          href: '/javascript',
          pageNum : 0,
          updateDate : "2023-01-01"
        },
        {
          name: 'HTML',
          tit:'HTML',
          subTit:'HTML 관련',
          href: '/html',
          pageNum : 0,
          updateDate : "2023-01-01"
        },
        {
          name: 'CSS',
          tit:'CSS',
          subTit:'CSS 관련',
          href: '/html',
          pageNum : 0,
          updateDate : "2023-01-01"
        },
      ],
      swiperOpt:{ // 슬라이드 컴포넌트에 옵션 전달
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }
      },
    }
  }
}
</script>

<style scoped lang="scss">
.cm-wrap {
  overflow: hidden;
  position: relative;
  min-height: 100%;
  &::before {
    position: absolute;
    z-index:-1;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 250%;
    background: #3d1797;
    transform: translate(-150%, -50%) rotate(45deg);
    content: "";
    pointer-events : none;
  }
}
.cm-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 100px 30px;
  box-sizing: border-box;
  &__inner { 
    width:100%;
    max-width: $screen-m;
    min-height: 100px;
    margin: 0 auto;
  }
  &__category {
    &-swiper {
      border:1px solid red;
    }
    .swiper-slide {

    }
    &-item {
      display:block;
      position: relative;
      height:220px;
      padding:20px 20px 65px;
      border-radius:20px;
      background: $color-white;
      box-shadow: 1px 5px 10px rgba(0,0,0,.2);  
      box-sizing: border-box;
    }
  }
}
</style>