<template>
  <div class="dis-box border-1px">
    <div class="dis_head">发现
      <span class="icon icon-icomoon"></span>
    </div>
    <div class="content" ref="menu">
      <div>
        <DiscoverRecommend v-for="(irec, index) in recommend" :key="index" :objData="objData" :index="index"></DiscoverRecommend>
        <DiscoverSpeech v-for="(itme, index) in notrecommend" :key="index" :objData="objData" :index="index"></DiscoverSpeech>
      </div>
    </div>
  </div>
</template>
<script>
import DiscoverRecommend from '../widget/DiscoverRecommend.vue'
import DiscoverSpeech from '../widget/DiscoverSpeech.vue'
import BScroll from 'better-scroll'
export default {
  created() {
    this.axios.get('/api/discover')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.discover = res.data
          this.objData = this.discover.objData
          this.$nextTick(() => {
            this.menuScroll = new BScroll(this.$refs.menu, {
              click: true
            })
          })
        }
      })
  },
  data() {
    return {
      discover: {},
      objData: []
    }
  },
  computed: {
    recommend() {
      return this.objData.filter(item => item.isRecommend === 1)
    },
    notrecommend() {
      return this.objData.filter(item => item.isRecommend !== 1)
    }
  },
  components: {
    DiscoverRecommend,
    DiscoverSpeech
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
@import "../publi/scss/_mixin"
.dis_head
  position: relative
  padding: 0 10px
  width: 100%
  height: 40px
  font-size: 18px
  text-align: center
  line-height: 40px
  background: #fff
  @include border-1px(rgba(7, 17, 27,0.1))
  .icon
    position: absolute
    top: px
    right: 30px
    font-size: 30px
.content
  box-sizing: border-box
  position: fixed
  top: 40px
  bottom: 40px
  width: 100%
  padding: 0 10px
  overflow: hidden
</style>
