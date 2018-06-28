<template>
  <div id="app">
    <v-header :seller = "seller"></v-header>
    <div class="tab border-1px">
      <router-link to="/goods">商品</router-link>
      <router-link to="/ratings">评论</router-link>
      <router-link to="/seller">商家</router-link>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import vHeader from './components/header/Header'
import './common/stylus/fonts/style.css'
import './common/stylus/index'
export default {
  name: 'App',
  components: {
    vHeader
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$axios.get('/api/seller').then((res) => {
        console.log(res)
        this.seller = res
      })
    }
  }
}
</script>

<style lang="stylus">
  @import 'common/stylus/mixin'
  @import 'common/stylus/base'
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    a
      flex 1
      text-align center
      color rgb(77, 85, 93)
      font-size 14px
      &.active
        color rgb(240, 20, 20)
</style>
