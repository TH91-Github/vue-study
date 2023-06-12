<script setup>
  import TodoListItem from '@/components/TodoListApi/TodoListItem.vue'
  import {defineProps, defineEmits, computed} from 'vue'

  const props = defineProps(["todos", "userType", "todosType"]);
  const emit = defineEmits(["onUpDate", "onToggle", "onRemove"])
  const viewList = computed(() => {
    return props.todos.filter((val)=>{ // 이름 일치 하거나 all 이거나 
      return props.userType === val.user || props.userType === "all"
    })
  });
  // 부모에게 전달
  function emitToggle(todo){
    emit("onToggle", todo);
  }
   function emitUpDate(todo, editUser, editText){
    emit("onUpDate", todo, editUser, editText);
  }
  function emitRemove(todo){
    emit("onRemove", todo);
  }
</script>
<template>
  <div class="TodoList">
    <!-- for문 : 할 일, 사고 싶은 것 나누기 위함 -->
    <div
      class="TodoList__section"
      v-for="sType in todosType"
      :key="sType">
      <p class="TodoList-title">{{sType}}</p>
      <!-- for문 : select에 따른 보여지는 유저 리스트 뿌려주기 -->
      <TodoListItem
        v-for="todo in viewList"
        :key="todo.id"
        :todo="todo"
        :sType="sType"
        @emitUpDate="emitUpDate"
        @emitToggle="emitToggle"
        @emitRemove="emitRemove"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .TodoList {
    &__section {
      margin-top:20px;
      padding-top:20px;
      border-top:1px solid #dbdbdb;
      &:first-child {
        padding-top:0;
        border-top:none;
      }
    }
  }
</style>