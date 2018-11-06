<template>
  <div class="play_box">
    <video id='my-video' autoplay preload='auto' src="../play/1.mp4" webkit-playsinline='true' playsinline='true' x-webkit-airplay='true' x5-video-player-type='h5' x5-video-player-fullscreen='true' x5-video-ignore-metadata='true' width='100%' height='100%' ref="video"></video>
    <div class="bottom">
      <div class="play">
        <i :class="isPlay ? 'icon-pause' : 'icon-play'" class="icon" @click="play"></i>
      </div>
      <div class="progress-bar">
        <div class="content" ref="bar">
          <div class="now" ref="progress">
            <i class="icon-ghost" v-show="nowTime"></i>
          </div>
        </div>
      </div>
      <div class="time">
        {{nowTime}}/{{fullTime}}
      </div>
      <div class="full-screen">
        <i class="icon-screen"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { disposeTime } from '../publi/js/tool'
export default {
  data() {
    return {
      nowTime: '',
      fullTime: '',
      isPlay: true
    }
  },
  mounted() {
    let videoPlay = this.$refs.video
    console.log(this.$refs.video.duration)
    videoPlay.addEventListener('timeupdate', () => {
      this.fullTime = disposeTime(parseInt(videoPlay.duration))
      this.nowTime = disposeTime(parseInt(videoPlay.currentTime))
      let proportion = videoPlay.currentTime / videoPlay.duration
      if (this.$refs.progress) {
        this.$refs.progress.style.left = proportion * this.$refs.bar.offsetWidth + 'px'
      }
      if (videoPlay.duration === videoPlay.currentTime) {
        this.isPlay = false
      }
    })
  },
  methods: {
    play() {
      if (this.isPlay) {
        this.$refs.video.pause()
        this.isPlay = false
      } else {
        if (this.$refs.video.currentTime === this.$refs.video.duration) {
          this.$refs.video.currentTime = 0
          this.$refs.video.play()
        }
        this.$refs.video.play()
        this.isPlay = true
      }
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.play_box
  position: relative
  .bottom
    display: flex
    position: absolute
    bottom: 0
    left: 0
    padding: 10px 10px
    width: 100%
    height: 40px
    box-sizing: border-box
    line-height: 20px
    & > div
      height: 100%
    .play
      text-align: center
      .icon:before
        color: #000
    .progress-bar
      flex: 1
      position: relative
      .content
        width: 85%
        position: absolute
        top: 50%
        left: 50%
        transform: translateY(-50%) translateX(-50%)
        height: 2px
        background-color: rgba(255, 255, 255, .5)
        .now
          position: absolute
          left: 0
          top: 50%
          transform: translateY(-50%) translateX(-50%)
          .icon-ghost:before
            color: #000
    .full-screen
      padding: 0 5px
</style>
