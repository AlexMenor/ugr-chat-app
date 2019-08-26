<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>UGR Chat App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$vuetify.theme.dark=!$vuetify.theme.dark">
        <v-icon>mdi-moon-waxing-crescent</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      Made with &nbsp;
      <v-icon>mdi-heart</v-icon>&nbsp;by&nbsp;
      <a href="http://twitter.com/alex4menor" :style="{'color':'black'}">@alex4menor</a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
