<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-bold">UGR Chat App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$vuetify.theme.dark=!$vuetify.theme.dark">
        <v-icon>mdi-moon-waxing-crescent</v-icon>
      </v-btn>
      <v-btn icon href="http://github.com/AlexMenor/ugr-chat-app" target="_blank">
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      Made by &nbsp;
      <a
        href="http://twitter.com/alex4menor"
        :style="{'color':footerLinkColor}"
      >@alex4menor</a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    footerLinkColor() {
      return this.$vuetify.theme.dark ? "white" : "black";
    }
  }
};
</script>

<style >
#app {
  overflow-y: hidden;
}
</style>
