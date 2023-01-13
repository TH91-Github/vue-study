<template>
  <swiper
    class="cm-swiper"
    :class="$attrs.class"
    v-bind="swiperOpt"
    @swiper="onSwiper"
    >
      <SwiperSlide 
        v-for="swiper in slideList"
        :key="swiper.name">
          {{ swiper }}
      </SwiperSlide>
    
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
      type: String,
      default:''
    },
    slideList : {
      type: String,
      default:''
    },
  }, 
  data() {
    return {
      
    }
  },
  created() {
    console.log(this.swiperOpt)
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

