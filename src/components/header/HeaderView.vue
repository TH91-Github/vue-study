<template>
  <div class="cm-header">
    <div class="cm-header__logo">
      <router-link
        :to="logo.href"
        class="cm-header__logo-icon"
      >
        <h1 class="logo">{{logo.name}}</h1>
      </router-link>
    </div>
    <div class="cm-header__nav">
      <ul class="cm-header__nav-list">
        <li 
          v-for="item in navigations"
          :key="item.name"
          class="cm-header__nav-item">
          <router-link
            :to="item.href"
            active-class="active"
            class="cm-header__nav-link">
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="cm-header__more">
      <button type="button" class="cm-header__more-btn">
        <span>더보기</span>
      </button>
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
          name:'가이드',
          href:'/guide'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cm-header{ 
  display:flex;
  position:fixed;
  z-index:999;
  top:0;
  left:0;
  width:100%;
  padding:8px 30px;
  background: $c-white;
  box-sizing:border-box;
  box-shadow:0px 0px 10px rgba(0,0,.1);
  &__logo{
    flex-shrink: 0; 
    width: 100px;
    &-icon {
      
    }
    .logo {
      width:32px;
      height:32px;
      background:url('@/../public/favicon.ico');
      text-indent:-9999px;
    }
  }
  &__nav{
    flex-grow:1;
    &-list{
      display: flex;
    }
    &-item{ 
      margin-left:10px;
      &:first-child {
        margin-left:0;
      }
    }
    &-link {
      font-weight: 550;
      transition: $base-transition;
      &:hover, &.focus {
        color: $c-point1;
      }
      &.active {
        color: $c-point2;
      }
    }
  }
  &__more {
    width:100px;
    &-btn {
      position:relative;
    }
  }
}
  
</style>

