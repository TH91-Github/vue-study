<template>
  <div class="cm-info">
    <div class="cm-info__header">
      <p class="tit"><span class="cm-mark">컴포넌트 : BannerView</span></p>
      <p class="txt"><span class="font-bold cm-dash">배너 Type:</span> default(기본 배경색) / 풀 사이즈 / 배경색 / 이미지 배경 / 텍스트 / 슬라이드</p>
      <p class="txt"><span class="font-bold cm-dash">경로:</span> /components/banner/BannerView</p>
      <p class="txt">
        <span class="font-bold cm-dash">컴포넌트 사용:</span>
        <span class="font-bold color-p2">[CmBanner]</span> import CmBanner from '/components/banner/BannerView'
      </p>
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
      <div class="cm-info__explanation-item">
        <CmBanner></CmBanner>
      </div>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">2. 풀(Max:1920) 사이즈&배경색: style="배경색" 및 class full</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code2}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item">
        <CmBanner class="w-full" style="background:#3d1797;"></CmBanner>
      </div>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">3. bannerOpt1.bgSrc : "이미지 명.확장자" ->(/assets/img/이미지명.확장자)</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code3_1}}</span>
          </code>
          <code>
            <span class="data">{{codeTag.code3_2}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item">
        <CmBanner :cmOpt="bannerOpt3"></CmBanner>
      </div>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">4. bannerOpt2.info.tit : 타이틀 / bannerOpt2.info.txt : 텍스트 </p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code4_1}}</span>
          </code>
          <code>
            <span class="data">{{codeTag.code4_2}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item">
        <CmBanner :cmOpt="bannerOpt4"></CmBanner>
      </div>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">5. bannerOpt3.slide="on" 및 옵션 전달</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code5_1}}</span>
          </code>
          <code>
            <span class="data">{{codeTag.code5_2}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item">
        <CmBanner :cmOpt="bannerOpt5"></CmBanner>
      </div>
    </div>
  </div><!-- cm-info -->
 
</template>

<script>
import CmBanner from '@/components/banner/BannerView'
export default {
  components: {
    CmBanner
  },
  inheritAttrs: false,
  data() {
    return {
      codeTag: { 
        code1 : `<CmBanner></CmBanner>`,
        code2 : `<CmBanner class="w-full" style="background:#3d1797;"></CmBanner>`,
        code3_1 : `<CmBanner :cmOpt="bannerOpt3"></CmBanner>`,
        code3_2 : `bannerOpt3:{bgSrc:"@food_map_visual.png"}`,
        code4_1 : `<CmBanner :cmOpt="bannerOpt4"></CmBanner>`,
        code4_2 : `bannerOpt4:{info:{tit:"배너 타이틀", txt:"배너 소개"}} `,
        code5_1 : `<CmBanner :cmOpt="bannerOpt5"></CmBanner>`,
        code5_2 : `bannerOpt5:{slide:"on", slideData[{bgSrc:'이미지경로',info:{tit:'타이틀',txt:'텍스트'}},{...}], swiperOpt{...swiper 옵션}}`
      },
      bannerOpt3 : {
        bgSrc: "@food_map_visual.png",
      },
      bannerOpt4 : {
        info: {
          tit: "배너 타이틀",
          txt: "배너 소개",
        },
      },
      bannerOpt5 : {
        slide : "on",
        slideData:[
          { 
            bgSrc: "@food_map_visual.png",
            info: {
              tit: "1번 슬라이드 타이틀",
              txt: "1번 소개 입니다.",
            },
          },
          { 
            bgSrc: "@food_map_visual_2.jpg",
            info: {
              tit: "2번 타이틀222",
              txt: "2번 배너 소개222",
            },
          },
          { 
            bgSrc: "@food_map_visual.png",
            info: {
              tit: "3번 배너 타이틀333",
              txt: "배너 소개333",
            },
          },
        ],
        swiperOpt:{
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
  padding-bottom:100px;
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
      top:10px;
    }
  }
}

</style>