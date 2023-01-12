
<template>
  <!-- https://th91-vue.netlify.app/ -->
  <div class="wrap">
    <HeaderView></HeaderView>
    <router-view></router-view>
  </div>
</template>

<script>
import commonJs from "@/assets/js/common.js"
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
  mounted (){
    commonJs()
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
@import '@/assets/scss/common.scss';

#app, .wrap {
  height:100%;
}
.wrap {
  padding: 50px 0 0;
}
</style>