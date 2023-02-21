<template>
  <div class="cm-food">
    <!-- 배너 -->
    <div class="cm-food__banner">
      <CmBanner
        class="cm-food__banner-visual w-full"
        :cmOpt="bannerOpt">
      </CmBanner>
    </div>
    <div class="cm-food__inner">
      <div class="cm-food__content">
        <!-- 검색 -->
        <div class="cm-food__search">
          <CmSearch
            :cmData="$store.state.FoodStore.foods"
            @getKey="getData">
          </CmSearch>
        </div>        
        <!-- 슬라이드-->
        <div class="cm-food__slider-wrap">
            <CmSlider
            :slideData="$store.state.FoodStore.newFoods"
            :swiperOpt="swiperOpt"
            class="cm-food__slider">
            <template 
              v-slot="swiper">
              <a 
                href="#"
                class="cm-food__slider-banner">
                <div class="cm-food__slider-img">
                  <img :src="swiper.mainImg" :alt="swiper.mainImgAlt">
                </div>
                <div class="cm-food__slider-info">
                  <p class="cm-food__slider-tit"><span class="cm-mark">{{ swiper.tit }}</span></p>
                  <p class="cm-food__slider-txt">
                    {{ categoryData(swiper.category) }}
                  </p>
                  <p class="cm-food__slider-txt">{{ swiper.txt }}</p>
                </div>
              </a>
            </template>
          </CmSlider>
        </div>
        <!-- list -->
        <div class="cm-food__list">
          <div 
            class="error-wrap"
            v-if="message">
            <p class="error-txt">{{ message }}</p>
          </div>
          <div
            class="cm-food__list-inner"
            v-else>
            <div class="cm-food__list-head">
              <ul class="cm-food__list-head-box">
                <li
                  class="cm-food__list-head-item"
                  v-for="foodHeadName in foodHeadList"
                  :key="foodHeadName">
                  <p class="cm-food__list-head-tit">{{foodHeadName}}</p>
                </li>
              </ul>
            </div>
            <div class="cm-food__list-cont">
              <ul class="cm-food__list-box cm-list">
                <li 
                  class="cm-food__list-item cm-list-item"
                  v-for="(foodData,index) in $store.state.FoodStore.newFoods"
                  :key="foodData">
                  <a 
                    href="#"
                    class="cm-food__list-info cm-list-cont">
                    <p class="cm-food__list-number">{{ index+1 }}</p>
                    <p class="cm-food__list-tit">{{ foodData.tit }}</p>
                    <p class="cm-food__list-category">{{ categoryData(foodData.category) }}</p>
                    <p class="cm-food__list-txt">{{ foodData.txt }}</p>
                    <div class="cm-food__list-time">d{{ openCloseData(foodData.openClose.time) }}</div>
                    <p class="cm-food__list-addr"><span class="tit">주소: </span>{{ foodData.address }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CmBanner from '@/components/banner/BannerView'
import CmSearch from '@/components/common/SearchCommon'
import CmSlider from '@/components/common//SliderCommon'
export default {
  components: {
    CmBanner,
    CmSearch,
    CmSlider
  },
  data() {
    return {
      bannerOpt : {
        info: {
          tit: "맛을 기록하는 지도",
          txt: "지도에 채워지는\n 나만의 맛 정보!",
        },
        bgSrc: "@food_map_visual.png",
      },
      swiperOpt:{ // 슬라이드 컴포넌트에 옵션 전달
        spaceBetween: 40,
        slidesPerView:1,
        observer: true, 
        observeParents: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }
      },
      foodHeadList :[
        "No.",
        "이름",
        "종류",
        "설명",
        "영업시간",
      ]
    }
  },
  mounted () {
    const _this = this;
    setTimeout(function (){
      _this.loadFoods();
    },500)
  },
  computed : {
    message() {
      return this.$store.state.FoodStore.foods.message
    },
  },
  // 처음 뿌려주고 다음 요청으로 다시 데이터 값이 변경 되도록
  methods : {
    getData(rData){ // 자식에게 받은 데이터 : 검색 키워드에 따른 데이터
      this.searchLoad(rData)
      // 받은 데이터가 없을 시 검색된 결과가 없습니다.
    },
    async loadFoods() {
      try{
        await this.$store.dispatch('FoodStore/initFoods')
      } catch(error) {
        console.log('Reject!')
      }
    },
    searchLoad(passData){ // 변경된 데이터를 update
      this.$store.dispatch('FoodStore/keySearchFoods', passData)
    },
    categoryData (_cData){
      if( _cData !== undefined){
        return _cData[0]
      }
    },
    openCloseData ( _oData ){
      if( _oData !== undefined){
        console.log(_oData)
      }
    }
  },
}
</script>

<style lang="scss">
.cm-food {
  background:$c-sub-withe;
  img {
    width:100%;
  }
  &__inner { 
    @include innerOpt();
  } 
  &__content {
    box-sizing:border-box;
  }
  .cm-banner{
    &__visual{
      height:300px;
    }
  }
  &__search {
    padding:30px 0 0;
    text-align:center;
  }
  &__slider{
    padding:50px 30px;
    &-wrap {
      margin-top:50px;
    }
    &-banner {
      display:block;
      height:250px;
      padding:0 20px 20px;
      border-radius:8px;
      background: rgba(255,255,255,0.2);
      box-shadow:0px 5px 10px rgba(0, 0, 0,.1);
      box-sizing:border-box;
    }
    &-img {
      position:relative;
      top:-50px;
      width:130px;
      height:130px;
      margin:0 auto;
      img {
        border-radius: 15px;
        width:100%;
        height:100%;
        object-fit: cover;
      }
    }
    &-info {
      text-align:left;
    }
    &-tit {
      font-size: 18px;
      color:$c-dark;
      .cm-mark {
        &::before {
          top:11px;
        }
        &::after {
          top:12px;
        }
        
      }
    }
    &-txt {
      margin-top:8px;
      font-size:14px;
      color:$c-sub-dark;
    }
  }
  &__list {
    padding: 0 30px;
    &-inner {
      @include innerOpt();
    }
    // 리스트 head 및 컨텐츠 가로 사이즈 관련
    @mixin itemWidth(){
      $firstW : 5%;
      $col : ($firstW, 20%, calc(23% - $firstW), 32%, 25%, 100%);
      @for $num from 1 through length($col)  {
        >*:nth-child(#{$num}){
          width: nth($col,$num);
          @include ellipsis(1);
        }
        @if($num == length($col)){
          >*:nth-child(#{$num}){
            padding-left:$firstW;
          }
        }
      }
    }
    &-head {
      &-box {
        display:flex;
        @include itemWidth;
        background:$c-point2;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      &-item {
        padding:8px 10px;
        box-sizing:border-box;
        > p {
          color: $c-white;
        }
      }
    }
    &-info {
      display:flex;
      flex-wrap:wrap;
      @include itemWidth;
      &>p{
        transition: $base-transition;
      }
      &:hover, &:focus {
        >p{
          color:$c-point2;
        }
      }
    }
    &-number {
      font-size:14px;
    }
    &-tit {
      font-weight:550;
    }
    &-addr {
      position: relative;
      margin-top:3px;
      padding-top:3px;
      &::after {
        display:block;
        position:absolute;
        top:0;
        left:50%;
        width:90%;
        height:1px;
        background: rgba(0,0,0,.1);
        transform: translateX(-50%);
        content:"";
      }
    }
  }
}
</style>