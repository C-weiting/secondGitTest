<template>
  <div class="shop-cart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight': totolCount > 0}">
            <i class="icon-shopping_cart" :class="{'highlight': totolCount > 0}"></i>
          </div>
          <span class="count">{{totolCount}}</span>
        </div>
        <div class="price" :class="{'highlight': totolPrice > 0}">￥{{totolPrice}}</div>
        <div class="desc">另需配送费{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="{'enough': totolPrice >= minPrice}">
          {{payDesc}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shopCart',
  props: {
    deliveryPrice: {
      type: Number
    },
    minPrice: {
      type: Number
    },
    selectFood: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      price: 0
    }
  },
  computed: {
    totolPrice () {
      let price = 0
      this.selectFood.forEach(element => {
        price += element.price
      })
      return price
    },
    totolCount () {
      let count = 0
      this.selectFood.forEach(element => {
        count += element.count
      })
      return count
    },
    payDesc () {
      if (this.totolPrice === 0) {
        return `￥${this.minPrice}起送`
      } else if (this.totolPrice < this.minPrice) {
        return `还差${this.minPrice - this.totolPrice}元起送`
      } else {
        return '去结算'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .shop-cart
    .content
      display flex
      background #141d27
      height 46px
      color rgba(255, 255, 255, 0.4)
      .content-left
        flex 1
        font-size: 0
        .logo-wrapper
          width 56px
          height 56px
          position relative
          display inline-block
          top -12px
          padding 6px
          margin-left 12px
          box-sizing border-box
          border-radius 50%
          background #141d27
          .logo
            width 100%
            height 100%
            background #2b343c
            border-radius 50%
            text-align center
            &.highlight
              background-color rgb(0, 160, 220)
            .icon-shopping_cart
              color #80858a
              line-height: 44px
              font-size 24px
              &.highlight
                color rgb(255, 255, 255)
          .count
            display inline-block
            position absolute
            top 0
            right 0
            padding 0 6px
            border-radius 8px
            font-size 9px
            font-weight 700
            line-height 16px
            background-color rgb(240, 20, 20)
            color rgb(255, 255, 255)
            box-shadow 0 4px 8px 0 rgba(0, 0, 0, .4)
        .price
          display inline-block
          vertical-align top
          font-size 16px
          font-weight 700
          line-height 24px
          margin 12px
          padding-right 12px
          border-right 1px solid rgba(255, 255, 255, .1)
          &.highlight
            color rgb(255, 255, 255)
        .desc
          display inline-block
          vertical-align top
          font-size 12px
          line-height 46px
      .content-right
        flex 0 0 105px
        width: 105px
        .pay
          line-height 46px
          text-align center
          font-weight 700
          font-size 12px
          background #2b333b
          &.enough
            background: #00b43c
            color: #fff
</style>
