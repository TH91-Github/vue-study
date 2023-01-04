<template>
  <div class="wrap">
    <p class="wrap-text">
      asdasdasdMainView
    </p>
  </div>

  <div class="cm-wrap">
    <div class="cm-wrap-txt">
      zzzzz
    </div>
  </div>

</template> 
``
<script>
export default {
  components: {

  },
  data() {
    return {
      
    }
  }
}
</script>


<style scoped lang="scss">
$point-color1: #3d1797;

$component-name: '.cm-wrap';

#{$component-name} {
  border:1px solid green;
}

.cm-wrap {

}






.wrap {
  &-text{
    margin:50px;
    color:$point-color1;
  }
}
</style>
