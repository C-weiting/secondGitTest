<template>
  <div class="detail-title">
    <div class="line"></div>
    <div class="text">{{title}}</div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>
<style lang="stylus" scoped>
  .detail-title
    width 80%
    display flex
    margin 28px auto 24px
    .line
      flex 1
      height 0
      margin-top 7px
      border-top 1px solid rgba(255, 255, 255, 0.2)
    .text
      padding 0 12px
      font-size 14px
      font-weight bold
</style>
