<template>
  <div class="cm-guide">
    <div class="cm-guide__inner">
      <div class="cm-guide__template">
        <h2 class="title">산출물 - 키워드 검색</h2>
        <div class="cm-guide__template-cont">
          <p class="cm-guide__template-tit">CSS - 변수</p>
          <div class="cm-guide__list">
            <p class="cm-guide__list-tit"><span class="cm-mark">#Font #폰트</span></p>
            <ul class="cm-guide__list-wrap row">
              <li class="item">
                <div class="cm-guide__font">
                  <button type="button" class="btn font-family">
                    <span class="kind">font-family</span>
                    <span class="val">'SUIT', sans-serif;</span>
                  </button>
                  <p class="tit">$font-suit</p>
                </div>
              </li>
            </ul>
          </div>
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
.cm-guide {
  background:#f5f5f5;
  &__inner { 
    width:100%;
    padding:30px;
    max-width: $screen-m;
    min-height: 100px;
    margin: 0 auto;
    box-sizing:border-box;
  }
  &__template {
    .title {
      font-weight:550;
      font-size: 26px;
    }
    &-cont {
      margin-top: 20px;
    }
    &-tit {
      font-weight:550; 
      font-size: 22px;
    }
  }
  &__list {
    margin-top: 10px;
    padding: 0 10px;
    border-top: 2px solid $color-dark;
    &-tit {
      padding: 10px 0;
      font-size: 18px;
    }
    &-link {
      padding: 5px 0;
      border-top:1px solid $sub-color2;
      &:last-child {
        border-bottom:1px solid $sub-color2;
      }
    }
    &-wrap{
      &.row {
        display:flex;
        flex-wrap: wrap;
      }  
    }
  }
  .tit {
    margin-top: 5px;
    font-size: 14px;
    font-weight:550;
  }
  &__font {
    text-align:center;
    .font-family{
      padding:3px;
      border: 1px solid $sub-color2;
      span {
        display:block;
        &.val {
          color:$point-color3;
        }
      }
    }
  }
  &__color {
    margin: 10px;
    text-align:center;
    .btn {
      display:inline-block;
      width:60px;
      height:60px;
      border-radius:5px;
      border:1px solid $sub-dark;
      text-align:center;
      &.point-color1{ 
        background:$point-color1;
      }
      &.point-color2{ 
        background:$point-color2;
      }
      &.point-color3{ 
        background:$point-color3;
      }
      &.point-color4{ 
        background:$point-color4;
      }
      &.point-color5{ 
        background:$point-color5;
      }
      &.color-dark {
        background : $color-dark;
      }
      &.color-white {
        background : $color-white;
        .codes{
          color: $color-dark;
        }
      }
      &.sub-color1 {
        background: $sub-color1;
      }
      &.sub-color2 {
        background: $sub-color2;
      }
      &.sub-dark {
        background: $sub-dark;
      }
      .codes {
        font-size: 12px;
        color: $color-white;
      }
    }
  }
  &__screen {
    margin: 10px;
    text-align:center;
    .screen-w {
      display:inline-block;
      position:relative;
      width:60px;
      height:60px;
      border-left:1px solid $sub-color2;
      border-right:1px solid $sub-color2;
      text-align:center;
      &::before {
        display:block;
        position: absolute;
        top:50%;
        left:0;
        width:100%;
        height:1px; 
        background: $color-dark;
        transform: translateY(-50%);
        content:"";
      }
      .value {
        display:inline-block;
        position:relative;
        z-index:1;
        background: rgba(255,255,255,.8);
      }
    }
  }
  &__break {
    margin: 10px;
    text-align:center;
    .media-w {
      padding:3px;
      border: 1px solid $sub-color2;
    }
  }
}
</style>

