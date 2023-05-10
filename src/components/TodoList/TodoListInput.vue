<template>
  <div 
    class="inputBox shadow">
      <input 
        type="text" 
        v-model="newTodoItem" 
        v-on:keyup.enter="addTodo">
      <button 
        type="button" 
        class="addContainer" 
        v-on:click="addTodo">
        <i class="far fa-plus-square addBtn"></i>
      </button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== '') {
        // this.$emit('이벤트 이름', 인자1, 인자2, ...);
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem= ''; //비워주기(초기화)
    }
  }
}
</script>
<style scoped lang="scss">
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
  padding:2px 15px;
  border-style: none;
  box-sizing:border-box;
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