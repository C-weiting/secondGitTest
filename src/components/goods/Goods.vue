<template>
  <div class="goods">
    <div class="goods-wrapper">
      <div class="menu-wrapper">
        <ul>
          <li v-for="item in goods" :key="item.name" class="menu-item border-1px">
            <span class="text">
              <span class="icon-wrapper" v-if="item.type > 0">
                <icon :iconType="item.type" :size="3"></icon>
              </span>{{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="food-wrapper">
        <ul>
          <li v-for="item in goods" :key="item.name" class="food-list">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" :key="food.name" class="food-item border-1px">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h1 class="name">{{food.name}}</h1>
                  <p class="description" v-if="food.description">
                    {{food.description}}
                  </p>
                  <span class="sellCount">月销{{food.sellCount}}份</span>
                  <span class="rating">好评{{food.rating}}%</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import Icon from '../icon/Icon'
export default {
  name: 'goods',
  data () {
    return {
      goods: []
    }
  },
  created () {
    this.$axios.get('/api/goods').then((res) => {
      console.log(res)
      this.goods = res
    })
  },
  components: {
    Icon
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../common/stylus/mixin'
  .goods
    display flex
    flex-direction column
    position absolute
    top 174px
    bottom 0
    width 100%
    .goods-wrapper
      flex 1
      display flex
      width: 100%
      overflow: hidden
      .menu-wrapper
        flex 0 0 80px
        width 80px
        .menu-item
          display table
          height: 54px
          width: 56px
          padding: 0 12px
          line-height: 14px
          .text
            display table-cell
            width: 56px
            font-size 12px
            vertical-align: middle
            border-1px(rgba(7, 17, 27, 0.1))
            .icon-wrapper
              display inline-block
              vertical-align top
              width 12px
              height 12px
              margin-right 2px
      .food-wrapper
        flex 1
        .food-list
          .title
            border-left 2px solid #d9dde1
            background #f3f5f7
            text-indent 14px
            font-size 12px
            color rgb(147, 153, 159)
            line-height 26px
          .food-item
            display flex
            padding 18px 0
            margin 0 18px
            border-1px(rgba(7, 17, 27, 0.1))
            .icon
              flex 0 0 57px
            .content
              flex 1
              padding-left 10px
              .name
                margin-top 2px
                font-size 14px
                color rgb(7, 17, 27)
                line-height 14px
              .description
                margin-top 8px
                font-size 10px
                color rgb(147, 153, 159)
                line-height 10px
              .sellCount, .rating
                display inline-block
                margin-top 8px
                font-size 10px
                color rgb(147, 153, 159)
                line-height 10px
              .sellCount
                margin-right 12px
    .footer
      flex 0 0 46px
      height 46px
</style>
