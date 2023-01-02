<template>
  <div class="cm-home">
    <div class="cm-home__inner">
      <div class="cm-home__cont">
        <SliderCommon
          class="test"
          :swiperData="swiperData">
          <div class="test">
            
          </div>
        </SliderCommon>
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
          href:'/vue'
        },
        {
          name: 'Guide',
          href: '/guide'
        },
        {
          name: 'Unit Test',
          href: '/unittest'
        },
        {
          name: 'JavaScript',
          href: '/javascript'
        },
        {
          name: 'HTML',
          href: '/html'
        },
        {
          name: 'CSS',
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
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }
      },
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
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