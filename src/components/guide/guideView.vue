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
                  <button type="button" class="btn point-color1">
                    <span class="codes">#3d1797</span>
                  </button>
                  <p class="tit">$point-color1</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn point-color2">
                    <span class="codes">#1c7947</span>
                  </button>
                  <p class="tit">$point-color2</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn point-color3">
                    <span class="codes">#f24c4c</span>
                  </button>
                  <p class="tit">$point-color3</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn point-color4">
                    <span class="codes">#fee500</span>
                  </button>
                  <p class="tit">$point-color4</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn point-color5">
                    <span class="codes">#6dcfdc</span>
                  </button>
                  <p class="tit">$point-color5</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn color-dark">
                    <span class="codes">#262626</span>
                  </button>
                  <p class="tit">$color-dark</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn color-white">
                    <span class="codes">#fff</span>
                  </button>
                  <p class="tit">$color-white</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn sub-color1">
                    <span class="codes">#7f7f7f</span>
                  </button>
                  <p class="tit">$sub-color1</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn sub-color2">
                    <span class="codes">#b4b4b4</span>
                  </button>
                  <p class="tit">$sub-color2</p>
                </div>
              </li>
              <li class="item">
                <div class="cm-guide__color">
                  <button type="button" class="btn sub-dark">
                    <span class="codes">#666</span>
                  </button>
                  <p class="tit">$sub-dark</p>
                </div>
              </li>
            </ul>
            <p class="cm-guide__list-tit"><span class="cm-mark">#Screen Size #스크린 #사이즈 #반응형</span></p>
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
          </div>
        </div>
        <div class="cm-guide__template-cont">
          <p class="cm-guide__template-tit">Common - 공통</p>
          <div class="cm-guide__list">
            <p class="cm-guide__list-tit"><span class="cm-mark">Btn #버튼 #Button</span></p>
            <ul class="cm-guide__list-wrap">
              <li class="cm-guide__list-link">
                <router-link
                  to="/error"
                  >
                  /components/common/uiGuide
                </router-link>
              </li>
            </ul>
            <p class="cm-guide__list-tit"><span class="cm-mark">Slider(Swiper) #슬라이드</span></p>
            <ul class="cm-guide__list-wrap">
              <li class="cm-guide__list-link">
                <router-link
                  to="/error"
                  >
                  /components/common/uiGuide
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
                  to="/banner"
                  >
                  /components/banner/BannerGuide
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
      logo: {
        name:'Logo',
        href:'/'
      },
      navigations: [
        {
          name:'Vue',
          href:'/vue'
        },
        {
          name: '메모',
          href: '/RecordStory'
        },
        {
          name: '맛지도',
          href: '/FoodMap'
        }
      ]
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
      font-size: rem(26px);
    }
    &-cont {
      margin-top: rem(20px);
    }
    &-tit {
      font-weight:550;
      font-size: rem(22px);
    }
    &-row {
      &-item {
        
      }
    }
  }
  &__list {
    margin-top: rem(10px);
    padding: 0 rem(10px);
    border-top: 2px solid $color-dark;
    .item {

    }
    &-tit {
      padding: rem(10px) 0;
      font-size: rem(18px);
    }
    &-link {
      padding: rem(5px) 0;
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
    margin-top: rem(5px);
    font-size: rem(14px);
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
        font-size: rem(12px);
        color: $color-white;
      }
    }
  }
  &__screen {
    margin: rem(10px);
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
  
}
  
</style>

