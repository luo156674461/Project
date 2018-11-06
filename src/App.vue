<template>
  <div id="app">
    <router-view @out="out"></router-view>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/" exact>
          <span class="icon icon-home_page" :class="num === 0 ? 'active' : ' '" @click="inp(0)"></span>
        </router-link>
        <span>首页</span>
      </div>
      <div class="tab-item">
        <router-link to="/discover">
          <span class="icon icon-discover" :class="num === 1 ? 'active' : ' '" @click="inp(1)"></span>
        </router-link>
        <span>发现</span>
      </div>
      <div class="tab-item">
        <router-link to="/study">
          <span class="icon icon-study" :class="num === 2 ? 'active' : ' '" @click="inp(2)"></span>
        </router-link>
        <span>学习</span>
      </div>
      <div class="tab-item">
        <router-link to="/seller">
          <span class="icon icon-mine" :class="num === 3 ? 'active' : ' '" @click="inp(3)"></span>
        </router-link>
        <span>我的</span>
      </div>
    </div>
    <transition name="out">
        <div v-show="show" class="show">
        <Personal @quit="quit"></Personal>
        </div>
      </transition>
  </div>
</template>
<script>
import Personal from '../src/widget/Personal'
export default {
  name: 'App',
  data() {
    return {
      num: 0,
      show: false
    }
  },
  methods: {
    inp(num) {
      this.num = num
    },
    out(e) {
       this.show = e
    },
    quit(e) {
       this.show = e
    }
  },
  components: {
    Personal
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
@import "./publi/scss/_mixin"
#app
 .tab
   position: fixed
   bottom: 0
   left: 0
   display: flex
   width: 100%
   height: 40px
   line-height: 40px
   background: #fff
   border-top: 1px solid rgba(7, 17, 27, 0.1)
   .tab-item
     flex: 1
     text-align: center
     font-size: 14px
     & > a
       display: block
       height: 20px
       line-height: 0
       font-size: 20px
       .icon
         display: block
         height: 20px
         line-height: 20px
         &.active:before
           color: rgb(0, 148, 255)
     & > span
      display: block
      height: 20px
      line-height: 20px
 .show
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    transition: all 0.5s
    z-index: 1000
    &.out-enter-active
      transition: all 0.5s
    &.out-enter
      transform: translateX(100%)
    &.out-leave-active
      transition: all 0.5
    &.out-leave-to
      transform: translateX(100%)
</style>
