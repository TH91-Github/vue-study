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
                {{ item.tit }}
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
  </div>
</template>
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
      }else if(this.searchValue.length > 0){
        // 검색된 값 전달(비어 있는 경우 부모에서 따로 처리)
        const passData = this.keyFilter(this.searchValue);
        this.postData(passData); // 데이터 부모에게 전달 $emit
        this.keyClean();
      }
    },
    keywordListClick(event){ // 자동 완성 클릭 시 
      this.searchValue = event.target.innerText;
      this.eInputWrap.querySelector('input').focus();
      this.keyClean();
    },
    postData(data){ //2: 자식 updateMsg가 실행되면
      this.$emit('getKey',data) 
      // 3: $emit 메소드를 통해서 부모의 get-event 라는 이벤트가 실행되고
      // $emit(전달하는 특정한 이벤트, 같이 전달 될 데이터)
    },
    keyFilter(val){
      return this.searchData = this.cmData.filter((item) => {
        return item.tit.toLowerCase().includes(val.toLowerCase());
      })
    },
    keyClean() {
      setTimeout(() => { // 시간차를 주어 watch 반응 후 초기화
        this.searchData = [];
        this.searchOnOff = false;
      },100)
    }
  },
  watch:{
    searchValue(val){
      // 자동완성 다시 보여지게
      if(this.cmData && val.length > 0){
        this.keyFilter(val);
        this.searchOnOff = true;
      }else{
        this.keyClean();
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

