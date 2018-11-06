<template>
  <div class="reco-box" ref="menu">
    <div>
      <!-- <Carousel :information="asSchemeList"></Carousel> -->
      <Slideshow :information="asSchemeList"></Slideshow>
      <div class="content">
        <div class="wael">
          <div class="img">
            <img :src="recommend[0].img_url" width="100%" height="65">
          </div>
          </div>
          <div class="openclass">
            <div class="opentitle">
              <div class="opentxt">
                <span class="levy">{{openClass[0].schedule_name}}</span>
                <span class="time">{{openClass[0].start_time}}</span>
              </div>
              <div class="open">
                <span class="opentxt">未开始</span>
                <span class="icon icon-keyboard_arrow_right"></span>
              </div>
            </div>
            <div class="classname">
              <div class="avater">
                <div class="img">
                  <img :src="openClass[0].teacher_touming" width="20" height="20">
              </div>
                </div>
                <div class="classcon">
                  <span class="main">{{openClass[0].name}}</span>
                  <span class="minor">{{openClass[0].description}}</span>
                </div>
              </div>
            </div>
            <div class="audit">
              <div class="audit_title">
                <span class="audit_levy">旁听课</span>
                <span class="audit_all">全部</span>
                <span class="icon icon-keyboard_arrow_right"></span>
              </div>
              <div class="auditclass">
                <div class="classname" v-for="(i, index) in coudata" :key="index" @click="putTransmit">
                  <div class="avater">
                    <div class="img">
                      <img :src="coudata[index].teacher.avatar" width="20" height="20">
                </div>
                    </div>
                    <div class="classcon">
                      <span class="main">{{coudata[index].ob_name}}</span>
                      <div class="minor">
                        <div class="img">
                          <img :src="coudata[index].teacher.touming_pic" width="20" height="10">
                  </div>
                          <p class="time">日语 | {{coudata[index].start_time}}</p>
                          <span class="icon icon-keyboard_arrow_right"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timetable">
                  <div class="course">
                    <div class="title">
                      <span class="name">日语</span>
                      <span class="more">更多</span>
                      <span class="icon icon-keyboard_arrow_right"></span>
                    </div>
                    <div class="img" v-for="(i, index) in recommend" :key="index">
                      <img :src="recommend[index].img_url" width="100%" height="200">
            </div>
                    </div>
                    <div class="course">
                      <div class="title">
                        <span class="name">韩语</span>
                        <span class="more">更多</span>
                        <span class="icon icon-keyboard_arrow_right"></span>
                      </div>
                      <div class="img" v-for="(i, index) in korgoodsList" :key="index">
                        <img :src="korgoodsList[index].smallCoverUrl" width="100%" height="200">
            </div>
                      </div>
                      <div class="course">
                        <div class="title">
                          <span class="name">德语</span>
                          <span class="more">更多</span>
                          <span class="icon icon-keyboard_arrow_right"></span>
                        </div>
                        <div class="img" v-for="(i, index) in gergoodsList" :key="index">
                          <img :src="gergoodsList[index].smallCoverUrl" width="100%" height="200">
            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
</template>
<script>
import Carousel from './Carousel.vue'
import Slideshow from './Slideshow'
import BScroll from 'better-scroll'
export default {
  created() {
    this.axios.get('/api/japanese')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.japanese = res.data
          this.recommend = this.japanese.data.recommend
          this.openClass = this.japanese.data.openClass
          this.$nextTick(() => {
            this.menuScroll = new BScroll(this.$refs.menu, {
              click: true
            })
          })
        }
      })
    this.axios.get('/api/german')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.german = res.data
          this.gergoodsList = this.german.objData.goodsList
        }
      })
    this.axios.get('/api/korean')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.korean = res.data
          this.korgoodsList = this.korean.objData.goodsList
        }
      })
    this.axios.get('/api/course')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.course = res.data
          this.coudata = this.course.data
        }
      })
    this.axios.get('/api/advertising')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.advertising = res.data
          this.asSchemeList = this.advertising.objData.asSchemeList
        }
      })
  },
  data() {
    return {
      arrtime: [1, 2, 3],
      japanese: {},
      german: {},
      korean: {},
      course: {},
      recommend: [],
      openClass: [],
      gergoodsList: [],
      korgoodsList: [],
      coudata: [],
      advertising: {},
      asSchemeList: []
    }
  },
  methods: {
    putTransmit() {
      this.$router.push({ path: '/transmit' })
    }
  },
  components: {
    Carousel,
    Slideshow
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.reco-box
  position: fixed
  top: 40px
  bottom: 40px
  width: 100%
  overflow: hidden
  .content
    padding: 0 20px
    font-size: 0
    .wael
      width: 100%
      height: 65px
      margin-bottom: 20px
      .img
        border-radius: 10px
        width: 100%
        height: 100%
        & > img
          border-radius: 10px
    .openclass
      margin-bottom: 20px
      .opentitle
        display: flex
        padding: 10px 0
        .opentxt
          flex: 2
          color: #000
          .levy
            display: inline-block
            font-size: 26px
            font-weight: 900
            text-align: center
          .time
            display: inline-block
            margin-left: 10px
            font-size: 10px
            font-weight: 900
            text-align: center
            vertical-align: center
        .open
          flex: 1
          .opentxt
            display: inline-block
            text-align: right
            color: #ccc
            font-size: 18px
            line-height: 30px
            margin-left: 34px
          .icon
            display: inline-block
            font-size: 18px
            color: #ccc
            transform: translateY(1px)
            vertical-align: center
      .classname
        display: flex
        padding: 10px 0
        .avater
          flex: 0 0 20px
          .img
            width: 20px
            height: 20px
            border-radius: 20px
            & > img
              border-radius: 20px
        .classcon
          flex: 1
          margin-left: 20px
          .main
            display: block
            margin-bottom: 10px
            font-size: 16px
            font-weight: 700
          .minor
            display: block
            font-size: 12px
            color: #ccc
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
        .classname
           display: flex
           padding: 10px 0
           .avater
             flex: 0 0 20px
             .img
               width: 20px
               height: 20px
               border-radius: 20px
               & > img
                  border-radius: 20px
           .classcon
             flex: 1
             position: relative
             margin-left: 20px
             .main
               display: block
               margin-bottom: 10px
               font-size: 16px
               font-weight: 700
             .minor
               display: flex
               font-size: 12px
               color: #ccc
               .img
                 flex: 0 0 20px
               .time
                 display: block
                 margin-left: 10px
                 font-size: 12px
             .icon
               position: absolute
               top: 10px
               right: 0
               display: inline-block
               font-size: 18px
               color: #ccc
               transform: translateY(1px)
               vertical-align: center
    .timetable
      margin-bottom: 20px
      .course
        padding: 10px 0
        font-size: 0
        .title
          display: flex
          padding: 10px 0
          font-size: 0
          .name
            flex: 2
            font-size: 26px
            font-weight: 900
            color: #000
          .more
            flex: 1
            font-size: 16px
            color: #ccc
            text-align: right
            transform: translateY(10px)
          .icon
            display: inline-block
            font-size: 18px
            color: #ccc
            transform: translateY(8px)
            vertical-align: center
        .img
          margin: 20px 0
          border-radius: 10px
          width: 100%
          height: 200px
          background: rgb(254, 187, 231)
</style>
