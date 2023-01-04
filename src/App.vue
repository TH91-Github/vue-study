
<template>
  <div class="wrap">
    <HeaderView></HeaderView>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from '@/components/header/HeaderView'

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
#app {
  height:100%;
}
</style>