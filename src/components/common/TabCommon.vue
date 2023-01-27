<template>
  <div 
    class="cm-tab"
    :class="[$attrs.class, {'base' : cmOpt.length <= 0}]">
    <div class="cm-tab__inner">
      <!-- 값이 있는 경우-->
      <template 
        v-if="cmOpt.length > 0">
        <div class="cm-tab__menu">
          <ul class="cm-tab__menu-wrap">
            <li 
              v-for="(tabItem,index) in cmOpt"
              :key="tabItem"
              :class="{'active': currentTab == index}"
              class="cm-tab__menu-tabs">
              <button
                type="button"
                class="btn"
                v-on:click="tabClick(index)">
                {{tabItem.tabs.tit}}
              </button>
            </li>
          </ul>
        </div>
        <div class="cm-tab__cont">
          <div class="cm-tab__info">
            <div
              v-for="(tabInfo, index) in cmOpt"
              :key="tabInfo"
              :class="{'on' : currentTab == index}"
              class="cm-tab__info-item">
              <slot>
                {{ tabInfo.cont.tit}}
              </slot>
            </div>
          </div>
        </div>
      </template>
      <!-- 값이 없는 경우 기본 : 테스트용 기본 css 적용 -->
      <template
        v-else>
        <div class="cm-tab__menu">
          <ul class="cm-tab__menu-wrap">
            <li 
              v-for="(n,index) in 3"
              :key="n"
              class="cm-tab__menu-tabs">
              <button
                type="button"
                class="btn"
                :class="{active: currentTab == index}"
                v-on:click="tabClick(index)">
                {{ "tab" + index }}
              </button>
            </li>
          </ul>
        </div>
        <div class="cm-tab__cont">
          <div class="cm-tab__info">
            <div
              v-for="(tabItem, index) in 3"
              :key="tabItem"
              :class="{on : currentTab == index}"
              class="cm-tab__info-item">
              <div>
                탭 정보 {{ index }} 번
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props:{
    cmOpt : {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      currentTab : 0,
    }
  },
  methods:{
    tabClick(index){
      console.log(this.currentTab + index)
      return this.currentTab = index;
    }
  }, 
  mounted(){
    console.log(this.cmOpt)
  }
}
</script>


<style scoped lang="scss">
.cm-tab {
  &.base {
    .cm-tab__menu-tabs {
      .btn {
        display:inline-block;
        padding: 8px 10px;
        border:1px solid $sub-color1;
      }
    }
    .cm-tab__info {
      padding: 30px;
    }
  }
  &__menu {
    &-wrap {
      display:flex;
    }
    &-tabs{
      .btn {
        display: inline-block;
      }
    }
  }
  &__info {
    &-item {
      display:none;
      &.on {
        display:block;
      }
    }
  }
}
  
</style>

