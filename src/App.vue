
<template>
  <!-- https://th91-vue.netlify.app/ -->
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
  mounted (){
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

#app{
  min-width:320px;
}
#app, .wrap {
  height:100%;
}
.wrap {
  padding: 50px 0 0;
}
</style>