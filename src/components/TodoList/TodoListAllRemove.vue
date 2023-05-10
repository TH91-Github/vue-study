<template>
  <div 
    class="clearAllContainer">
      <button 
        type="button" 
        class="clearAllBtn" 
        v-on:click="clearTodo">
        Clear All
      </button>
  </div>
</template>
<script>
export default {
  methods: {
    clearTodo: function() {
      this.$emit('clearAll');
    }
  }
}
</script>
<style scoped lang="scss">
.clearAllContainer {
  margin: 0.5rem auto 0;
}
.clearAllBtn {
  display:inline-block;
  width: 8.5rem;
  height: 50px;
  background-color: white;
  border:1px solid #b3adad;
  border-radius: 5px;
  line-height: 50px;
  color: #e20303;
}
</style>