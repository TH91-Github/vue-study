<template>
  <div 
    class="cm-select"
    :class="$attrs.class">
    <!-- 특정 디자인 리스트 ul li 대체 -->
    <div 
      v-if="selectOpt.ui == 'on'"
      class="cm-select__ui">
      <ul class="cm-select__ui-list">
        <li 
          v-for="item in selectOpt"
          :key="item"
          class="cm-select__ui-item">
          <button 
            type="button"
            :value="item"
            class="cm-select__ui-option">
            {{ item }}
          </button>
        </li>
      </ul>
      <!-- ui list 대신 숨겨진 select 값 전용 -->
      <select 
        class="cm-select__box hidden"
        name="cm-select" 
        :title="selectOpt.name+' 선택하기'">
        <option 
          v-for="item in selectOpt"
          :key="item"
          class="cm-select__ui-item">
          {{ item }}
        </option>
      </select>
    </div>
    <select 
      v-else
      class="cm-select__box"
      name="cm-select" 
      :title="selectOpt.name+' 선택하기'">
      <slot>
        <!-- 값이 있는 경우 -->
        <template
          v-if="selectOpt.length>0">
          <!-- select 여러 개 호출 시 특정 select만 option 기본 값 다르게 하기 위함 -->
          <option
            v-if="selectOpt.name == selectOpt.if" 
            class="cm-select__box-placeholder"
            value="">
            {{ selectOpt.default }}
          </option>
          <!-- 기본 option 옵션 값 -->
          <option 
            v-for="item in selectOpt"
            :key="item"
            :value="item"
            class="cm-select__box-option">
            {{ tiem }}
          </option>
        </template>
        <!-- option 테스트용  -->
        <template 
          v-else>
          <option class="cm-select__box-option" value="option1">option1</option>
          <option class="cm-select__box-option" value="option2">option1</option>
          <option class="cm-select__box-option" value="option3">option1</option>
        </template>
      </slot>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props:{
    selectOpt : {
      type: Object,
      default: () => ({})
    },
  }, 
  data () {
    return {
      // optionArr : this.selectOpt
    }
  },
}
</script>

<style scoped lang="scss">

</style>

