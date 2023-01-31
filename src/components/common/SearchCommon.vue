<template>
  <div 
    class="cm-search">
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
          @keydown.up.down="inputArrow"
          @keypress.enter="searchAction" 
          @focus="inputFocus"/>
        <div 
          class="cm-search__input-key-list"
          v-if="searchData.length">
          <ul>
            <li 
              v-for="item in filterRes"
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
      <div class="cm-search__select cm-search__section">
        <CmSelect></CmSelect>
      </div>
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
  inheritAttrs: false,
  props:{
    cmOpt : {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      searchValue:'',
      searchOnOff:false,
      searchData : [
        {
          "name": "탕탕",
          "default": "2016",
        },
        {
          "name": "논현각",
          "default": "2023",
        },
        {
          "name": "웨더",
          "default": "2023",
        },
      ],
    }
  },
  computed : {
    filterRes() { // 자동완성 목록 
      if(this.searchValue){
        return this.searchData.filter((item)=> {
          return item.name.toLowerCase().includes(this.searchValue.toLowerCase());
          // 여기서 카테고리에 따른 검색 값 바뀔 수 있게 
        })
      }else{
        return [];
      }
    },
  },  
  methods: {
    inputFocus() {// 자동완성 목록 on
      this.searchOnOff = true;
    },
    focusOut(){ // input+목록에 포커스가 없을 시 on 해제 
      this.searchOnOff = false;
    }, 
    inputArrow(event){ // input  ↑ ↓ 방향키 제어
      const _this = event.target;

      if(event.keyCode == 40) {
        console.log(_this)
      }

      /*
        input 에서 위 아래 방향키 누를 시 목록이 있어야 하며 없을 시 focus 이동 안됨.
        목록이 있다면
        up 시 마지막 목록으로 focus
        down 시 첫번째 목록으로 focus

      */
    },  
    keyListArrow(){ // 목록 ↑ ↓ 방향키 제어
      
      /*
        첫 번째 목록에서 up 시 인풋으로 이동 
        마지막 목록에서 down 시 인풋으로 이동
      */
    },
    searchAction(event){ // 엔터 & 클릭
      const _this = event.target;
      const searchParent = _this.closest('.cm-search');
      const searchInput = searchParent.querySelector('.cm-search__input-key');
      if(searchInput.value == null || searchInput.value == "undefined" || searchInput.value == ""){
        alert("입력된 검색어가 없습니다.")
      }else if(this.filterRes.length > 0){
        console.log("값 노출") // 부모로 값 전달 list에 뿌려야 하기에
        this.searchOnOff = false;
      }else{
        console.log("검색된 값이 없습니다.")
      }
    },
    keywordListClick(event){ // 자동 완성 클릭 시 
      this.searchValue = event.target.innerText;
    },
  },
  watch:{
    searchValue(){
      // 자동완성 다시 보여지게
      this.searchOnOff = true; 
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

