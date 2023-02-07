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
          store 작업중
        </div>        
        <!-- 슬라이드-->
        <div class="cm-food__slider">
            <CmSlider
            :slideData="$store.state.FoodStore.newFoods"
            class="cm-food__slider-wrap">
            <template 
              v-slot="swiper">
              {{ swiper }}
              <p>{{ swiper.tit}}</p>
              <p>{{ swiper.default}}</p>
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
      slideData33 : [
        { 
          info: {
            tit: "슬라이드 타이틀1",
            txt: "슬라이드 소개11",
          },
        },
        { 
          info: {
            tit: "슬라이드 타이틀1",
            txt: "슬라이드 소개11",
          },
        },
        { 
          
          info: {
            tit: "슬라이드 타이틀2222",
            txt: "슬라이드 소개22",
          },
        },
      ],
      newData : [
      { 
          info: {
            tit: "뉴이이이",
            txt: "슬라이드 444",
          },
        },
        { 
          info: {
            tit: "새로운 데이터",
            txt: "슬라이드 444",
          },
        },
      ]
    }
  },
  mounted () {
    this.loadFoods();
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
      this.dataChange();
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
    dataChange() {
      this.slideData33 = this.newData
    }
    
  },
}
</script>

<style lang="scss">
.cm-food {
  &__inner { 
    @include innerOpt();
  } 
  .cm-banner{
    &__visual{
      height:300px;
    }
  }

  
}
</style>