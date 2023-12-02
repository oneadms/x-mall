<template>
  <view class="content">

    <uni-search-bar placeholder="请输入搜索内容" @confirm="search"></uni-search-bar>

    <XMallList :loading="loading" @productItemOnClick="productItemOnClick" :product-list="productList"/>

  </view>

</template>

<script>
import XMallList from "@/pages/home/components/XMallList";

export default {
  components: {XMallList},
  data() {
    return {

      loadingImg: require("../../static/image/loading.gif"),
      lastId: 1,
      current: 1,
      title: 'X-Mall',
      productList: [],
      loading: "more",
      imageLoaded: false
    }
  },
  onLoad() {
    this.load(this.getProductList(this.lastId))
  },
  onInit() {

  },

  onReachBottom() {
    console.log("滑动到底部了")
    this.load(this.getProductList(this.lastId));
  },

  methods: {
    search(val) {
      console.log(val)
    },
    change(e) {

    },

    productItemOnClick(item) {
      console.log(item)
      uni.navigateTo({
          url:`../product/detail/detail?id=${item.id}`
      })
    },
    setLoading() {
      this.loading = 'loading'
    },
    clearLoading() {
      this.loading = 'more'
    },
    async load(func) {
      this.setLoading()
      await func;
      this.clearLoading()
    },

    getLastId(list) {
      return list[list.length - 1].id;
    },
    appendData: function (data) {
      this.productList = [...this.productList, ...data]
    },
    async getProductList(id) {
      const payload = {
        lastId: id
      };

      let resp = await this.$post(`/api/goods`,
          payload,
      );
      console.log(resp)
      const {data} = resp.data;
      console.log(data)
      this.appendData(data);
      this.lastId = this.getLastId(this.productList)
    }

  }
}
</script>

<style>

.content {
  text-align: center;
  justify-content: center;
  align-items: center;
}

#pro-banner {
  width: 100%;
  height: 30%;
}
</style>
