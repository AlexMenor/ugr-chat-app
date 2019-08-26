<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>UGR Chat App</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>Made with love</v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
