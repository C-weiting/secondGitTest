<template>
  <div class="goods">
    <div class="goods-wrapper">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in goods" :key="item.name" class="menu-item border-1px" :class="{current: currentIndex == index}" @click="selectMenu(index, $event)">
            <span class="text">
              <span class="icon-wrapper" v-if="item.type > 0">
                <icon :iconType="item.type" :size="3"></icon>
              </span>{{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="food-wrapper" ref="foodWrapper">
        <ul>
          <li v-for="item in goods" :key="item.name" class="food-list food-list-hook">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" :key="food.name" class="food-item border-1px">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h1 class="name">{{food.name}}</h1>
                  <p class="desc" v-if="food.description">
                    {{food.description}}
                  </p>
                  <div class="extra">
                    <span class="count">月销{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span><span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <shop-cart :minPrice="seller.minPrice" :deliveryPrice="seller.deliveryPrice"></shop-cart>
    </div>
  </div>
</template>
<script>
import Icon from '../icon/Icon'
import BScroll from 'better-scroll'
import ShopCart from '../shop-cart/ShopCart'
export default {
  name: 'goods',
  props: {
    seller: {
      type: Object
    }
  },
  watch: {
    seller (newValue, oldValue) {
      console.log(newValue)
    }
  },
  data () {
    return {
      goods: [],
      listHeight: [],
      currentHeight: 0
    }
  },
  created () {
    this.$axios.get('/api/goods').then((res) => {
      console.log(res)
      this.goods = res
      this.$nextTick(() => {
        this._initScroll()
        this._calculateHeight()
      })
    })
  },
  components: {
    Icon,
    ShopCart
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (this.currentHeight >= height1 && this.currentHeight < height2) {
          return i
        }
      }
      return 0
    }
  },
  methods: {
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodScroll = new BScroll(this.$refs.foodWrapper, {
        probeType: 3
      })

      this.foodScroll.on('scroll', (pos) => {
        this.currentHeight = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let height = 0
      let list = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        height += list[i].clientHeight
        this.listHeight.push(height)
      }
    },
    selectMenu (index, ev) {
      if (!ev._constructed) {
        return
      }
      let el = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')[index]
      this.foodScroll.scrollToElement(el, 300)
    }
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
        background #f3f5f7
        .menu-item
          display table
          height: 54px
          width: 56px
          padding: 0 12px
          line-height: 14px
          &:last-child
            .text
              border-none()
          &.current
            background #ffffff
            .text
              border-none()
              font-weight 700
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
            &:last-child
              border-none()
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
              .desc, .extra
                margin-top 8px
                font-size 10px
                color rgb(147, 153, 159)
                line-height 10px
              .desc
                line-height 12px
              .extra
                .count
                  margin-right 12px
              .price
                line-height 24px
                .now
                  margin-right 8px
                  font-size 14px
                  font-weight 700
                  color rgb(240, 20, 20)
                .old
                  text-decoration line-through
                  font-size 10px
                  font-weight 700
                  color rgb(147, 153, 159)
    .footer
      flex 0 0 46px
      height 46px
</style>
