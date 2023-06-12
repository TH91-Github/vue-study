<script setup>
  import  {defineProps, defineEmits, ref} from 'vue';
  const props = defineProps(["todo", "viewList","sType"])
  const emit = defineEmits(["emitUpDate", "emitToggle", "emitRemove"]);
  const editOnOff = ref(false);
  const editUser = ref('');
  const editText = ref('');

  console.log(editOnOff.value)
  // 최종 부모에게 전달 
  function onClickUpDate(todo){
    if(editOnOff.value && editUser.value !== '' && editText.value !== ''){
        alert("수정 완료");
        emit("emitUpDate", todo, editUser.value, editText.value);
        editUser.value = "";
        editText.value = "";
    }
    editOnOff.value = !editOnOff.value;
  }

  function onClicToggle(todo){
    emit("emitToggle", todo);
  }
  function onClickRemove(todo){
    emit("emitRemove", todo);
  }
</script>
<template lang="">
    <li 
      v-show="props.todo.listType === props.sType"
      class="TodoListItem">
      <button 
        type="button"
        class="TodoListItem-checked"
        :class="{checked:props.todo.checked}"
        @click="onClicToggle(props.todo)"
      >
        <span class="user">{{props.todo.user}}</span>
        <span class="text">{{props.todo.text}}</span>
      </button>
      <button
        type="button"
        class="TodoListItem-update"
        @click="onClickUpDate(props.todo)"
      >
        수정
      </button>
      <button
        type="button"
        class="TodoListItem-remove"
        @click="onClickRemove(props.todo)"
      >
        삭제
      </button>
      <div 
        className="TodoListItem__edit"
        v-show="editOnOff"
      >
        <input 
          className="TodoInput"
          name="user"
          title="수정할 이름을 입력하세요"
          placeholder="이름"
          v-model="editUser"
        />
        <input 
          className="TodoInput"
          name="text" 
          v-model="editText"
        />
      </div>
    </li>
</template>

<style scoped lang="scss">
.TodoListItem{
  display:flex;
  position:relative;
  &-checked {
    flex-grow: 1;
    position:relative;
    padding-left:20px;
    border:none;
    background:transparent;
    text-align:left;
    &.checked {
      &:before {
        display:block;
        position:absolute;
        left:0;
        content:"✅";
      }
    }
  }
  .user{
    margin-right:10px;
  }
  &-remove{
    position:Relative;
    width:30px;
    height:30px;
    border-radius:5px;
    background:transparent;
    text-indent:-9999px;
    &::before, &::after {
      display:block;
      position:absolute;
      top:50%;
      left:50%;
      width:80%;
      height:1px;
      margin-left:-40%;
      background:red;
      content:"";
    }
    &::before {
      transform: rotate(135deg) translateX(0%);
    }
    &::after {
      transform: rotate(45deg) translateX(0%);
    }
  }
  .TodoListItem__edit{
    position:absolute;
    top:0;
    left:0;
    width:calc(100% - (30px * 2));
    height:100%;
    background:#000e4c;
    border:1px solid #dbdbdb;
    text-align:left;
    .TodoInput {
      position:relative;
      margin-left:10px;
      padding-left:10px;
      height:100%;
      padding:3px 10px;
      background:transparent;
      box-sizing:border-box;
      border:none;
      color:#fff;
      &::placeholder { 
        color:#fff;
      }
      &:first-child {
        margin-left:0;
        border-right:1px solid #dbdbdb;
      }
    }
  }
}
</style>