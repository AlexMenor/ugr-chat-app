<template>
  <div class="chat-box" ref="chatBox">
    <v-list>
      <v-list-item v-for="message in messages" :key="message.timestamp">
        <app-message
          :mine="message.isMine"
          :time="message.timestamp | timestampToTime"
        >{{message.msg}}</app-message>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import appMessage from "./Message.vue";
export default {
  props: ["messages"],
  components: {
    appMessage
  },
  updated() {
    const chatBoxRef = this.$refs.chatBox;
    chatBoxRef.scrollTop = chatBoxRef.scrollHeight;
  },
  filters: {
    timestampToTime(timestamp) {
      const date = new Date(timestamp);
      const hours = date.getHours().toString();
      let minutes = date.getMinutes().toString();

      if (minutes.length === 1) minutes = "0" + minutes;

      return `${hours}:${minutes}`;
    }
  }
};
</script>

<style>
.chat-box {
  overflow-y: scroll;
  height: 70%;
}
</style>