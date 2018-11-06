<template>
  <div class="inspeech">
    <div class="text">
      <span class="title">{{notrecommend[index].contentTitle}}</span>
      <div class="rec_box">
        <span class="recommend" v-for="(i, index) in notrecommend[index].contentTag" :key="index">{{i}}</span>
      </div>
      <div class="initiator">
        <span class="photo">
          <img :src="notrecommend[index].authorAvatarUrl" width="15" height="15">
        </span>
        <span class="user">{{notrecommend[index].contentAuthor}}</span>
        <span class="time">{{notrecommend[index].announceTimeLabel}}</span>
      </div>
      <div class="bleft">
        <span class="amount">阅读量：{{notrecommend[index].readCount}}</span>
        <div class="bright">
          <span class="people icon-review">{{notrecommend[index].hotPointCount}}</span>
          <span class="give icon-icomoon">{{notrecommend[index].homeplace}}</span>
        </div>
      </div>
    </div>
    <div class="photo">
    <img :src="notrecommend[index].sharePhotoUrl === '' ? notrecommend[index].authorAvatarUrl : notrecommend[index].sharePhotoUrl"  width="120" height="120">
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
    notrecommend() {
      return this.objData.filter(item => item.isRecommend !== 1)
    }
  },
  data() {
    return {
      arr: [1, 2]
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.inspeech
  display: flex
  margin-bottom: 15px
  font-size: 0
  overflow: hidden
  .text
    flex: 1
    padding: 5px 0
    .title
      display: block
      margin-bottom: 10px
      font-size: 18px
    .rec_box
      width: 100%
      margin-bottom: 10px
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
    .initiator
      margin-bottom: 5px
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
    .bleft
      display: flex
      margin: 5px 0 10px 0
      width: 100%
      .amount
        flex: 1
        display: inline-block
        font-size: 3px
        color: #ccc
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
  .photo
    flex: 0 0 120px
    width: 120px
    height: 120px
</style>
