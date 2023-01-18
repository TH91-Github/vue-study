<template>
  <slot>
    <!-- 대체 슬라이드 -->
    <div class="base-slide">
      <div class="base-slide-item">
        슬라이드
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
.base-slide {
  height: 200px;
  background: $color-dark;
  &-item {
    color:$color-white;
  }
}
</style>

