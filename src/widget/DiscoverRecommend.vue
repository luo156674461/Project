<template>
  <div class="Recommend border-1px">
    <div class="title">{{recommend[index].contentTitle}}</div>
    <div class="avatar">
      <img :src="recommend[index].webImage" width="100%" height="height">
    </div>
    <div class="sort">
      <span class="recommend" v-for="(i, index) in recommend[index].contentTag" :key="index">{{i}}</span>
      <span class="amount">阅读量：{{recommend[index].classifyCode}}</span>
    </div>
    <div class="base">
      <div class="bleft">
        <span class="photo">
          <img :src="recommend[index].authorAvatarUrl" width="15" height="15">
        </span>
        <span class="user">{{recommend[index].contentAuthor}}</span>
        <span class="time">{{recommend[index].announceTimeLabel}}</span>
      </div>
      <div class="bright">
        <span class="people icon-review">{{recommend[index].hotPointCount}}</span>
        <span class="give icon-icomoon">{{recommend[index].homeplace}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    objData: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    recommend() {
      return this.objData.filter(item => item.isRecommend === 1)
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
@import "../publi/scss/_mixin"
.Recommend
  margin-bottom: 15px
  font-size: 0
  overflow: hidden
  @include border-1px(rgba(7, 17, 27,0.1))
  .title
    padding: 2px 0
    width: 100%
    height: 30px
    font-size: 16px
    line-height: 30px
  .avatar
    margin: 4px 0
    width: 100%
    height: 140px
  .sort
    position: relative
    margin-top: 10px
    padding-bottom: 4px
    width: 100%
    height: 30px
    .recommend
      display: inline-block
      padding: 2px 5px 4px 5px
      margin-left: 5px
      margin-top: 5px
      border-radius: 10px
      max-width: 60px
      height: 15px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgb(147, 153, 159)
      font-size: 9px
      line-height: 13px
    .amount
      position: absolute
      top: 0
      right: 0
      display: inline-block
      font-size: 3px
      color: #ccc
  .base
    display: flex
    margin: 5px 0 10px 0
    width: 100%
    .bleft
      flex: 1
      .photo
        display: inline-block
        margin-right: 10px
        width: 15px
        height: 15px
        border-radius: 50%
        & > img
          border-radius: 50%
      .user
        display: inline-block
        margin-right: 10px
        font-size: 12px
        vertical-align: top
      .time
        display: inline-block
        font-size: 12px
        vertical-align: top
  .bright
    flex: -1 0 70px
    .people, .give
      display: inline-block
      margin-right: 5px
      font-size: 5px
      letter-spacing: 5px
      color: #000
    .give
      margin-right: 0
</style>
