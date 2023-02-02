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
        <!-- 검색 -->
        <div class="cm-food__search">
          <CmSearch
            :cmData="searchData">
          </CmSearch>
        </div>        
        <!-- 슬라이드-->
        <div class="cm-food__slider">
          <CmSlider class="cm-food__slider-wrap">
            <div>
              슬라이드 영역
            </div>
          </CmSlider>
        </div>
        <!-- list -->
        <div class="cm-food__list">
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CmBanner from '@/components/banner/BannerView'
import CmSearch from '@/components/common/SearchCommon'
import CmSlider from '@/components/common//SliderCommon'
export default {
  components: {
    CmBanner,
    CmSearch,
    CmSlider
  },
  data() {
    return {
      bannerOpt : {
        info: {
          tit: "전국 맛을 기록하는 지도",
          txt: "전국의 맛집을 \n 나만의 기록으로",
        },
        bgSrc: "@food_map_visual.png",
      },
      searchData : [
        {
          "name": "탕탕",
          "default": "2016",
        },
        {
          "name": "논현각",
          "default": "2023",
        },
        {
          "name": "논현각22",
          "default": "2023",
        },
        {
          "name": "논현각33",
          "default": "2023",
        },
        {
          "name": "웨더",
          "default": "2023",
        },
      ],
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