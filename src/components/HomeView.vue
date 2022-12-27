<template>
  <div class="cm-home">
    <div class="cm-home__inner">
      <div class="cm-home__cont">
        <SliderCommon>
          <div>
            <ul>
              <li>
                123
              </li>
            </ul>
          </div>
        </SliderCommon>
      </div>
    </div>
  </div>
</template>

<script>
import SliderCommon from '@/components/common/SliderCommon';
export default {
  components: {
    SliderCommon
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
.cm-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 100px 30px;
  box-sizing: border-box;
  &__inner { 
    max-width: $screen-m;
    min-height: 100px;
    margin: 0 auto;
  }
}
</style>