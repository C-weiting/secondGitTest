<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon-wrapper">
            <icon :iconType="seller.supports[0].type" :size="1"></icon>
          </span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%">
    </div>
    <transition name="slide-fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="datail-main">
            <h1>{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <line-title title="优惠信息"></line-title>
            <ul class="supports">
              <li v-if="seller.supports" v-for="item in seller.supports" :key="item.type">
                <span class="icon-wrapper">
                  <icon :iconType="item.type" :size="2"></icon>
                </span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <line-title title="优惠信息"></line-title>
            <p>{{seller.bulletin}}</p>
          </div>
        </div>
        <div class="detail-close" @click="detailShow = false">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Star from '../star/Star'
import LineTitle from '../line-title/LineTitle'
import Icon from '../icon/Icon'
export default {
  name: 'vheader',
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    Star,
    LineTitle,
    Icon
  },
  data() {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetail() {
      this.detailShow = true
    }
  }
}
</script>
<style lang="stylus">
@import '../../common/stylus/mixin';

.header {
  position: relative;
  color: #ffffff;
  overflow: hidden;
  background: rgba(7, 17, 27, 0.5);

  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0px;

    .avatar {
      display: inline-block;
      vertical-align: top;

      img {
        border-radius: 2px;
      }
    }

    .content {
      display: inline-block;
      font-size: 12px;
      margin-left: 16px;

      .title {
        margin: 2px 0 8px;

        .brand {
          width: 30px;
          height: 18px;
          display: inline-block;
          vertical-align: top;
          bg-image('./images/brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 6px;
          font-size: 16px;
          font-weight: bold;
          line-height: 18px;
        }
      }

      .description {
        margin-bottom: 10px;
      }

      .supports {
        .icon-wrapper {
          display: inline-block;
          vertical-align: top;
          width: 10px;
          height: 10px;
          margin-right: 4px;
        }

        .text {
          line-height: 12px;
          font-size: 10px;
        }
      }
    }

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 18px;
      height: 24px;
      line-height: 24px;
      padding: 7px 8px;
      border-radius: 14px;
      background: rgba(0, 0, 0, 0.2);
      text-align: center;

      .count {
        font-size: 10px;
      }

      .icon-keyboard_arrow_right {
        margin-left: 2px;
        line-height: 24px;
        font-size: 10px;
      }
    }
  }

  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);

    .bulletin-title {
      display: inline-block;
      margin-top: 8px;
      vertical-align: top;
      width: 22px;
      height: 12px;
      bg-image('./images/bulletin');
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }

    .bulletin-text {
      vertical-align: top;
      margin: 0 4px;
      font-size: 10px;
    }

    .icon-keyboard_arrow_right {
      position: absolute;
      font-size: 10px;
      right: 12px;
      top: 8px;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    filter: blur(10px);
  }

  .detail {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
    z-index: 100;
    background: rgba(7, 17, 27, 0.8);
    backdrop-filter: blur(10px);

    .detail-wrapper {
      width: 100%;
      min-height: 100%;

      .datail-main {
        margin-top: 64px;
        padding-bottom: 64px;

        h1 {
          text-align: center;
          font-size: 16px;
          line-height: 16px;
          font-weight: 700;
        }

        .star-wrapper {
          margin-top: 18px;
          padding: 2px 0;
          text-align: center;
        }

        .supports {
          width: 80%;
          margin: 0 auto;

          li {
            margin-bottom: 12px;
            padding: 0 12px;
            font-size: 0;

            &:last-child {
              margin-bottom: 0;
            }

            .icon-wrapper {
              display: inline-block;
              vertical-align: top;
              width: 16px;
              height: 16px;
              margin-right: 6px;
            }

            .text {
              line-height: 16px;
              font-size: 12px;
            }
          }
        }

        p {
          width: 80%;
          font-size: 12px;
          line-height: 24px;
          padding: 0 12px;
          box-sizing: border-box;
          margin: 0 auto;
        }
      }
    }

    .detail-close {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: 32px;
    }
  }
}
</style>
