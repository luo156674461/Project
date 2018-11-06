<template>
  <div class="dox">
    <div class="box-ca">
      <ul class="caro" ref="ul">
        <li ref="li" v-for="(i, index) in information" :key="index" class="caroli">
          <img :src="information[index].imageUrl" width="100%" height="100%" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    information: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      num: 1
    }
  },
  watch: {
    information() {
      this._initial()
    }
  },
  methods: {
    broad() {
      setInterval(this.setTiem, 2000)
      this.$refs.ul.addEventListener('transitionend', this.comp)
    },
    setTiem() {
      this.num++
      this.$refs.ul.style.transition = 'all .5s linear'
      let pxNum = (this.$refs.li[0].offsetWidth + 20) * -this.num
      this.$refs.ul.style.transform = `translateX(${pxNum}px)`
    },
    comp() {
      if (this.num === this.$refs.li.length - 1) {
        this.num = 0
        let ppnum = this.$refs.li[0].offsetWidth + 20
        this.$refs.ul.style.transition = 'none'
        this.$refs.ul.style.transform = `translateX(${-ppnum}px)`
      }
    },
    _initial() {
      this.$nextTick(() => {
        let pxNum = (this.$refs.li[0].offsetWidth + 20) * -1
        this.$refs.ul.style.transform = `translateX(${pxNum}px)`
        this.broad()
      })
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.dox
  padding: 20px 0
  width: 100%
  overflow: hidden
  .box-ca
    margin: 0 auto
    width: 80%
    height: 150px
    .caro
      width: 1000%
      height: 150px
      .caroli
        float: left
        margin-right: 20px
        border-radius: 20px
        text-align: center
        line-height: 150px
        width: 10%
        height: 100%
        & > img
          border-radius: 20px
</style>
