<template>
  <swiper
    class="cm-swiper"
    :class="$attrs.class"
    v-bind="swiperOpt"
    @swiper="onSwiper"
    >
    <SwiperSlide 
      v-for="item in slideList"
      :key="item.name">
      <SliderItem>
        <slot v-bind="item"></slot>
      </SliderItem>
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
  methods:{
    onSwiper(){
      console.log(this.slideList)
      console.log(this.swiperOpt)
    }
  },  
}
</script>

<style lang="scss">

</style>

