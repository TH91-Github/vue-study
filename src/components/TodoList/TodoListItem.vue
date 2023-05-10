<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" class="shadow" v-bind:key="todoItem.item" >
        <span
          class="checkBtn" 
          :class="{'checkBtnCompleted': !todoItem.completed}">
          <i class="fas fa-check"></i>
        </span>
        <button 
          type="button" 
          class="todolist-item" 
          :class="{'textCompleted':todoItem.completed}"
          v-on:click="toggleComplete(todoItem,index)">
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
  methods: {
    removeTodo: function(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
    },
    toggleComplete: function(todoItem, index) {
      console.log(todoItem)
      this.$emit('toggleItem', todoItem, index);
    }
  }
}
</script>
<style scoped lang="scss">
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
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  color: #b3adad;
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

</style>