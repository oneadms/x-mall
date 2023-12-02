<template>
  <view>
    <uni-card is-full>
      <view class="pro-container" v-if="productList">
        <view v-for="item in productList" class="pro-list">
          <view class="pro-item" @click="productItemOnClick(item)">
            <image :src="item.imgUrl" class="pro-img"/>
            <view>
              <span class="pro-name">{{item.name}}</span>
              <span class="pro-price">¥{{ item.price}}</span>
            </view>
          </view>
        </view>
      </view>
    </uni-card>
    <uLi-load-more :status="loading"></uLi-load-more>
  </view>
</template>
<script>
import ULiLoadMore from "@/components/uLi-load-more/uLi-load-more.vue"

export default {
  name: 'x-mall-list',
  components: {ULiLoadMore},
  props: {
    loading: "",
    productList: null
  },
  methods: {
    productItemOnClick(item) {
      this.$emit("productItemOnClick", item)
    },
  }
}
</script>
<style>

.pro-item {
  background-color: white;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pro-container {
  flex-wrap: wrap;
  display: flex;
  padding: 10px;
  margin: auto auto;
  text-align: center;
  justify-content: center;
  align-items: flex-start;
}

.pro-list {
  padding: 3px;
  width: 30%;

}

.pro-price {
  font-size: 0.8em;
  color: red;

  white-space: nowrap;
}

.pro-name {
  padding: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.pro-img {
  width: 100px;
  height: 100px;
}

</style>