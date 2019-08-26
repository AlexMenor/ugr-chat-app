<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xl="4">
        <v-card height="500px" class="card">
          <v-toolbar flat color="primary" dark>Estás hablando con "{{him.name}}"</v-toolbar>
          <div class="chat-box">
            <v-list>
              <v-list-item v-for="message in messages" :key="message.timestamp">
                <app-message
                  :mine="message.isMine"
                  :time="message.timestamp | timestampToTime"
                >{{message.msg}}</app-message>
              </v-list-item>
            </v-list>
          </div>
          <v-container class="input-box">
            <v-row>
              <v-col cols="9">
                <v-text-field v-model="newMsg"></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-btn small @click="sendMsg" fab color="primary">
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import socket from "../socketio";
import appMessage from "./Message.vue";
export default {
  components: {
    appMessage
  },
  data() {
    return {
      messages: [],
      newMsg: ""
    };
  },
  mounted() {
    socket.on("message", msg => {
      this.messages.push({ ...msg, isMine: false });
    });
  },
  computed: {
    him() {
      return this.$store.state.him;
    }
  },
  methods: {
    sendMsg() {
      const message = {
        msg: this.newMsg,
        timestamp: new Date().getTime()
      };
      this.newMsg = "";
      socket.emit("message", { ...message, to: this.him.id }, () => {
        this.messages.push({ ...message, isMine: true });
      });
    }
  },
  filters: {
    timestampToTime(timestamp) {
      const date = new Date(timestamp);
      return `${date.getHours().toString()}:${date.getMinutes().toString()}`;
    }
  }
};
</script>

<style scoped>
.card {
  position: relative;
}
.input-box {
  position: absolute;
  width: 100%;
  bottom: 0%;
  padding-left: 15px;
  padding-right: 12px;
  padding-bottom: 0px;
}
.chat-box {
  overflow-y: scroll;
  height: 70%;
}
</style>
