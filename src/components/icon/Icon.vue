<template>
  <span class="icon" :class="iconClass"></span>
</template>
<script>
export default {
  name: 'icon',
  props: {
    iconType: {
      type: Number
    },
    size: {
      type: Number
    }
  },
  data () {
    return {
      typeMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  },
  computed: {
    iconClass () {
      return `${this.typeMap[this.iconType]}_${this.size}`
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../common/stylus/mixin'
  .icon
    display inline-block
    width 100%
    height 100%
    background-size 100% 100%
    background-repeat no-repeat
    &.decrease_1
      bg-image('./images/decrease_1')
    &.discount_1
      bg-image('./images/discount_1')
    &.guarantee_1
      bg-image('./images/guarantee_1')
    &.invoice_1
      bg-image('./images/invoice_1')
    &.special_1
      bg-image('./images/special_1')
    &.decrease_2
      bg-image('./images/decrease_2')
    &.discount_2
      bg-image('./images/discount_2')
    &.guarantee_2
      bg-image('./images/guarantee_2')
    &.invoice_2
      bg-image('./images/invoice_2')
    &.special_2
      bg-image('./images/special_2')
    &.decrease_3
      bg-image('./images/decrease_3')
    &.discount_3
      bg-image('./images/discount_3')
    &.guarantee_3
      bg-image('./images/guarantee_3')
    &.invoice_3
      bg-image('./images/invoice_3')
    &.special_3
      bg-image('./images/special_3')
    &.decrease_4
      bg-image('./images/decrease_4')
    &.discount_4
      bg-image('./images/discount_4')
    &.guarantee_4
      bg-image('./images/guarantee_4')
    &.invoice_4
      bg-image('./images/invoice_4')
    &.special_4
      bg-image('./images/special_4')
</style>
