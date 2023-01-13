<template>
  <div class="cm-food">
    <!-- 배너 -->
    <div class="cm-food__banner">
      <CmBanner
        class="cm-food__banner-visual w-full"
        :cmOpt="bannerOpt">
      </CmBanner>
    </div>
    <div class="cm-food__inner">
      <div class="cm-food__content">
        <!-- 슬라이드-->
        <CmSlider class="cm-food-swiper">
          <div>
            슬라이드 영역
          </div>
        </CmSlider>
      </div>
    </div>
  </div>
</template>

<script>
import CmBanner from '@/components/banner/BannerView'
import CmSlider from '@/components/common//SliderCommon'
export default {
  components: {
    CmBanner,
    CmSlider
  },
  data() {
    return {
      bannerOpt : {
        info: {
          tit: "배너 타이틀",
          txt: "배너 소개",
        },
        bgSrc: "@food_map_visual.png",
      }
    }
  },
}
</script>

<style lang="scss">
.cm-food {
  &__inner { 
    @include innerOpt();
  }
  .cm-banner{
    &__visual{
      height:300px;
    }
  }
  
}
</style>