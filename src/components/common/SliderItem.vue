<template>
  <slot>
    <!-- 대체 슬라이드 -->
    <div class="base-slide">
      <div class="swiper-slide base-slide-item">
        
      </div>
    </div>
    <!-- // 대체 슬라이드 -->
  </slot>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
.base-slide {
  background: $point-color-dark;
  &-item {
    color:#fff;
  }
}
</style>

