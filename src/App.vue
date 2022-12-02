<template>
  <div class="test">
    <h1 class="test-tit" @click="increase">
    {{count}}
    </h1>
    <div v-if="count>4">
      4보다 큽니다
    </div>
    <ul>
      <li v-for="arrName in arrTest" :key="arrName">
        {{ arrName}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count : 0,
      arrTest: ["반복1","반복2","반복3"]
    }
  },
  methods: {
    increase() {
      this.count += 1
      console.log(this.count)
    }
  }
}
</script>

<style>

</style>
