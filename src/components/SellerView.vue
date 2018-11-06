<template>
  <div class="seller" ref="menu">
    <div>
      <div class="head">
        <div class="message" @click="out">
          <span class="photo"></span>
          <div class="txt">
            <span class="ip">zd1026988736602312704</span>
            <span class="currency">早元0</span>
          </div>
          <i class="icon icon-keyboard_arrow_right"></i>
        </div>
        <div class="mine">
          <div class="indent">
            <span class="icon icon-order"></span>
            <span class="txt">我的订单</span>
          </div>
          <div class="information">
            <span class="icon icon-information"></span>
            <span class="txt">我的消息</span>
          </div>
          <div class="download">
            <span class="icon icon-download"></span>
            <span class="txt">我的下载</span>
          </div>
        </div>
      </div>
      <div class="options">
        <div class="padding">
          <div class="hint">
            <span class="text">完善信息，老师更了解你！~</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
        </div>
        <div class="padding">
          <div class="test">
            <span class="icon icon-grade"></span>
            <span class="text">等级测试</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
        </div>
        <div class="padding">
          <div class="test">
            <span class="icon icon-mistakes_normal"></span>
            <span class="text">错题本</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
        </div>
        <Split></Split>
        <div class="padding">
          <div class="test">
            <span class="icon icon-money"></span>
            <span class="text">邀请好友</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
        </div>
        <Split></Split>
        <div class="padding">
          <div class="test">
            <span class="icon icon-activity"></span>
            <span class="text">校园活动</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
        </div>
        <Split></Split>
        <div class="padding">
          <div class="test">
            <span class="icon icon-present"></span>
            <span class="text">学分换礼</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
        </div>
        <div class="padding">
          <div class="test">
            <span class="icon icon-shopping_cart"></span>
            <span class="text">已购商品</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
        </div>
        <Split></Split>
        <div class="padding">
          <div class="test">
            <span class="icon icon-classroom"></span>
            <span class="text">教室搜索</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
          <div class="test">
            <span class="icon icon-tool"></span>
            <span class="text">学习工具</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
          <div class="test">
            <span class="icon icon-opinion"></span>
            <span class="text">意见反馈</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
          <div class="test">
            <span class="icon icon-setting"></span>
            <span class="text">设置</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
          <div class="test">
            <span class="icon icon-regards"></span>
            <span class="text">关于我们</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Split from '../widget/Split'
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
    show: true
   }
  },
  methods: {
    out() {
      this.$emit('out', this.show)
    }
  },
  components: {
    Split
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
@import "../publi/scss/mixin"
.seller
  position: fixed
  top: 0
  left: 0
  bottom: 40px
  width: 100%
  .head
    box-sizing: border-box
    padding: 10px 20px
    width: 100%
    height: 180px
    background: #1E90FF
    @include border-1px(rgba(7, 17, 27, 0.1))
    font-size: 0
    .message
      display: flex
      position: relative
      margin: 20px 0
      width: 100%
      .photo
        flex: 0 0 40px
        display: inline-block
        margin-right: 20px
        width: 40px
        height: 40px
        border-radius: 50%
        background: url("../publi/img/favicon.png") no-repeat center
        background-size: 50px 50px
      .txt
        flex: 1
        .ip
          display: block
          margin-bottom: 10px
          font-size: 14px
          color: #fff
          vertical-align: top
        .currency
          display: block
          padding: 4px 2px
          width: 50px
          height: 20px
          font-size: 14px
          line-height: 20px
          text-align: center
          border-radius: 20px
          background: rgba(7, 17, 27, 0.5)
      .icon
        display: inline-block
        position: absolute
        top: 10px
        right: 0
        font-size: 20px
        color: #ccc
    .mine
      display: flex
      font-size: 0
      border-radius: 10px
      width: 100%
      height: 64px
      background: #fff
      box-shadow: 0 4px 20px rgba(0,0,0,0.5)
      .indent
        flex: 1
        .icon
          display: block
          margin: 10px 0 5px 0
          text-align: center
          font-size: 25px
          &:before
            color: rgba(255,215,0, 0.5)
        .txt
          display: block
          font-size: 14px
          text-align: center
          color: #ccc
      .information
        flex: 1
        .icon
          display: block
          margin: 10px 0 5px 0
          text-align: center
          font-size: 25px
        .txt
          display: block
          font-size: 14px
          text-align: center
          color: #ccc
      .download
        flex: 1
        .icon
          display: block
          margin: 10px 0 5px 0
          text-align: center
          font-size: 25px
          &:before
            color: rgba(30,144,255,0.5)
        .txt
          display: block
          font-size: 14px
          text-align: center
          color: #ccc
  .options
    font-size: 0
    .padding
      padding: 0 0 0 20px
      .hint
        width: 100%
        height: 30px
        @include border-1px(rgba(7, 17, 27, 0.1))
        .text
          font-size: 12px
          line-height: 30px
          color: rgba(30,144,255,0.7)
        .icon
          position: absolute
          right: 12px
          top: 7px
          font-size: 18px
          &:before
            color: #ccc
      .test
        display: flex
        width: 100%
        height: 50px
        @include border-1px(rgba(7, 17, 27, 0.1))
        .icon
          flex: 0 0 30px
          font-size: 20px
          line-height: 50px
          &:before
            color: #ccc
        .text
          flex: 1
          font-size: 16px
          line-height: 50px
</style>
