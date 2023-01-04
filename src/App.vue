
<template>
  <div class="wrap">
    <HeaderView></HeaderView>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView'

export default {
  components: {
    HeaderView
  },
  data() {
    return {
      count : 0,
    }
  },
  methods: {
   
  },
  
  computed: {

  },
  watch: {

  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/common.scss';
#app {
  height:100%;
  color:$point-color1;
}
</style>