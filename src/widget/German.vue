<template>
  <div class="japan_box" ref="menu">
    <div>
      <Carousel :information="asSchemeList"></Carousel>
      <div class="content">
        <ul class="options">
          <li class="opt1">全部课程</li>
          <li class="opt2">教师团队</li>
          <li class="opt3">教学体系</li>
        </ul>
        <div class="audit">
          <div class="audit_title">
            <span class="audit_levy">旁听课</span>
            <span class="audit_all">更多</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
          <div class="auditclass">
            <div class="lesson" v-for="(item,index) in curriculum" :key="index">
              <div class="text">
                <span class="title">{{curriculum[index].ob_name}}</span>
                <span class="tiem">{{curriculum[index].start_time}}</span>
              </div>
              <img :src="curriculum[index].teacher.avatar" width="120" height="150">
            </div>
          </div>
        </div>
        <div class="audit">
          <div class="audit_title">
            <span class="audit_levy">特价课</span>
            <span class="audit_all">更多</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
          <div class="auditclass">
            <div class="img" v-for="(item,index) in ListTwo" :key="index">
              <img :src="ListTwo[index].bigCoverUrl" width="100%" height="200">
            </div>
            </div>
          </div>
          <div class="audit">
            <div class="audit_title">
              <span class="audit_levy">热销课</span>
              <span class="audit_all">更多</span>
              <span class="icon icon-keyboard_arrow_right"></span>
            </div>
            <div class="auditclass">
              <div class="img" v-for="(i,index) in ListOne" :key="index">
                <img :src="ListOne[index].bigCoverUrl" width="100%" height="200">
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import Carousel from './Carousel.vue'
import BScroll from 'better-scroll'
export default {
  created() {
    this.axios.get('/api/german')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.german = res.data
          this.ListOne = this.german.objData.ListOne
          this.ListTwo = this.german.objData.ListTwo
          this.asSchemeList = this.german.objData.asSchemeList
          this.$nextTick(() => {
            this.menuScroll = new BScroll(this.$refs.menu, {
              click: true
            })
          })
        }
      })
    this.axios.get('/api/japanese')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.japanese = res.data
          this.curriculum = this.japanese.data.curriculum
        }
      })
  },
  data() {
    return {
      japanese: {},
      curriculum: [],
      german: {},
      ListOne: [],
      ListTwo: [],
      asSchemeList: []
    }
  },
  components: {
    Carousel
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.japan_box
  position: fixed
  top: 40px
  bottom: 40px
  width: 100%
  overflow: hidden
  .content
    padding: 0 20px
    font-size: 0
    .options
      display: flex
      margin-bottom: 20px
      width: 100%
      height: 65px
      & > li
        flex: 3
        margin-left: 10px
        border-radius: 10px
        font-size: 18px
        line-height: 65px
        color: #fff
      .opt1
        background: rgb(234, 118, 163)
      .opt2
        background: rgb(115, 194, 250)
      .opt3
        margin: none
        background: rgb(180, 161, 250)
    .audit
      margin-bottom: 20px
      .audit_title
        display: flex
        padding: 10px 0
        font-size: 0
        .audit_levy
          flex: 2
          font-size: 26px
          font-weight: 900
          color: #000
        .audit_all
           flex: 1
           font-size: 16px
           color: #ccc
           text-align: right
           transform: translateY(10px)
        .icon
          display: inline-block
          font-size: 18px
          color: #ccc
          transform: translateY(9px)
          vertical-align: center
      .auditclass
        padding: 10px 0
        .img
          margin: 20px 0
          border-radius: 10px
          width: 100%
          height: 200px
          background: rgb(254, 187, 231)
          & > img
            border-radius: 10px
        .lesson
          display: flex
          margin: 20px 0
          border-radius: 10px
          width: 100%
          height: 150px
          background: #ccc
          & > img
            border-radius: 10px
          .text
            flex: 1
            padding: 10px
            font-size: 0
            .title
              display: block
              margin-bottom: 20px
              font-size: 16px
              font-weight: 700
            .tiem
              display: block
              font-size: 12px
              color: rgba(0, 0, 0, 0.5)
</style>
