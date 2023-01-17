<template>
  <div class="cm-tab">
    <div class="cm-tab__inner">
      <!-- 상단 탭 버튼 -->
      <div class="cm-tab__menu">
        <!-- 상단 탭 슬라이드 메뉴 -->
        <template 
          v-if="false">
          <div>
            
          </div>
        </template>
        <!-- 일반 탭 메뉴 -->
        <template
          v-else>
          <ul>
            <li>
              <button
                type="button">
                tab1
              </button>
            </li>
            <li>
              <button
                type="button">
                tab2
              </button>
            </li>
          </ul>
        </template>
      </div>
      <!-- 해당 탭 정보 -->
      <div class="cm-tab__cont">
        <div class="cm-tab__cont-info">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>


<style scoped lang="scss">
.cm-tab {
 
}
  
</style>

