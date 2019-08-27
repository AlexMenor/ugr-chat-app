<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                outlined
                label="Nombre"
                type="text"
                :rules="rules"
                autofocus
                v-model="name"
              ></v-text-field>
              <div class="role-buttons-container">
                <v-btn
                  outlined
                  x-large
                  :color="mentor ? 'primary' : 'grey lighten-1'"
                  @click.stop="mentor = true"
                >MENTOR</v-btn>
                <v-btn
                  outlined
                  x-large
                  :color="mentor ? 'grey lighten-1' : 'primary'"
                  @click.stop="mentor = false"
                >NOVATO</v-btn>
              </div>
            </v-form>
          </v-card-text>
          <div class="button-align-center">
            <v-btn fab @click="join" :loading="loading" color="primary" depressed>
              <v-icon>mdi-check</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import socket from "@/socketio";
export default {
  data() {
    return {
      mentor: true,
      name: "",
      loading: false
    };
  },
  computed: {
    rules() {
      const nameNotEmpty = name => (name ? true : "Debes elegir un nombre");
      const nameNotTooLong = name =>
        name.length > 10 ? "El nombre es muy largo" : true;

      return [nameNotEmpty, nameNotTooLong];
    }
  },
  methods: {
    join() {
      if (this.$refs.form.validate()) {
        const data = {
          name: this.name,
          role: this.mentor ? "mentor" : "newbie"
        };
        this.loading = true;
        socket.emit("join", data, () => {
          this.loading = false;
          this.$store.dispatch("joined").then(() => {
            this.$router.push("/waiting");
          });
        });
      }
    }
  }
};
</script>

<style>
.role-buttons-container {
  display: flex;
  justify-content: space-around;
}
.button-align-center {
  text-align: center;
  padding-bottom: 20px;
}
</style>