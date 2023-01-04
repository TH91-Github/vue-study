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
              <template v-slot="item" >
                <div>
                  <p>{{item.name}}</p>
                  <p>{{item.href}}</p>
                </div>
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
          tit:'',
          subTit:'',
          href:'/vue'
        },
        {
          name: 'Guide',
          tit:'',
          subTit:'',
          href: '/guide'
        },
        {
          name: 'Unit Test',
          tit:'',
          subTit:'',
          href: '/unittest'
        },
        {
          name: 'JavaScript',
          tit:'',
          subTit:'',
          href: '/javascript'
        },
        {
          name: 'HTML',
          tit:'',
          subTit:'',
          href: '/html'
        },
        {
          name: 'CSS',
          tit:'',
          subTit:'',
          href: '/html'
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
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }
      },
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

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
}
</style>