<template>
  <!--
    class 안내
    bg-white : 텍스트 어둡게
    w-full : 최대 : 1920 / 기본 1280
    txt-left : 텍스트 왼쪽 정렬 / 기본 center
  -->

  <div class="cm-banner" :class="$attrs.class">
    <!-- 
      슬라이드 배너 
      cmOpt.slide on/off 슬라이드 배너  
    -->
    <div 
      v-if="cmOpt.slide == 'on'"
      class="cm-banner__inner">
      <CmSlider 
        class="cm-banner-swiper"
        v-bind="propsSwiper">
        <slot>테스트 배너</slot>
      </CmSlider>
    </div>
    <!-- default 배너 -->
    <div
      v-else 
      class="cm-banner__inner"
      >
        <div class="cm-banner__visual">
          <!-- background 이미지 체크 / default : 기본 색상 및 색상 변경 가능 -->
          <div 
            v-if="cmOpt.bgSrc !== undefined"
            class="cm-banner__visual-bg img"
            :style="{backgroundImage : 'url('+require(`@/assets/img/${cmOpt.bgSrc}`)+')'}">
          </div>
          <div
            v-else
            class="cm-banner__visual-bg base"
            :style="$attrs.style">
          </div>
          <!-- 타이틀, 텍스트 있는 경우 / default : 빈 값 -->
          <slot>
            <div 
              v-if="cmOpt.info !== undefined"
              class="cm-banner__visual-cont">
              <p class="cm-banner__visual-tit">{{ cmOpt.info.tit }}</p>
              <p class="cm-banner__visual-txt">{{ cmOpt.info.txt }}</p>
            </div>
            <div 
              v-else-if="cmOpt.imgSrc !== undefined"
              class="cm-banner__visual-cont">
              <img :src="cmOpt.imgSrc" alt="">
            </div>
          </slot>
        </div>
    </div>
  </div>
</template>

<script>
import CmSlider from '@/components/common//SliderCommon'
export default {
  components: {
    CmSlider
  },
  inheritAttrs: false,
  props :{
    cmOpt : {
      type: String,
      default:''
    },
  },
  data() {
    return {
      propsSwiper : this.cmOpt
    }
  },
  created() {

  },
  mounted () {
  }
}
</script>
<style lang="scss">
.cm-banner {
  position:relative;
  width:100%;
  &.w-full {
    width:100%;
    .cm-banner__inner { 
      max-width:1920px;
    }
  }
  &__inner { 
    @include innerOpt();
  }
  &__visual {
    display:flex;
    flex-direction: column;
    justify-content: center;
    position:relative;
    min-height: rem(100px);
    text-align:center;
    &-bg {
      position:absolute;
      z-index:-1;
      top:0; 
      left:0;
      width:100%;
      height: 100%;
      &.img {
        overflow:hidden;
        background-position: center center;
        background-repeat: no-repeat;
        background-size:cover;
        &::before {
          display:block;
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          background: rgba(0,0,0,.6);
          content:"";
        }
      }
      
      &.base {
        display:flex;
        flex-direction: column;
        justify-content: center;
        background: $sub-dark;
        .desc {
          font-size: rem(20px);
          color: $color-white;
        }
        &::before {
          display:none;
        }
      }
    }
    &-cont {
      position:relative;
      z-index:1;
    }
    &-tit {
      font-size: rem(20px);
      font-weight: 550;
      color: $color-white;
    }
    &-txt {
      margin-top: rem(10px);
      color: $color-white;
    }
  }
  
  &.txt-left {
    .cm-banner__visual-cont {
      padding:0 100px;
      text-align: left;
    }
  }
  &.bg-white {
    .cm-banner__visual {
      &-tit {
        color: $color-dark;
      }
      &-txt{
        color: $color-dark;
      }
    }
  }
}
</style>