<template>
  <div class="todolist">
      <TodoListHeader />
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
import TodoListInput from '@/components/TodoListApi/TodoListInput.vue'
import TodoListInner from '@/components/TodoListApi/TodoListInner.vue'
import TodoListFooter from '@/components/TodoListApi/TodoListFooter.vue'

import {ref, onMounted} from 'vue';
export default {
  name:"TodoList Composition API",
  components: {
    TodoListHeader,
    TodoListInput,
    TodoListInner,
    TodoListFooter
  },
  setup() {
    const todoItems = ref([]);
    function addOneItem(todoItem){
      let obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      todoItems.value.push(obj);
    }
    function removeOneItem(todoItem, index){
      todoItems.value.splice(index,1);
      localStorage.removeItem(todoItem.item);
    }
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
  
</style>