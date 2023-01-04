<template>
  <swiper
    class="cm-swiper"
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

