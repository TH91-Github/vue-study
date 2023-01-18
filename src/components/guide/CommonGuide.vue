<template>
  <div class="cm-info">
    <div class="cm-info__header">
      <p class="tit"><span class="cm-mark">Btn Button 버튼</span></p>
      <p class="txt">준비 중</p>
      <p class="txt"><span class="font-bold cm-dash">경로:</span> /components/common/ButtonCommon</p>
      <p class="txt">
        <span class="font-bold cm-dash">컴포넌트 사용:</span>
        <span class="font-bold color-p2">[CmBtn]</span> import CmBtn from '@/components/common/BtnCommon'
      </p>
    </div>
    <div class="cm-info__component">
      <div class="cm-info__explanation">
        <p class="tit">1. default</p>
        <div class="cm-code">
          <code>
            <span class="component">{{codeTag.code1}}</span>
          </code>
        </div>
      </div>
      <div class="cm-info__explanation-item max-w-center">
        <CmBtn></CmBtn>
      </div>
    </div>

    
  </div><!-- cm-info -->
 
</template>

<script>
import CmBtn from '@/components/common/BtnCommon'
export default {
  components: {
    CmBtn
  },
  inheritAttrs: false,
  data() {
    return {
      codeTag: { 
        code1 : `<CmBtn></CmBtn>`,
        code2 : `<CmSlider></CmSlider>`,
      },
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
}

</style>