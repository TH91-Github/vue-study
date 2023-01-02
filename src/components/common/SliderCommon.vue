<template>
  <swiper
    class="cm-swiper"
    v-bind="swiperOpt"
    @swiper="onSwiper"
    >
    <swiper-slide>
      <SliderItem>
        <slot></slot>
      </SliderItem>
    </swiper-slide>
    <!-- <swiper-slide
      v-for="(slide, index) in swiperData.itemData"
      :key="index">
      {{slide.name}}
    </swiper-slide> -->
  </swiper>
</template>
<!--
  slider 컴포넌트를 사용하는 페이지에서 데이터를 전달 받는다
  전달 받은 데이터 수 만큼 슬라이드 생성 및 노출

  구조 
  부모1 -> swiper -> 자식
  부모1에서 자식에게 정보 전달 
  자식에서 swiper에 데이터 전달
-->
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SliderItem from '@/components/common/SliderItem';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
    SliderItem
  },
  inheritAttrs: false,
  props:{
    swiperOpt : {
      type: String,
      default:''
    },
  },
  methods:{
    onSwiper(){
      console.log(this.swiperOpt)
    }
  },  
  data() {
    return {
      
    }
  },
}
</script>

<style scoped lang="scss">

.cm-swiper { 
  position:relative;
  width:100%;
  
}
.swiper-slide {
    width:calc(100%/5);
    height:300px;
    border:1px solid red;
    box-sizing:border-box;
  }
</style>

