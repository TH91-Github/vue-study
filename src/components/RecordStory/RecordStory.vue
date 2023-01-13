<template>
  <div class="cm-wrap">
    <div class="cm-home">
      <div class="cm-home__inner">
        <div class="cm-home__cont">
          <!-- 메뉴 카테고리 -->
          <div class="cm-home__category">
            <CategorySlider
              class="cm-home__category-swiper"
              :swiperOpt="swiperOpt" 
              :slideList="slideList">
              <template v-slot="swiper">
                <a href="#" @click="categoryClick" class="cm-home__category-item">
                  <div class="item-head">
                    <span class="ico-mark" :class="[swiper.mark]">{{swiper.name}}</span>
                    <p class="item-head-tit">{{swiper.tit}}</p>
                    <p class="item-head-txt">{{swiper.txt}}</p>
                  </div>
                  <div class="item-info">
                    <p class="item-info-page">게시글 : <span class="num">{{swiper.pageNum}}</span></p>
                    <p class="item-info-update">최종 수정일 : <span class="date">{{swiper.updateDate}}</span></p>
                  </div>
                </a>
              </template>
            </CategorySlider>
            <div class="cm-home__info">
              <div class="cm-home__history">
                <div class="cm-home__history-inner">
                  <div class="cm-home__history-list">

                  </div>
                </div>
              </div>
              <div class="cm-home__preview">
                <div class="cm-home__preview-cont">

                </div>
                <div class="share">
                  <ul class="share-list">
                    <li class="share-item">
                      <a href="#" class="ico github" target="_blank" title="github 새 창 보기"></a>
                    </li>
                    <li class="share-item">
                      <a href="https://codepen.io/th91/pen/rNKrpzw" class="ico codepen" target="_blank" title="codepen 새 창 보기">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategorySlider from '@/components/common/SliderCommon';
export default {
  components: {
    CategorySlider
  },
  props :{
    item : {
      type: String,
      default:''
    },
  }, 
  data() {
    return {
      slideList : [
      {
          name:'Vue',
          mark:'ico-vue',
          tit:'Vue',
          subTit:'Vue 관련 ',
          href:'/vue',
          pageNum : 0,  // 수정 필요.
          updateDate : "2023-01-01"  // 수정 필요.
        },
        {
          name: 'Guide',
          mark:'ico-guide',
          tit:'Guide & Module',
          subTit:'가이드 모듈화 테스트',
          href: '/guide',
          pageNum : 0,
          updateDate : "2023-01-01"
        },
        {
          name: 'JS',
          mark:'ico-js',
          tit:'Unit Testing',
          subTit:'JS 기능 관련',
          href: '/unittest',
          pageNum : 0,
          updateDate : "2023-01-01"
        },
        {
          name: 'JS',
          mark:'ico-js',
          tit:'JavaScript',
          subTit:'JavaScript 관련 ',
          href: '/javascript',
          pageNum : 0,
          updateDate : "2023-01-01"
        },
        {
          name: 'HTML',
          mark:'ico-html',
          tit:'HTML',
          subTit:'HTML 관련',
          href: '/html',
          pageNum : 0,
          updateDate : "2023-01-01"
        },
        {
          name: 'CSS',
          mark:'ico-css',
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
  },
  methods : {
    categoryClick(event) {
      let _this = event.target; 
      console.log(_this)
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
    @include innerOpt();
  }
  &__category {
    &-swiper {
      padding:15px;
    }
    &-item {
      display:block;
      position: relative;
      height:rem(220px);
      padding:20px 20px 65px;
      border-radius:rem(20px);
      background:$color-white;
      box-shadow: 1px 5px 10px rgba(0,0,0,.2);  
      box-sizing: border-box;
    }
    .item {
      &-head {
        &-tit { 
          display:block;
          margin-top:rem(10px);
          font-size: rem(22px);
          font-weight:550;
          line-height: rem(26px);
          @include ellipsis(1);
        }
        &-txt {
          margin-top:rem(5px);
          font-size: rem(18px);
          line-height: rem(22px);
          @include ellipsis(2, rem(22px));
        }
      }
      &-info {
        &-page {
          position: absolute;
          left:20px;
          bottom:40px;
          font-size: rem(14px);
          line-height: rem(18px);
          @include ellipsis(1);
        }
        &-update {
          position: absolute;
          width:100%;
          left:0px;
          bottom:20px;
          padding: 0 20px;
          font-size: rem(12px);
          line-height: rem(16px);
          @include ellipsis(1);
          box-sizing: border-box;
        }
        .date {
          color:$sub-color1;
        }
      }
    }
  }
}
</style>