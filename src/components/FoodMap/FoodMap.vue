<template>
  <div class="cm-food">
    <div class="cm-food__inner">
      <div>
        <p> 테스트</p>
        <!-- <CmBanner>

        </CmBanner> -->
        <hr>
        <!-- <CmBanner>
          <div class="tit-zone">
            <p class="tit">태그가 삽입된 경우</p>
          </div>
        </CmBanner> -->
      </div>
      <hr>


      <!-- 배너 -->
      <div class="cm-food__banner">
        <CmBanner
          class="cm-food__banner-visual full"
          :cmOpt="bannerOpt">
        </CmBanner>
      </div>

      <hr>
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
  }
}
</script>

<style scoped lang="scss">
.cm-food {
  &__inner { 
    width:100%;
    max-width: $screen-m;
    min-height: 100px;
    margin: 0 auto;
  }
}
</style>