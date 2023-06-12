<template>
  <div class="todolist">
      <TodoListHeader />
      <TodoCheckBox />
      <TodoListInput 
        v-on:addTodoItem="addOneItem" 
      />
      <TodoListInner 
        v-bind:propsdata="todoItems"
        v-on:removeItem="removeOneItem"
        v-on:toggleEvent="toggleOneItem" 
      />
      <TodoListFooter 
        v-on:clearAll="clearAllItems"
      />
  </div>
</template>
<script>
import TodoListHeader from '@/components/TodoListApi/TodoListHeader.vue'
import TodoCheckBox from '@/components/TodoListApi/TodoCheckBox.vue';
import TodoListInput from '@/components/TodoListApi/TodoListInput.vue'
import TodoListInner from '@/components/TodoListApi/TodoListInner.vue'
import TodoListFooter from '@/components/TodoListApi/TodoListFooter.vue'

import {ref, onMounted} from 'vue';
export default {
  name:"TodoList Composition API",
  components: {
    TodoListHeader,
    TodoCheckBox,
    TodoListInput,
    TodoListInner,
    TodoListFooter
  },
  setup() {
    const todoItems = ref([]);
    function addOneItem(todoTitle, todoText){
      let obj = {completed: false, title:todoTitle, item: todoText};
      console.log(obj)
      localStorage.setItem(todoTitle, JSON.stringify(obj));
      todoItems.value.push(obj);
    }
    function removeOneItem(todoItem, index){
      todoItems.value.splice(index,1);
      localStorage.removeItem(todoItem.item);
    } // 
    function toggleOneItem(todoItem, index){
      todoItems.value[index].completed = !todoItems.value[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    }
    function clearAllItems(){
      localStorage.clear();
      todoItems.value = [];
    }
    onMounted(() => {
      console.log("onMounted")
      if(localStorage.length > 0){
        for(var i = 0; i<localStorage.length; i++){
          if(localStorage.key(i) !== 'loglevel:webpack-dev-serve'){
            todoItems.value.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          }
        }
      }
    })
    return {
      todoItems,
      addOneItem,
      removeOneItem,
      toggleOneItem,
      clearAllItems
    }
  }
}
</script>
<style>
.todolist {
  padding:100px 0;
  background:#f6f6f6;
  text-align: center;
}
input {
  width:200px;
  border-style:groove;
}
button{
  border-style:groove;
}
.shdow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>