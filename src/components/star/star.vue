<template>
  <div class="star" :class="starType">
    <span v-for="(starClass, index) in starClasses" :key="index" class="star-item" :class="starClass"></span>
  </div>
</template>
<script>

const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  data () {
    return {

    }
  },
  computed: {
    starType () {
      return `star-${this.size}`
    },
    starClasses () {
      let result = []
      let score = Math.floor(this.score * 2) / 2
      let integer = Math.floor(score)
      let hasDecimal = score % 1 !== 0
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }
      if (hasDecimal) result.push(CLS_HALF)
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
  .star
    .star-item
      display inline-block
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 20px
        background-size 20px 20px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
</style>
