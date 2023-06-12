<script setup>
import  {defineProps, defineEmits, computed} from 'vue';
const props = defineProps(["todos", "todosType"]);
const emit = defineEmits(["userChange","selectChange"]);
const defaultOption = 'all';
// 기존 아래와 같이 했을 때 반응성을 나타내지 못하여 computed로 todos 변경 되면 계산된 값 다시 나타나도록
// const userSelect = props.todos.reduce((item, {user}, idx) => {
//   return item.indexOf(user) === -1 
//   ? idx === 0 
//     ? [defaultOption, user]  // 0 처음에 all 입력
//     : [...item, user]   // all, 추가 user
//   : item // 찾는 값이 있다면 그대로 배열 유지
// },[])
const userSelect = computed(()=> {
  return props.todos.reduce((item, {user}, idx) => {
    return item.indexOf(user) === -1 
    ? idx === 0 
      ? [defaultOption, user]  // 0 처음에 all 입력
      : [...item, user]   // all, 추가 user
    : item // 찾는 값이 있다면 그대로 배열 유지
  },[])
})

function onUserChange(e){
  emit("userChange",e.target.value)
}
function onSelectChange(e){
  emit("selectChange",e.target.value);
}
</script>
<template>
  <div class="todolist__select">
    <select
      class="select"
      @change="onUserChange">
      <template 
        v-if="props.todos.length > 0">
        <option 
          v-for="todo in userSelect"
          :key="todo">
          {{todo}}
        </option>
      </template>
      <template
        v-else>
        <option>{{defaultOption}}</option>
      </template>
    </select>
    <select class="select"
      @change="onSelectChange">
      <option 
        v-for="selectType in todosType"
        :key="selectType">
        {{selectType}}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
  .todolist {
    &__select {
      display:flex;
      margin-top:20px;
      .select { 
        display:inline-block;
        width: calc((100% - 80px) / 2);
        margin-left:10px;
        padding:5px;
        border:1px solid #dbdbdb;
        &:first-child {
          margin-left:0;
        }
      }
    }
  }
</style>