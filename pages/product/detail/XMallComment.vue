<template>
  <view>
    <uni-card  :is-shadow="true" :border="false" is-full v-for=" (item,index) in info" :key="index">
      <uni-row justify="middle" align="center">
        <uni-col span="2">
          <image :src="item.avatar" style="width: 16px;height: 16px"/>
        </uni-col>
        <uni-col span="10">{{ item.name }}</uni-col>
      </uni-row>
      <uni-row>
        <uni-col :span="18">
          <text>{{ item.content }}</text>
        </uni-col>
        <uni-col :span="6">回复</uni-col>
      </uni-row>
      <template v-if="item.children">
        <uni-row>
          <uni-col offset="0.1">
            <XMallComment :info="item.children">
            </XMallComment>
          </uni-col>
        </uni-row>
      </template>
    </uni-card>

  </view>
</template>
<script>
import XMallComment from "./XMallComment.vue";
import {flatten} from "express/lib/utils";

export default {
  name: 'x-mail-comment',
  components: {XMallComment: XMallComment},
  props: {
    info: {
      type: Array,
      default: []
    }
  }
}
</script>