<template>
  <div class="message">
    <div class="head">
      <span class="quit icon-arrow_lift" @click="quit"></span>
      <span class="title">个人资料</span>
    </div>
    <div class="content" ref="menu">
      <div>
        <div class="hint">
          <span class="text">基本信息</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">头像</span>
          <span class="addition"></span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">用户名</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">真实姓名</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">基本信息</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">性别</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">生日</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">地址</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">联系信息</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">微信</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">邮件地址</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">个性签名</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">语言水平</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="hint">
          <span class="text">身份</span>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  created() {
    this.$nextTick(() => {
      this.menuScroll = new BScroll(this.$refs.menu, {
        click: true
      })
    })
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    quit() {
      this.$emit('quit', this.show)
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
@import "../publi/scss/mixin"
.message
  position: fixed
  left: 0
  top: 0
  bottom: 0
  right: 0
  background: #fff
  .head
    display: felx
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 40px
    font-size: 0
    @include border-1px(rgba(7, 17, 27, 0.1))
    .quit
      flex: 0 0 20px
      height: 40px
      font-size: 16px
      line-height: 40px
    .title
      flex: 1
      margin-left: 35%
      height: 40px
      font-size: 16px
      line-height: 40px
  .content
    position: absolute
    top: 40px
    left: 0
    width: 100%
    padding-left: 20px
    .hint
      width: 100%
      height: 50px
      @include border-1px(rgba(7, 17, 27, 0.1))
      .text
        font-size: 18px
        line-height: 50px
      .icon
        position: absolute
        right: 30px
        top: 16px
        font-size: 18px
        &:before
          color: #ccc
      .addition
        position: absolute
        top: 14px
        right: 50px
        display: inline-block
        width: 20px
        height: 20px
        background: url("../publi/img/favicon.png") no-repeat center
</style>
