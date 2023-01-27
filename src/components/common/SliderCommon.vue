<template>
  <swiper
    class="cm-swiper"
    :class="$attrs.class"
    v-bind="swiperOpt"
    @swiper="onSwiper"
    >
    <!-- 슬라이드 값 있을 시-->
    <template 
      v-if="slideList.length>0">
      <SwiperSlide 
        v-for="swiper in slideList"
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
import 'swiper/css';
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
    slideList : {
      type: Object,
      default: () => ({})
    },
  }, 
  data() {
    return {
      
    }
  },
  created() {
  },
  methods:{
    onSwiper(){
      console.log("onSwiper")
    }
  },  
}
</script>

<style scoped lang="scss">

</style>

