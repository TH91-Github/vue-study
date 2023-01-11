<template>
  <div class="cm-banner" :class="$attrs.class">
    <!-- 
      슬라이드 배너 
      cmOpt.slide on/off 슬라이드 배너  
    -->
    <div 
      v-if="cmOpt.slide == 'on'"
      class="cm-banner__inner">
      <CmSlider 
        class="cm-banner-swiper">
        <slot>테스트 배너</slot>
      </CmSlider>
    </div>
    
    <!-- 기본 배너 -->
    <div
      v-else 
      class="cm-banner__inner"
      >
      <slot>
        <div class="cm-banner__visual">
          <!-- 이미지 경로가 있는 경우 -->
          <div 
            v-if="cmOpt.bgSrc !== undefined"
            class="cm-banner__visual-bg"
            :style="{backgroundImage : 'url('+require(`@/assets/img/${cmOpt.bgSrc}`)+')'}">
          </div>
          <!-- 타이틀, 텍스트 -->
          <div 
            v-if="cmOpt.info !== undefined"
            class="cm-banner__visual-cont">
            <!-- <p class="cm-banner__visual-tit">{{ cmOpt.info.tit }}</p>
            <p class="cm-banner__visual-txt">{{ cmOpt.info.txt }}</p> -->
          </div>
        </div>
      </slot>
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
      
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss">
.cm-banner {
  position:relative;
  width:100%;
  max-width: $screen-m;
  &.full {
    width:100%;
    max-width:1920px;
  }
  &__inner { 
    width:100%;
    max-width: $screen-m;
    min-height: 100px;
    margin: 0 auto;
  }
  &__visual {
    display:flex;
    flex-direction: column;
    justify-content: center;
    position:relative;
    min-height:rem(250px);
    border:1px solid red;
    text-align:center;
    &-bg {
      overflow:hidden;
      position:absolute;
      top:0; 
      left:0;
      width:100%;
      height:rem(250px);
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
        background: rgba(0,0,0,.5);
        content:"";
      }
      &.base {
        display:flex;
        flex-direction: column;
        justify-content: center;
        background: $sub-black;
        .desc {
          font-size: rem(20px);
          color:#fff;
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
      color:#fff;
    }
    &-txt {
      color:#fff;
    }
  }
  
  &.bg-white {
    .cm-banner__visual {

      &-tit {
        color: $point-color-dark;
      }
      &-txt{
        color: $point-color-dark;
      }
    }
  }
}
</style>