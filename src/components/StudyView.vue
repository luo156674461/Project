<template>
  <div class="study">
    <div class="head border-1px">
      <span class="classify"></span>
      <span class="language">日语</span>
      <div class="download">
        <span class="icon icon-grade"></span>
        <span class="num">0</span>
      </div>
    </div>
    <div class="content">
      <div class="picture"></div>
      <div class="reminder">
        <span class="txtOne">您还没报名课程哦</span>
        <span class="txtTwo">去了解有哪些课程吧~</span>
      </div>
      <div class="button" @click="put">早道日语</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    put() {
      this.$router.push({ path: '/' })
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
@import "../publi/scss/mixin"
.study
  width: 100%
  .head
    box-sizing: border-box
    position: fixed
    top: 0
    left: 0
    padding: 0 20px
    @include border-1px(rgba(0, 0, 0, 0.5))
    width: 100%
    height: 40px
    font-size: 0
    .classify
      display: inline-block
      margin-right: 10px
      width: 16px
      height: 40px
      background: url("../publi/img/favicon.png") no-repeat center
    .language
      display: inline-block
      font-size: 18px
      line-height: 40px
      vertical-align: top
    .download
      position: absolute
      right: 20px
      top: 10px
      .icon
        display: inline-block
        margin-right: 10px
        font-size: 18px
      .icon-grade:before
        color: rgba(255, 215, 0, 0.5)
      .num
        display: inline-block
        font-size: 18px
        vertical-align: top
  .content
    position: fixed
    top: 40px
    left: 0
    right: 0
    bottom: 40px
    font-size: 0
    .picture
      position: absolute
      top: 50%
      left: 50%
      margin-top: -130px
      margin-left: -65px
      width: 150px
      height: 130px
      background: url("../publi/img/48_.png") no-repeat
      background-size: 150px 130px
    .reminder
      position: absolute
      top: 50%
      left: 50%
      margin-top: 20px
      margin-bottom: 30px
      margin-left: -75px
      width: 150px
      .txtOne
        display: block
        margin-bottom: 10px
        font-size: 18px
      .txtTwo
        display: block
        font-size: 12px
        text-align: center
        color: #ccc
    .button
      position: absolute
      bottom: 150px
      left: 50%
      margin-left: -70px
      padding: 5px 0
      width: 140px
      height: 30px
      font-size: 20px
      text-align: center
      color: #fff
      line-height: 30px
      border: 1px solid #1E90FF
      border-radius: 20px
      background: #1E90FF
</style>
