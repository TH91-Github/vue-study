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
        <p class="tit">1. 기본 default / class 전달 :$attrs.class 사용 중 </p>
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
        <CmTab></CmTab>
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
        code2 : `<CmSlider :tabList="tabList"`,
        code2_2 : `tabList:[{menu:{tit:"tab1"},info:{tit:{탭 정보 data}}}]`,
      },
      tabList:[
        { 
          menu: {
            tit: "Tab1",
          },
          info: {
            tit: "탭 정보 입니다.",
          }
        },
        { 
          menu: {
            tit: "Tab2",
          },
          info: {
            tit: "탭 정보 입니다22",
          }
        },
        { 
          menu: {
            tit: "Tab3",
          },
          info: {
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
    font-size: rem(20px);
    font-weight:550;
  }
  .txt { 
    margin-top: rem(8px);
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
  
}

</style>