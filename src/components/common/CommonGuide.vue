<template>
  <div class="cm-info">
    <div class="cm-info__header">
      <p class="tit"><span class="cm-mark">Btn Button 버튼</span></p>
      <p class="txt">준비 중</p>
      <p class="txt">경로 : /components/common/ButtonCommon</p>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">1. default</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code1}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item">

      </div>
    </div>

    <div class="cm-info__header">
      <p class="tit"><span class="cm-mark">Slider Swiper 슬라이드</span></p>
      <p class="txt"><span class="font-weight color-p1">Swiper</span> : 부모(swiper) 자식(swiper-slide) 2개 컴포넌트 사용 중</p>
      <p class="txt">준비 중</p>
      <p class="txt">경로 : /components/common/SliderCommon</p>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">1. 기본 default (기본 배경색)</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code1}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item max-w-center">
        <CmSlider></CmSlider>
      </div>
    </div>
    
  </div><!-- cm-info -->
 
</template>

<script>
import CmSlider from '@/components/common/SliderCommon'
export default {
  components: {
    CmSlider
  },
  inheritAttrs: false,
  data() {
    return {
      codeTag: { 
        code1 : `<CmBanner></CmBanner>`,
        code2 : `<CmBanner class="w-full" style="background:#3d1797;"></CmBanner>`,
      },
      slideOpt : {
        slide : "on",
        swiperList:[
          { 
            bannerSlide : {
              info: {
                tit: "배너 타이틀",
                txt: "배너 소개",
              },
            }
          },
          { 
            bannerSlide : {
              info: {
                tit: "배너 타이틀222",
                txt: "배너 소개222",
              },
            }
          },
          { 
            bannerSlide : {
              info: {
                tit: "배너 타이틀333",
                txt: "배너 소개333",
              },
            }
          },
        ],
        swiperOpt:{ // 슬라이드 컴포넌트에 옵션 전달
          slidesPerView: 1,
        },
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
.cm-info {
  .tit {
    font-size: rem(20px);
    font-weight:550;
  }
  .txt { 
    margin-top: rem(8px);
  }
  &__header {
    @include innerOpt();
    padding-top:50px;
    & + .cm-info__component {
      .cm-info__explanation{
        border-top:2px solid $color-dark;
      }
    }
  }
  &__component {
    margin: 20px 0 0;
  }
  &__explanation {
    @include innerOpt();
    margin-top:10px;
    padding-top:10px;
    border-top:1px solid $sub-color2;
    .cm-code {
      margin-top:5px;
    }
    &-item {
      margin-top: 10px;
    }
  }
  .cm-dash {
    &::after {
      top:12px;
    }
  }
}

</style>