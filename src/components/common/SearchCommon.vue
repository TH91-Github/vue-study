<template>
  <div class="cm-search">
    <div class="cm-search__inner">
      <div 
        class="cm-search__input cm-search__section"
        :class="{on : searchOnOff}"
        @focusout="focusOut">
        <input type="text" 
          class="cm-search__input-key"
          placeholder="검색어 입력"
          :value="searchValue"
          @input="searchValue = $event.target.value"
          @keydown.up.down.prevent="inputArrow"
          @keypress.enter="searchAction" 
          @focus="inputFocus"/>
        <div 
          class="cm-search__input-key-list"
          v-if="searchData.length">
          <ul>
            <li 
              v-for="item in searchData"
              :key="item">
              <button 
                type="button"
                @click="keywordListClick"
                @keydown.up.down.prevent="keyListArrow"
                @focus="inputFocus">
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- 범주 선택이 필요할 경우 -->
      <div 
        class="cm-search__select cm-search__section"
        v-if="false">
        <CmSelect></CmSelect>
      </div>

      <!-- 검색 -->
      <div class="cm-search__btn cm-search__section">
        <button 
          type="button" 
          class="btn"
          @click="searchAction">
          검색
        </button>
      </div>
    </div>
    <p style="text-align:center;">검색 목록 방향키 제어 준비중 </p>
  </div>
</template>
<!-- 
 1. 방향키 위 아래로 움직일 수 있게.
 2. 검색 셀렉된 값에 따라 범위 다르게.
 3. 타이틀 값 키워드 등 카테고리 전체 내용으로 할 수 있게
 데이터 값 하나로 합쳐서 텍스트 적기.

 /*
리스트 포커스
업 다운의 경우
현재 기준 (index) 다음 목록으로 포커스
*/

-->
<script>
import CmSelect from '@/components/common/SelectCommon'


export default {
  components : {
    CmSelect
  },
  el: document.querySelector('.cm-search'),
  inheritAttrs: false,
  props:{
    cmData : {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      searchValue:'',
      searchOnOff:false,
      searchData : [
      ],
      eInputWrap:'',
      eKeyListWrap:'',
    }
  },
  mounted () {
    this.eInputWrap = this.$el.querySelector('.cm-search__input');
  },
  methods: {
    inputFocus() {// 자동완성 목록 on
      this.searchOnOff = true;
    },
    focusOut(){ // input+목록에 포커스가 없을 시 on 해제 
      this.searchOnOff = false;
    }, 
    inputArrow(event){ // input ↑ ↓ 방향키 제어
      this.eKeyListWrap = this.$el.querySelector('.cm-search__input-key-list');
      if(this.searchData.length > 0){ // 목록이 있을 시 
        if(event.keyCode == 38){ // ↑ 리스트 마지막으로
          const lastKey = this.eKeyListWrap.querySelectorAll('li')[this.searchData.length-1];
          lastKey.querySelector('button').focus();
        }else if(event.keyCode == 40) { // ↓ 리스트 첫 번째
          const firstKey = this.eKeyListWrap.querySelectorAll('li')[0];
          firstKey.querySelector('button').focus();
        }
      }
    },
    keyListArrow(event){ // 목록 ↑ ↓ 방향키 제어
      const keyLi = event.target.parentNode;
      const prevLi = keyLi.previousElementSibling;
      const nextLi = keyLi.nextElementSibling;
      if(event.keyCode == 38){ // ↑ 첫 번째에서는 input으로
        if(prevLi !== null){
          prevLi.querySelector('button').focus();
        }else{
          this.eInputWrap.querySelector('input').focus();
        }
      }else if(event.keyCode == 40) { // ↓ 마지막에서는 input으로
        if(nextLi !== null){
          nextLi.querySelector('button').focus();
        }else{
          this.eInputWrap.querySelector('input').focus();
        }
      }
    },
    searchAction(){ // 엔터 & 클릭
      const searchInput = this.$el.querySelector('.cm-search__input-key');
      if(searchInput.value == null || searchInput.value == "undefined" || searchInput.value == ""){
        alert("입력된 검색어가 없습니다.")
      }else if(this.searchData.length > 0){
        console.log("값 노출") // 부모로 값 전달 list에 뿌려야 하기에
        this.postData(); // 데이터 부모에게 전달 $emit
        this.searchOnOff = false;
      }else{
        console.log("검색된 값이 없습니다.")
      }
    },
    keywordListClick(event){ // 자동 완성 클릭 시 
      this.searchValue = event.target.innerText;
      this.eInputWrap.querySelector('input').focus();
      setTimeout(() => { // 시간차를 주어 watch 반응 후 초기화
        // this.searchData = [];
        this.searchOnOff = false;
      },100)
    },
    postData(){ //2: 자식 updateMsg가 실행되면
      this.$emit('get-event',this.searchData) 
      // 3: $emit 메소드를 통해서 부모의 get-event 라는 이벤트가 실행되고
      // $emit(전달하는 특정한 이벤트, 같이 전달 될 데이터)
    }
  },
  watch:{
    searchValue(val){
      // 자동완성 다시 보여지게
      if(this.cmData && val.length > 0){
        this.searchData = this.cmData.filter((item) => {
          return item.name.toLowerCase().includes(val.toLowerCase());
        })
        this.searchOnOff = true;
      }else{
        this.searchData = [];
      }
    }
  }
}


</script>


<style scoped lang="scss">
.cm-search {
  position:relative;
  &__inner {
    display: flex;
    justify-content: center; 
  }
  &__section {
    margin-left:10px;
    &:first-child{
      margin-left:0;
    }
  }
  &__input {
    position:relative;
    border: 1px solid rgba(0,0,0,0);
    box-sizing:border-box;
    &-key {
      border:none;
      padding:3px;
      border-bottom:1px solid $c-dark;
      background: $c-white;
      &-list {
        overflow:hidden;
        position:absolute;
        top:100%;
        z-index:50;
        left:0;
        width:100%;
        height:0;
        opacity:0;
        button {
          width:100%;
          border:1px solid red;
          text-align:left;
        }
      }
    }
    &.on {
      border:1px solid red;
      .cm-search__input-key-list {
        height:auto;
        opacity:1;
        & > ul > li {
          
        }
      }
    }
  }
  &__btn {
    .btn {
      display:inline-block;
      padding:3px;
      border:1px solid $c-point1;
    }
  }
}
</style>

