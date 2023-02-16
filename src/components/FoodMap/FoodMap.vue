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
                  <p class="cm-food__slider-txt">{{ swiper.category }}</p>
                  <p class="cm-food__slider-txt">{{ swiper.txt }}</p>
                </div>
              </a>
            </template>
          </CmSlider>
        </div>
        <!-- list -->
        <div class="cm-food__list">
          <p 
            class="error-txt"
            v-if="message">
            {{ message }}
          </p>
          <ul
            class="cm-food__list-box"
            v-else>
            <li 
              class="cm-food__list-item"
              v-for="tt in $store.state.FoodStore.newFoods"
              :key="tt">
              {{tt.tit}}
            </li>
          </ul>
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
    }
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
    padding:30px;
    &-wrap {
      margin-top:80px;
    }
    &-banner {
      display:block;
      height:200px;
      padding:0 40px 20px;
      border-radius:8px;
      background: rgba(255,255,255,0.2);
      box-shadow:0px 5px 10px rgba(0, 0, 0,.1);
      box-sizing:border-box;
    }
    &-img {
      overflow:hidden;
      position:relative;
      top:-25px;
      width:150px;
      height:150px;
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
  
}
</style>