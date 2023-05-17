<template>
  <div class="todo-inner">
    <ul>
      <li 
        v-for="(todoItem, index) in propsdata"
        :key="index"
        class="shadow">
        <button 
          type="button"
          :class="{'checkBtnCompleted': !todoItem.completed}"
          v-on:click="toggleComplete(todoItem, index)"
        >
          <span
            class="checkBtn" 
          >
            <i class="fas fa-check"></i>
          </span>
          {{ todoItem.item }}
        </button>
        
        <button 
          type="button"
          class="removeBtn" 
          v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['propsdata'],
  emit:['removeItem','toggleEvent'],
  setup(props, {emit}){
    console.log(props.propsdata)
    function removeTodo(todoItem, index){
      emit('removeItem', todoItem, index);
    }
    function toggleComplete(todoItem, index){
      emit('toggleEvent', todoItem, index)
    }
    return {
      removeTodo,
      toggleComplete
    }
  }
}
</script>
<style scoped>
ul {
  max-width:500px;
  margin:0 auto;
  margin-top: 0;
  padding-left: 0;
  text-align: left;
  list-style-type: none;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  margin: 0.5rem 0 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  line-height: 50px;
}
.checkBtn {
  color: #62acde;
  margin-right: 5px;
  line-height: 45px;
}
.checkBtnCompleted,
.checkBtnCompleted .checkBtn {color: #b3adad;}
.textCompleted {
  color: #b3adad;
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>