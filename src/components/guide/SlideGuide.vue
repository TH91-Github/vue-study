<template>
  <div class="cm-info">
    <div class="cm-info__header">
      <p class="tit"><span class="cm-mark">Slider Swiper 슬라이드</span></p>
      <p class="txt"><span class="font-bold cm-dash color-p1">Swiper:</span> 부모(swiper) 자식(swiper-slide) 2개 컴포넌트 사용 중</p>
      <p class="txt"><span class="font-bold cm-dash">슬라이드 부모(swiper, swiper-wrapper) 경로:</span> /components/common/SliderCommon</p>
      <p class="txt"><span class="font-bold cm-dash">슬라이드 자식(swiper-slide) 경로:</span> /components/common/SliderItem</p>
      <p class="txt">
        <span class="font-bold cm-dash">컴포넌트 사용:</span>
        <span class="font-bold color-p2">[CmSlider]</span> import CmSlider from '@/components/common/SliderCommon'
      </p>
      <p class="txt">
        <span class="font-bold cm-dash">참고: 
          <a 
            href="https://swiperjs.com/" 
            target="_blank" 
            title="새 창 열림">
            https://swiperjs.com/
          </a>
        </span>
      </p>

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
          :slideData="slideData2"
          :swiperOpt="swiperOpt2">
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
          :slideData="slideData2"
          :swiperOpt="swiperOpt3">
          <template 
            v-slot="swiper">
            <div class="swiper-item">
              <p class="tit">{{ swiper.info.tit}}</p>
              <p class="txt">{{ swiper.info.txt}}</p>
            </div>
          </template>
        </CmSlider>
      </div>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">4. navigation : 좌우 버튼</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code4}}</span>
          </code>
          <code>
            <span class="data">{{codeTag.code4_2}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item max-w-center">
        <CmSlider
          :slideData="slideData2"
          :swiperOpt="swiperOpt4">
        </CmSlider>
      </div>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">5. pagination</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code5}}</span>
          </code>
          <code>
            <span class="data">{{codeTag.code5_2}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item max-w-center">
        <CmSlider
          :slideData="slideData2"
          :swiperOpt="swiperOpt5">
        </CmSlider>
      </div>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">6. scrollbar </p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code6}}</span>
          </code>
          <code>
            <span class="data">{{codeTag.code6_2}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item max-w-center">
        <CmSlider
          :slideData="slideData2"
          :swiperOpt="swiperOpt6">
        </CmSlider>
      </div>
    </div>
    
  </div><!-- cm-info -->

  <!--
     navigation: true,
      scrollbar: true,
      pagination: {
        clickable :true
      }

  -->

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
        code2 : `<CmSlider :slideData="slideData2" :swiperOpt="swiperOpt2"></CmSlider>`,
        code2_2:`slideData2:[{...},{...},...],swiperOpt2:{slidesPerView: 3,...}`,
        code3 : `<CmSlider :slideData="slideData2" :swiperOpt="swiperOpt3"><template v-slot="swiper"><p>{{ swiper.info.tit}}</p><p>{{ swiper.info.txt}}</p></template></CmSlider>`,
        code3_2 : `slideData2:[{info:{tit:"슬라이드 타이틀",txt:"슬라이드 소개"},{info:{...},...}],swiperOpt3:{...}`,
        code4 : `<CmSlider :slideData="slideData2" :swiperOpt="swiperOpt4"></CmSlider>`,
        code4_2:`slideData2:생략, swiperOpt4:{navigation: true}`,
        code5 : `<CmSlider :slideData="slideData2" :swiperOpt="swiperOpt5"></CmSlider>`,
        code5_2:`slideData2:생략, swiperOpt5:{pagination: {clickable:true}}`,
        code6 : `<CmSlider :slideData="slideData2" :swiperOpt="swiperOpt6"></CmSlider>`,
        code6_2:`slideData2:생략, swiperOpt6:{pagination: {scrollbar:true}}`,
      },
      slideData2:[
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
      },
      swiperOpt4:{
        navigation: true,
      },
      swiperOpt5:{
        pagination: {
          clickable: true
        }
      },
      swiperOpt6:{
        scrollbar: true
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
    font-size: 20px;
    font-weight:550;
  }
  .txt { 
    margin-top: 8px;
  }
  &__header {
    @include innerOpt();
    padding-top:50px;
    & + .cm-info__component {
      .cm-info__explanation{
        border-top:2px solid $c-dark;
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
    border-top:1px solid $c-sub2;
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
      border:1px solid $c-point1;
      color:$c-dark;
      box-sizing:border-box;
    }
  }
}

</style>