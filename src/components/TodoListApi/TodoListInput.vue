<template>
  <div class="inputBox shadow">
    <input 
      type="text" 
      v-model="newTodoItem"
      v-on:keyup.enter="addTodo"
    >
    <button
      class="addContainer"
      v-on:click="addTodo"
    >
      <i class="fas fa-plus addBtn" aria-hidden="true"></i>
    </button>
  </div>
</template>
<script>

import {ref} from 'vue';
export default {
  emit:['addTodoItem'],
  setup(props,{emit}){
    const newTodoItem = ref("");
    function addTodo() {
      if(newTodoItem.value !== ""){
        // this.$emit('이벤트 이름', 인자1, 인자2, ...);
        emit('addTodoItem', newTodoItem.value)
        clearInput();
      }
    }
    function clearInput() {
      newTodoItem.value="";
    }
    return {
      newTodoItem,
      addTodo,
      clearInput
    }
  }
}
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  max-width:500px;
  margin:0 auto;
  background: white;
  height: 48px;
  line-height: 48px;
  border-radius: 5px;
}
.inputBox input {
  width:calc(100% - 3rem);
  height: 100%;
  border:1px solid #999;
  border-right: none;
  padding:2px 15px;
  box-sizing:border-box;
  vertical-align:top;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #62EAC6, #32CEE6);
  display: block;
  width: 3rem;
  height: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>