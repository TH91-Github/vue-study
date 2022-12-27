
<template>
  <div class="wrap">
    <HeaderView></HeaderView>
    <router-view></router-view>
  </div>
  <div class="test">
    <div v-bind="objectOfAttrs">{{id}}</div>

    <h1  v-bind:id="id" @click="increase">
    {{count}}
    {{test}}
    </h1>
    <h1 v-html="test"></h1>
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
import HeaderView from '@/components/HeaderView'

export default {
  components: {
    HeaderView
  },
  data() {
    return {
      objectOfAttrs: {
        id: 'container',
        class: 'wrapper'
      },
      count : 0,
      test : "<div>야호</div>",
      id:"active",
      arrTest: ["반복1","반복2","반복3"]
    }
  },
  methods: {
    increase() {
      this.count += 1
      this.test += "!"
      console.log(this.count)
    }
  },
  
  computed: {
    //Getter, Setter
    reversedMessage: {
      get() {
        return this.msg.split('').reverse().join()
      },
      set(value) {
        console.log(value)
      }
    }
  },
  watch: {
    count (){ // data :count  / count function () { } : 생략 -> count(){}
      console.log('count:', this.count)
    }
  }
}



</script>

<style lang="scss">
@import "@/assets/scss/_common.scss";
#app {
  height:100%;
}
.wrap {
  overflow: hidden;
  position: relative;
  min-height: 100%;
  &::before {
    position: absolute;
    z-index:-1;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 250%;
    background: #3d1797;
    transform: translate(-150%, -50%) rotate(45deg);
    content: "";
    pointer-events : none;
  }
}
</style>