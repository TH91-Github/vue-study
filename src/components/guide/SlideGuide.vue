<template>
  <div class="cm-info">
    <div class="cm-info__header">
      <p class="tit"><span class="cm-mark">Slider Swiper 슬라이드</span></p>
      <p class="txt"><span class="font-bold color-p1">Swiper</span> : 부모(swiper) 자식(swiper-slide) 2개 컴포넌트 사용 중</p>
      <p class="txt">슬라이드 부모(swiper, swiper-wrapper) 경로 : /components/common/SliderCommon</p>
      <p class="txt">슬라이드 자식(swiper-slide) 경로 : /components/common/SliderItem</p>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">1. 기본 default / class 전달 :$attrs.class 사용 중 </p>
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
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">2. 리스트 및 옵션 전달</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code2}}</span>
          </code>
          <code>
            <span class="data">{{codeTag.code2_2}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item max-w-center">
        <CmSlider
          :swiperOpt="swiperOpt2"
          :slideList="swiperList2">
        </CmSlider>
      </div>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">3. swiper-slide html 구조 및 값 지정.</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code3}}</span>
          </code>
          <code>
            <span class="data">{{codeTag.code3_2}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item max-w-center">
        <CmSlider
          class="cm-info-swiper-3"
          :swiperOpt="swiperOpt3"
          :slideList="swiperList2">
          <template v-slot="swiper">
            <div class="swiper-item">
              <p class="tit">{{ swiper.info.tit}}</p>
              <p class="txt">{{ swiper.info.txt}}</p>
            </div>
          </template>
        </CmSlider>
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
        code1 : `<CmSlider></CmSlider>`,
        code2 : `<CmSlider :swiperOpt="swiperOpt2" :slideList="swiperList2"></CmSlider>`,
        code2_2:`swiperList2:[{slideList:{...}, slideList:{...}, ...}],swiperOpt2:{slidesPerView: 3,...}`,
        code3 : `<CmSlider :swiperOpt="swiperOpt3" :slideList="swiperList2"><template v-slot="swiper"><p>{{ swiper.info.tit}}</p><p>{{ swiper.info.txt}}</p></template></CmSlider>`,
        code3_2 : `swiperList2:[{info:{tit:"슬라이드 타이틀",txt:"슬라이드 소개"},{info:{...},...}],swiperOpt3:{...}`,
      },
      swiperList2:[
        { 
          info: {
            tit: "슬라이드 타이틀1",
            txt: "슬라이드 소개11",
          },
        },
        { 
          
          info: {
            tit: "슬라이드 타이틀2222",
            txt: "슬라이드 소개22",
          },
        },
        { 
          info: {
            tit: "슬라이드 타이틀333",
            txt: "슬라이드 소개33",
          },
        },
        { 
          info: {
            tit: "슬라이드 타이틀444",
            txt: "슬라이드 소개44",
          },
        },
        { 
          info: {
            tit: "슬라이드 타이틀555",
            txt: "슬라이드 소개55",
          },
        },
      ],
      swiperOpt2:{ // 슬라이드 컴포넌트에 옵션 전달
        slidesPerView: 3,
      },
      swiperOpt3:{
        slidesPerView: 2,
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
  &-swiper-3{
    .swiper-item{
      min-height:100px;
      border:1px solid $point-color1;
      color:$color-dark;
      box-sizing:border-box;
    }
  }
}

</style>