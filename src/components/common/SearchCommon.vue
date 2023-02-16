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
        <i class="ico">search-icon</i>
        <div 
          class="cm-search__input-key-list"
          v-if="searchData.length">
          <ul>
            <li 
              class="keyword-item"
              v-for="item in searchData"
              :key="item">
              <button 
                type="button"
                class="keyword-txt"
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
        alert("입력된 검색어가 없습니다.");
        this.postData(this.cmData);
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
$c-shadow :rgba(203,210,222,.5);
.cm-search {
  display:inline-block;
  position:relative;
  padding:3px 3px 3px 20px;
  border-radius:3px;
  background:$c-white;
  box-shadow:0px 10px 20px $c-shadow;
  &__inner {
    display: flex;
    justify-content: center;
  }
  &__section {
    position:relative;
    margin-left:15px;
    padding-left:15px;
    &::after {
      display: block;
      position:absolute;
      top:50%;
      left:0;
      width:2px;
      height:50%;
      background:$c-sub2;
      border-radius:2px;
      transform: translateY(-50%);
      content:"";
    }
    &:first-child, &:last-child {
      margin-left:0;
      padding-left:0;
      &::after {
        display:none;
      }
    }
  }
  &__input {
    position:relative;
    box-sizing:border-box;
    &-key {
      position:relative;
      padding:15px 15px 15px 25px;
      border:none;
      outline:none;
      font-size:15px;
      font-weight:550;
      color:$c-dark;
      &-list {
        position:absolute;
        top:100%;
        z-index:50;
        left:0;
        width:100%;
        height:0;
        opacity:0;
        .keyword {
          &-item {
            position:relative;
            margin-top:2px;
            &:first-child { 
              margin-top:0;
            }
          }
          &-txt {
            width:100%;
            padding:4px 20px;
            font-size:15px;
            color:$c-dark;
            background:$c-white;
            border-radius:3px;
            box-shadow:0px 5px 10px $c-shadow;
            text-align:left;
          }
        }
      }
    }
    .ico {
      display:block;
      position:absolute;
      top:50%;
      left:0;
      width:16px;
      height:16px;
      background:url('@/assets/img/common/icon_search_b.png');
      background-size: 16px 16px;
      transform:translateY(-50%);
      text-indent:-9999px;
    }
    &.on {
      .cm-search__input-key{ 
        color:$c-point2;
        &-list {
          height:auto;
          opacity:1;
          .keyword {
            &-item {
              &:first-child {
                &::before {
                  display:block;
                  position:absolute;
                  top:0;
                  left:50%;
                  width:100%;
                  height:1px;
                  background: $c-point2;
                  transform: translateX(-50%);
                  animation: lineW 3s ease infinite;
                  content:"";
                }
                @keyframes lineW {
                  0%{width:0%;}
                  50%{width:100%;}
                  100%{width:0%;}
                }
              }
            }
          }
        }
      }
      .ico {
        background:url('@/assets/img/common/icon_search_point2.png');
      background-size: 16px 16px;
      }
    }
  }
  &__btn {
    .btn {
      display:inline-block;
      height:100%;
      padding:8px 10px;
      font-size:15px;
      background: $c-point2;
      border-radius:5px;
      color:$c-white;
    }
  }
}
</style>

