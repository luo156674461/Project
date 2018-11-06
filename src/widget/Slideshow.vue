<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(i, index) in information" :key="index">
        <img :src="information[index].imageUrl">
      </div>
      </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import '../swiper/dist/css/swiper.min.css'
export default {
  props: {
    information: {
      type: Array,
      required: true
    }
  },
  watch: {
    information() {
      this._initial()
    }
  },
  methods: {
    _initial() {
      this.$nextTick(() => {
        this.mySwiper = new Swiper('.swiper-container', {
          loop: true,
          autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          }
        })
      })
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.swiper-wrapper
  margin: 0 auto
  width: 79%
  height: 150px
  .swiper-slide
    height: 150px
    & > img
      text-align: center
      line-height: 150px
      width: 80%
      height: 100%
      border-radius: 20px
</style>
