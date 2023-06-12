<script setup>
import TodoListSelect from '@/components/TodoListApi/TodoListSelect.vue'
import TodoListInsert from '@/components/TodoListApi/TodoListInsert.vue'
import TodoList from '@/components/TodoListApi/TodoList.vue'
import { ref } from 'vue';

const data = [
  {
    id: 1,
    user: '김태훈',
    listType: '할 일',
    text: '할 일 1번 입니다',
    checked: false,
  },
  {
    id: 2,
    user: '김태훈2',
    listType: '할 일',
    text: '할 일 2번 입니다',
    checked: false,
  },
  {
    id: 3,
    user: '김태훈3',
    listType: '사고 싶은 것',
    text: '사고 싶은 것1111111',
    checked: false,
  },
  {
    id: 4,
    user: '김태훈4',
    listType: '사고 싶은 것',
    text: '사고 싶은 것222222',
    checked: false,
  },  
];
const todos = ref(data);
const userType = ref('all');
const selectType = ref('');
const todosType = data.reduce((result, { listType }) => {
  return !result.includes(listType)
    ? [...result, listType]
    : result
}, [])

// 사용자 변경
function userChange(eVal){
  userType.value = eVal;
}

// 카테고리 변경
function selectChange(eVal) {
  selectType.value = eVal;
}
// add
function onInsert(user, text, listType){
  const todo = {
    id: `${user}_${Math.random() * 1000}`,
    user,
    text,
    listType,
    checked: false,
  }
  todos.value = todos.value.concat(todo);
}
// 체크 
function onToggle(listInfo) {
  console.log("onToggle")
  todos.value = todos.value.map((item) => 
    item.id === listInfo.id ? {...item, checked : !item.checked } : item
  )
  console.log(todos.value)
}
// 수정
function onUpDate(listInfo, newUser, newText) {
  todos.value = todos.value.map((item) => 
    item.id === listInfo.id ? {...item, user : newUser, text : newText} : item
  )
}
// 삭제
function onRemove(listInfo){
  todos.value = todos.value.filter(remove => remove.id !== listInfo.id);
}

</script>
<template>
  <div class="TodoListTemplate">
      <h2 class="TodoListTemplate-title">230615-스터디 Todolist</h2>
      <TodoListSelect
        :todos="todos"
        :todosType="todosType"
        @userChange="userChange"
        @selectChange="selectChange"
      />
      <TodoListInsert 
        :toods="todos"
        :todosType="todosType"
        :selectType="selectType"
        @onInsert="onInsert"
      />
      <TodoList 
        :todos="todos"
        :userType="userType"
        :todosType="todosType"
        @onUpDate="onUpDate"
        @onToggle="onToggle"
        @onRemove="onRemove"
      />
  </div>
</template>
<style lang="scss">
body {
  background:#f6f6f6;
}
ul li, ol,li {
  list-style:none;
}
button{
  border-style:groove;
  cursor:pointer;
}
  
.TodoListTemplate {
  padding:30px;
  max-width:600px;
  margin:0 auto;
  border:1px solid #dbdbdb;
  text-align: center;
  box-sizing:border-box;
}
</style>