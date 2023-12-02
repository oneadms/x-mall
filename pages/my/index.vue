<template>
  <view class="content">
    <uni-swiper-dot :info="productList" :current="current" field="content" :mode="round" id="pro-banner">
      <swiper class="swiper-box" @change="change">
        <swiper-item v-for="(item ,index) in productList" :key="index">
          <view class="swiper-item">
            <image :src="item.imgUrl"/>
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>


    <view v-for="item in productList" class="pro-list">
      <view class="pro-item">
        <image :src="item.imgUrl" class="pro-img"/>
        <view>
          <span class="pro-name">{{ item.name }}</span>
          <span class="pro-price">¥{{ item.price }}</span>
        </view>
      </view>


    </view>

  </view>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      title: 'X-Mail',
      productList: []
    }
  },
  onLoad() {
    this.getProductList()
  },
  onInit() {

  },
  methods: {
    change(e) {

    },

    getProductList() {
      uni.request({
        url: 'http://localhost:8081/api/goods',

      }).then(resp => {
        const {data} = resp.data;
        console.log(data)
        this.productList = data
      })
    }

  }
}
</script>

<style>

.pro-item {

  background-color: white;
  overflow: hidden;
}

.content{
  text-align: center;
  justify-content: center;
}

.pro-list {
  align-items: center;
  float: left;
  padding: 3px;
}

.pro-price {
  font-size: 0.8em;
  color: red;
}

.pro-name {
  padding: 10px;
  white-space: nowrap;

}

.pro-img {
  width: 100px;
  height: 100px;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

#pro-banner {
  width: 100%;
  height: 30%;
}
</style>
