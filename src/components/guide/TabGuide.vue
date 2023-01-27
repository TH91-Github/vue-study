<template>
  <div class="cm-info">
    <div class="cm-info__header">
      <p class="tit"><span class="cm-mark">Tab Meny 탭 메뉴</span></p>
      <p class="txt"><span class="font-bold cm-dash">경로:</span> /components/common/TabCommon</p>
      <p class="txt">
        <span class="font-bold cm-dash">컴포넌트 사용:</span>
        <span class="font-bold color-p2">[CmTab]</span> import CmTab from '@/components/common/TabCommon'
      </p>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">1. 기본 default / class 전달 :$attrs.class 사용 중 </p>
        <p class="txt">기본 css 적용</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code1}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item max-w-center">
        <CmTab></CmTab>
      </div>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">2. 탭 버튼, 리스트 전달 </p>
        <p class="txt">기본 css X / 필요 디자인에 따라 입력</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code2}}</span>
          </code>
          <code>
            <span class="data">{{codeTag.code2_2}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item max-w-center">
        <CmTab 
          class="cm-info__tab-test"
          :cmOpt="tabList">
        </CmTab>
      </div>
    </div>
  </div><!-- cm-info -->

</template>

<script>
import CmTab from '@/components/common/TabCommon'
export default {
  components: {
    CmTab
  },
  inheritAttrs: false,
  data() {
    return {
      codeTag: { 
        code1 : `<CmTab></CmTab>`,
        code2 : `<CmSlider :cmOpt="tabList"></CmTab>`,
        code2_2 : `tabList:[{tabs:{tit:"tab1"},cont:{tit:{탭 정보 data}}}]`,
      },
      tabList:[
        { 
          // 탭 버튼 
          tabs: { 
            tit: "Tab1",
          },
          // 탭 컨텐츠
          cont: { 
            tit: "탭 정보 입니다.",
          }
        },
        { 
          tabs: {
            tit: "Tab2",
          },
          cont: {
            tit: "탭 정보 입니다22",
          }
        },
        { 
          tabs: {
            tit: "Tab3",
          },
          cont: {
            tit: "탭 정보 입니다.3333",
          }
        },
      ],
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
.cm-info {
  .tit {
    font-size: 20px;
    font-weight:550;
  }
  .txt { 
    margin-top: 8px;
  }
  &__header {
    @include innerOpt();
    padding-top:50px;
    & + .cm-info__component {
      .cm-info__explanation{
        border-top:2px solid $color-dark;
      }
    }
  }
  &__component {
    margin: 20px 0 0;
  }
  &__explanation {
    @include innerOpt();
    margin-top:10px;
    padding-top:10px;
    border-top:1px solid $sub-color2;
    .cm-code {
      margin-top:5px;
    }
    &-item {
      margin-top: 10px;
    }
  }
  .cm-dash {
    &::after {
      top:12px;
    }
  }
  &__tab-test {
    position:relative;
    .cm-tab {
      &__menu {
        &-tabs {
          .btn {
            padding: 5px 10px;
            color:$color-white;
            border:1px solid $color-dark;
            background:$color-dark;
            box-sizing:border-box;
          }
          &.active {
            .btn {
              font-weight: 550;
              color:$point-color2;
              background:$color-white;
            }
          }
        }
      }
      &__info {
        padding: 30px;
        border:1px solid $point-color1;
        &-item {
          padding:30px;
          border: 1px solid $point-color2;
        }
      }
    }
  }
}

</style>