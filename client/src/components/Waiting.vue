<template>
  <div class="waiting-container">
    <span class="font-weight-thin display-2">Estamos buscando a alguien para hablar contigo</span>
    <v-progress-circular class="waiting-circular" size="100" indeterminate color="primary"></v-progress-circular>
  </div>
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

<style>
.waiting-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  text-align: center;
}
.waiting-circular {
  margin-top: 75px;
}
</style>