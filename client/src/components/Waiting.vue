<template>
  <v-container>
    <v-row>
      <v-col>
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import socket from "../socketio";
export default {
  mounted() {
    socket.on("match", match => {
      this.$store.dispatch("setMatch", match).then(() => {
        this.$router.push("/chat");
      });
    });
  }
};
</script>