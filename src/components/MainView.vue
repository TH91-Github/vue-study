<template>
  <div class="main-wrap">

    <!-- 맛 지도 -->
    <FoodMap></FoodMap>
  </div>
</template>
<script>
import FoodMap from '@/components/FoodMap/FoodMap.vue'
export default {
  components: {
    FoodMap
  },
  data() {
    return {
      
    }
  }
}
</script>


<style scoped lang="scss">
.main-wrap {
  position: relative;
  padding-top: 48px;
}
</style>
