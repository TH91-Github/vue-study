<script setup>
  import  {ref, defineProps, defineEmits, computed} from 'vue';
  const props = defineProps(["todos","todosType","selectType"]);
  const emit = defineEmits(["onInsert"]);
  const _type = computed(() => {
    return props.selectType === '' ?  props.todosType[0] : props.selectType;
  })
  const userValue = ref('');
  const textValue = ref('');

  function onSubmit(){
    console.log("추가")
    emit("onInsert", userValue.value, textValue.value, _type.value); // type -> .value를 하지 않으면 반응성이 다르게 나타남
    userValue.value="";
    textValue.value="";
  }
</script>
<template>
  <div class="TodoForm">
    <input 
        class="TodoInput"
        name="user"
        v-model="userValue"
      />
      <input 
        class="TodoInput"
        name="text"
        v-model="textValue"
      />
      <button
        type="submit"
        class="TodoSubmit"
        @click="onSubmit"
        @enter="onSubmit"
      >
        ADD
      </button>
  </div>
</template>
<style lang="scss" scoped>
.TodoForm {
  display:flex;
  position:relative;
  margin-top:10px;
  .TodoInput {
    flex-grow: 1;
    padding: 5px;
    border:1px solid #dbdbdb;
    margin-right:10px;
  }
  .TodoSubmit {
    display:inline-block;
    flex-shrink: 0;
    width: 60px;
    border:1px solid #dbdbdb;
    background:#fff;
    cursor:pointer;
  }
}


</style>