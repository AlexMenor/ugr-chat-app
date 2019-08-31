<template>
  <v-container class="fill-height text-align-center">
    <v-row>
      <v-col>
        <span
          class="font-weight-thin display-1"
        >Esta página no existe, redirigiendo a la página principal...</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("/");
    }, 2000);
  }
};
</script>
<style >
.text-align-center {
  text-align: center;
}
</style>