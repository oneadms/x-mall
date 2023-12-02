<template>
  <view class="content">
    <view class="msg-item" v-for="item in messageList">
      <image :src="item.roomLogo" class="room-logo"/>
      <span>{{ item.roomName }}</span>
      <image :src="enterIcon" class="msg-enter"/>
      <text class="msg-last-content">\n{{ item.lastMessage.userInfo.name }}:{{ item.lastMessage.content }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '聊天',
      messageList: [],
      enterIcon: require('../../static/image/enter.png')
    }
  },
  onLoad() {
    this.getMessageList()
  },
  onInit() {

  },
  methods: {
    change(e) {

    },

    getMessageList() {
      this.$post('/api/message',

      ).then(resp => {
        const {data} = resp.data;
        console.log(data)
        this.messageList = data
      })
    }

  }
}
</script>

<style>

.room-logo {
  width: 20px;
  height: 20px;
  padding-right: 10px;
}

.content {
  background-color: #e8e8e8;
}

.msg-item {
  display: flex;
  align-items: center;
  background-color: white;
  height: 70px;
  width: 100%;
  border: 1px solid white;
}

.msg-enter {
  position: absolute;
  width: 8px;
  height: 8px;
  right: 0;
  padding-right: 10px;
}

.msg-last-content {
  display: block;
  font-size: 0.5em;
  color: #e8e8e8;
  position: absolute;
  padding-top: 16px;
  left: 0;
}

.msg-item:hover {

  background-color: #e8e8e8;
}
</style>
