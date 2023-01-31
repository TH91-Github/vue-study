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
            <p class="cm-guide__list-tit"><span class="cm-mark">#Color #컬러 #색상</span></p>
            <ul class="cm-guide__list-wrap row">
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn c-point1">
                    <span class="codes">#3d1797</span>
                  </button>
                  <p class="tit">$c-point1</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn c-point2">
                    <span class="codes">#1c7947</span>
                  </button>
                  <p class="tit">$c-point2</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn c-point3">
                    <span class="codes">#f24c4c</span>
                  </button>
                  <p class="tit">$c-point3</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn c-point4">
                    <span class="codes">#fee500</span>
                  </button>
                  <p class="tit">$c-point4</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn c-point5">
                    <span class="codes">#6dcfdc</span>
                  </button>
                  <p class="tit">$c-point5</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn c-dark">
                    <span class="codes">#262626</span>
                  </button>
                  <p class="tit">$c-dark</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn c-white">
                    <span class="codes">#fff</span>
                  </button>
                  <p class="tit">$c-white</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn c-sub1">
                    <span class="codes">#7f7f7f</span>
                  </button>
                  <p class="tit">$c-sub1</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn c-sub2">
                    <span class="codes">#b4b4b4</span>
                  </button>
                  <p class="tit">$c-sub2</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn c-sub-dark">
                    <span class="codes">#666</span>
                  </button>
                  <p class="tit">$c-sub-dark</p>
                </div>
              </li>
            </ul>
            <p class="cm-guide__list-tit"><span class="cm-mark">#ScreenSize #스크린 #사이즈</span></p>
            <ul class="cm-guide__list-wrap row">
              <li class="item">
                <div class="cm-guide__screen">
                  <button type="button" class="btn screen-w">
                    <span class="value">768px;</span>
                  </button>
                  <p class="tit">$screen-s</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__screen">
                  <button type="button" class="btn screen-w">
                    <span class="value">1024px;</span>
                  </button>
                  <p class="tit">$screen-ms</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__screen">
                  <button type="button" class="btn screen-w">
                    <span class="value">1280px;</span>
                  </button>
                  <p class="tit">$screen-m</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__screen">
                  <button type="button" class="btn screen-w">
                    <span class="value">1680px;</span>
                  </button>
                  <p class="tit">$screen-l</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__screen">
                  <button type="button" class="btn screen-w">
                    <span class="value">1920px;</span>
                  </button>
                  <p class="tit">$screen-xl</p>
                </div>
              </li>
            </ul>
            <p class="cm-guide__list-tit"><span class="cm-mark">#breakpoint #@media #반응형</span></p>
            <ul class="cm-guide__list-wrap row">
              <li class="item">
                <div class="cm-guide__break">
                  <button type="button" class="btn media-w">
                    <span class="value">max-width:1920;</span>
                  </button>
                  <p class="tit">@include breakpoint(<span class="color-p3">pc</span>) {...} </p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__break">
                  <button type="button" class="btn media-w">
                    <span class="value">min-width:1680;</span>
                  </button>
                  <p class="tit">@include breakpoint(<span class="color-p3">wide</span>) {...} </p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__break">
                  <button type="button" class="btn media-w">
                    <span class="value">max-width:1280;</span>
                  </button>
                  <p class="tit">@include breakpoint(<span class="color-p3">tablet</span>) {...} </p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__break">
                  <button type="button" class="btn media-w">
                    <span class="value">max-width:768;</span>
                  </button>
                  <p class="tit">@include breakpoint(<span class="color-p3">mobile</span>) {...} </p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__break">
                  <button type="button" class="btn media-w">
                    <span class="value">min: width, max: width</span>
                  </button>
                  <p class="tit">@include breakMinMax(<span class="color-p3">min-w, max-w</span>) {...} </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="cm-guide__template-cont">
          <p class="cm-guide__template-tit">Common - 공통</p>
          <div class="cm-guide__list">
            <p class="cm-guide__list-tit"><span class="cm-mark">#Btn #버튼 #Button</span></p>
            <ul class="cm-guide__list-wrap">
              <li class="cm-guide__list-link">
                <router-link
                  to="/guide/CommonGuide"
                  >
                  /components/guide/CommonGuide
                </router-link>
              </li>
            </ul>
            <p class="cm-guide__list-tit"><span class="cm-mark">#Slider(Swiper) #슬라이드</span></p>
            <ul class="cm-guide__list-wrap">
              <li class="cm-guide__list-link">
                <router-link
                  to="/guide/SlideGuide"
                  >
                  /components/guide/SlideGuide
                </router-link>
              </li>
            </ul>
            <p class="cm-guide__list-tit"><span class="cm-mark">#Tab #탭 #탭메뉴</span></p>
            <ul class="cm-guide__list-wrap">
              <li class="cm-guide__list-link">
                <router-link
                  to="/guide/TabGuide"
                  >
                  /components/guide/TabGuide
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="cm-guide__template-cont">
          <p class="cm-guide__template-tit">Component - 컴포넌트</p>
          <div class="cm-guide__list">
            <p class="cm-guide__list-tit"><span class="cm-mark">#Banner #배너 #띠배너</span></p>
            <ul class="cm-guide__list-wrap">
              <li class="cm-guide__list-link">
                <router-link
                  to="/guide/BannerGuide"
                  >
                  /components/guide/BannerGuide
                </router-link>
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
      count:0,
    }
  },
  computed : {
    doubleCount : function(){
      return this.count *2;
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
    border-top: 2px solid $c-dark;
    &-tit {
      padding: 10px 0;
      font-size: 18px;
    }
    &-link {
      padding: 5px 0;
      border-top:1px solid $c-sub2;
      &:last-child {
        border-bottom:1px solid $c-sub2;
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
      border: 1px solid $c-sub2;
      span {
        display:block;
        &.val {
          color:$c-point3;
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
      border:1px solid $c-sub-dark;
      text-align:center;
      &.c-point1{ 
        background:$c-point1;
      }
      &.c-point2{ 
        background:$c-point2;
      }
      &.c-point3{ 
        background:$c-point3;
      }
      &.c-point4{ 
        background:$c-point4;
      }
      &.c-point5{ 
        background:$c-point5;
      }
      &.c-dark {
        background : $c-dark;
      }
      &.c-white {
        background : $c-white;
        .codes{
          color: $c-dark;
        }
      }
      &.c-sub1 {
        background: $c-sub1;
      }
      &.c-sub2 {
        background: $c-sub2;
      }
      &.c-sub-dark {
        background: $c-sub-dark;
      }
      .codes {
        font-size: 12px;
        color: $c-white;
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
      border-left:1px solid $c-sub2;
      border-right:1px solid $c-sub2;
      text-align:center;
      &::before {
        display:block;
        position: absolute;
        top:50%;
        left:0;
        width:100%;
        height:1px; 
        background: $c-dark;
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
      border: 1px solid $c-sub2;
    }
  }
}
</style>

