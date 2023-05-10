<template>
  <div class="todolist">
    <TodoListHeader></TodoListHeader>
    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트에서 메서드 명" -->
    <TodoListInput 
      v-on:addTodoItem="addOneItem">
    </TodoListInput>
    <!-- v-bind:내려보낼 프롭스 속성이름="현재 위치의 컴포넌트 데이터 속성" -->
    <TodoListItem 
      v-bind:propsdata="todoItems" 
      v-on:removeItem="removeOneItem" 
      v-on:toggleItem="toggleOneItem">
    </TodoListItem>
    <TodoListAllRemove 
      v-on:clearAll="clearAllItems">
    </TodoListAllRemove>
  </div>
</template>
<script>
import TodoListHeader from '@/components/TodoList/TodoListHeader';
import TodoListInput from '@/components/TodoList/TodoListInput';
import TodoListItem from '@/components/TodoList/TodoListItem';
import TodoListAllRemove from '@/components/TodoList/TodoListAllRemove';
export default {
  name:'TodoList',
  components: {
    TodoListHeader,
    TodoListInput,
    TodoListItem,
    TodoListAllRemove
  },
  data: function() { //옮김
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoItem) { // 일정 추가
      var obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index) { // 일정 삭제
      this.todoItems.splice(index, 1); //특정 index에서 하나를 지울 수 있음
      localStorage.removeItem(todoItem.item);
    },
    toggleOneItem: function(todoItem, index) { // 체크 토글
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function() { // 할 일 모두 삭제
      localStorage.clear();
      this.todoItems = []; //다시 빈 배열로 만들기
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
}
</script>

<style scoped lang="scss">
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
