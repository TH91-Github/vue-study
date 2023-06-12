<template>
  <div class="inputBox shadow">
    <input 
      type="text" 
      v-model="titValue"
      v-on:keyup.enter="addTodo"
    >
    <input 
      type="text" 
      v-model="textValue"
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
    const titValue = ref("");
    const textValue = ref("");
    
    function addTodo() {
      if(titValue.value !== "" && textValue.value !== ""){
        // this.$emit('이벤트 이름', 인자1, 인자2, ...);
        emit('addTodoItem', titValue.value, textValue.value)
        titValue.value="";
        textValue.value="";
      }
    }
    return {
      titValue,
      textValue,
      addTodo
    }
  }
}
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  position:relative;
  max-width:500px;
  margin:0 auto;
  background: white;
  height: 48px;
  line-height: 48px;
  border-radius: 5px;
  text-align:left;
}
.inputBox input {
  display:inline-block;
  width: calc((100% - 48px) / 2);
  height: 100%;
  border:1px solid #999;
  padding:2px 15px;
  box-sizing:border-box;
  vertical-align:top;
}
.addContainer {
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 0 5px 5px 0;
  background: linear-gradient(to right, #62EAC6, #32CEE6);
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>