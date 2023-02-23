<template>
  <swiper
    class="cm-swiper"
    :class="$attrs.class"
    :modules="modules"
    v-bind="swiperOpt"
    @swiper="onSwiper">
    <!-- 슬라이드 값 있을 시-->
    <template 
      v-if="slideData.length>0">
      <SwiperSlide 
        :class="$attrs.class+'-item'"
        v-for="swiper in slideData"
        :key="swiper">
        <SliderItem>
          <slot v-bind="swiper"></slot>
        </SliderItem>
      </SwiperSlide>
    </template>
    <!-- 슬라이드 값 없을 시 -->
    <template 
      v-else>
      <!-- 기본 값 슬라이드 2 제공 : 테스트용 -->
      <SwiperSlide
        v-for="n in 3"
        :key="n">
        <SliderItem>
          <slot></slot>
        </SliderItem>
      </SwiperSlide>
    </template>
  </swiper>
</template>
<script>
import { Swiper,SwiperSlide} from 'swiper/vue';
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
 // Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/scrollbar";
// import components
import SliderItem from '@/components/common/SliderItem';

export default {
  components: {
    Swiper,
    SwiperSlide,
    SliderItem
  },
  inheritAttrs: false,
  props:{
    swiperOpt : {
      type: Object,
      default: () => ({})
    },
    slideData : {
      type: Object,
      default: () => ({})
    },
  }, 
  setup(props) {
    const onSwiper = (swiperE) => {
      console.log("siwper ON");
      const thisSwiper = swiperE.el;
      if( props.swiperOpt.autoplay !== undefined){
        thisSwiper.addEventListener("mouseenter", ()=>{
          swiperE.autoplay.stop();
        });
        thisSwiper.addEventListener("mouseleave", () => {
          swiperE.autoplay.start();
        });
      }
      // swiper.update(); resize 되었을 때
      // 하나 일경우 loop 멈추기
    }
    return {
      onSwiper,
      modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
    }
  }
}
</script>

<style lang="scss">
.cm-swiper {
  .swiper-pagination-bullets.swiper-pagination-horizontal{
    bottom:0;
  }
}
.swiper-pagination-bullet {
  vertical-align: bottom;
  &-active {
    background:$c-point1;
  }
}
.swiper-button-prev, .swiper-button-next {
  &::after {
    color:$c-point1;
  }
}


</style>

