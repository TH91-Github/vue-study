<template>
  <div class="main-wrap">
    <TodoTemplate></TodoTemplate>
  </div>
</template>
<script>
import TodoTemplate from '@/components/TodoListApi/TodoListApi'
export default {
  components: {
    TodoTemplate
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
  height:100%;
}
</style>
