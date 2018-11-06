<template>
  <div class="introduce">
    <div class="nav">
      <div class="nav-item" @click="goCom('Recommend',0)" :class="newnum === 0 ? 'active':' '">推荐</div>
      <div class="nav-item" @click="goCom('Japanese',1)" :class="newnum === 1 ? 'active':' '">日语</div>
      <div class="nav-item" @click="goCom('Korean',2)" :class="newnum === 2 ? 'active':' '">韩语</div>
      <div class="nav-item" @click="goCom('German',3)" :class="newnum === 3 ? 'active':' '">德语</div>
    </div>
    <keep-alive>
      <component :is="inCom"></component>
    </keep-alive>
  </div>
</template>
<script>
import { Recommend, Japanese, Korean, German } from '../widget'
export default {
  data() {
    return {
      inCom: 'Recommend',
      newnum: 0
    }
  },
  methods: {
    goCom(com, num) {
      this.inCom = com
      // var navtiem = document.querySelectorAll('.nav-item')
      // for (var j = 0; j < navtiem.length; j++) {
      //   navtiem[j].classList.remove('active')
      // }
      // this.newnum = num
      // console.log(this.newnum)
      // navtiem[this.newnum].classList.add('active')
      this.newnum = num
    }
  },
  components: {
    Recommend,
    Japanese,
    Korean,
    German
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
@import "../publi/scss/_mixin"
.introduce
  .nav
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .nav-item
      flex: 1
      text-align: center
      &.active
        color: rgb(0, 148, 255)
        @include border-2px(rgb(0, 148, 255))
</style>
