<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xl="4">
        <v-card height="500px" class="card">
          <v-toolbar
            v-if="!partnerDisconected"
            flat
            color="primary"
            dark
          >Estás hablando con "{{him.name}}"</v-toolbar>
          <v-toolbar v-if="partnerDisconected" flat color="grey" dark>
            "{{him.name}}" se ha desconectado &nbsp;
            <v-btn flat to="/">Volver al inicio</v-btn>
          </v-toolbar>
          <app-chat-box :messages="messages"></app-chat-box>
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
import appChatBox from "./ChatBox.vue";
export default {
  components: {
    appChatBox
  },
  data() {
    return {
      messages: [],
      newMsg: "",
      partnerDisconected: false
    };
  },
  mounted() {
    socket.on("message", msg => {
      this.messages.push({ ...msg, isMine: false });
    });
    socket.on("disconected", () => {
      this.partnerDisconected = true;
    });
  },
  computed: {
    him() {
      return this.$store.state.him;
    }
  },
  methods: {
    sendMsg() {
      if (this.newMsg) {
        const message = {
          msg: this.newMsg,
          timestamp: new Date().getTime()
        };
        this.newMsg = "";
        socket.emit("message", { ...message, to: this.him.id }, () => {
          this.messages.push({ ...message, isMine: true });
        });
      }
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
</style>
