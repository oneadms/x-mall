<template>
  <view>
    <swiper class="swiper-box" @change="change" :indicator-dots="true">
      <swiper-item v-for="(item ,index) in productDetail.bannerList" :key="index">
        <view class="swiper-item">
          <image :src="item" style="position:absolute;width: 100%;height: 100%  "></image>
        </view>
      </swiper-item>
    </swiper>
    <uni-card color="#F44250" is-full>
      券后:¥
      <text class="header-desc">
        {{ productDetail.price }}
      </text>
      历史低价
      <view>
        已购买{{ (Math.random() * 10000).toFixed(0) }}件｜即将售完
      </view>
    </uni-card>
    <uni-card>
      <uni-row>
        <uni-col :span="18">
          <text style="color: black;font-size: 1.2em">
            {{ productDetail.name }}
          </text>
        </uni-col>
        <uni-col :span="6">
          <text v-if="productDetail.genuine" style="color: green;float: right">正品发票</text>
        </uni-col>

      </uni-row>
      <uni-row>
        <template v-for=" param in productDetail.params">
          <uni-col :span="24/productDetail.params.size">
            <uni-row>
              <text style="white-space: nowrap"> {{ param.title }}</text>
            </uni-row>
            <uni-row>
              <text style="white-space: nowrap;color: #B3B3B3">
                {{ param.content }}
              </text>

            </uni-row>
          </uni-col>
        </template>
      </uni-row>
    </uni-card>
    <uni-card>
      <view>这些人已经购买</view>
      <uni-row v-for=" user in productDetail.shoppedUserList" align='middle' justify='center'>
        <uni-col :span="4">
          <image :src="user.avatar" style="position:relative;width: 40px;height: 40px;"></image>
        </uni-col>
        <uni-col :span="20">
          <text>{{ user.userName }}</text>
        </uni-col>
      </uni-row>

    </uni-card>
    <uni-card>
      评论区:

      <x-mail-comment :info="productDetail.comments"/>
    </uni-card>


    <uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
                   @buttonClick="buttonClick" id="goods-nav"/>
  </view>
</template>

<script>
import XMailComment from "@/pages/product/detail/XMallComment.vue";

export default {
  components: {XMailComment},
  data() {
    return {
      productId: null,
      productDetail: {},
      current: 0,
      mode: 'round',
      options: [{
        icon: 'headphones',
        text: '客服'
      }, {
        icon: 'shop',
        text: '店铺',
        info: 2,
        infoBackgroundColor: '#007aff',
        infoColor: "red"
      }, {
        icon: 'cart',
        text: '购物车',
        info: 2
      }],
      buttonGroup: [{
        text: '加入购物车',
        backgroundColor: '#ff0000',
        color: '#fff'
      },
        {
          text: '立即购买',
          backgroundColor: '#ffa200',
          color: '#fff'
        }
      ]
    };
  },
  onLoad(option) {
    this.productId = option.id
    this.initData()
  },
  methods: {
    change(page) {

    },
    initData() {
      this.getProductDetail();
    },
    onClick(e) {
      uni.showToast({
        title: `点击${e.content.text}`,
        icon: 'none'
      })
    },
    buttonClick(e) {
      console.log(e)
      this.options[2].info++
    },


    getProductDetail() {
      const data = {
        id: this.productId
      }

      this.$post(`/api/goods/detail`, data,true).then(resp => {

        var {data} = resp.data;
        this.productDetail = data
      });


    }
  }

}
</script>

<style lang="scss">
.swiper-box {
  height: 500rpx;
}

#goods-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.header-desc {

  font-size: 2em;
  color: white;

}


</style>
