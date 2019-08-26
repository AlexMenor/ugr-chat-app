<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-text>
            <v-form ref="form">
              <v-text-field label="Nombre" type="text" :rules="rules" autofocus v-model="name"></v-text-field>
              <v-btn
                x-large
                :color="mentor ? 'primary' : 'grey lighten-4'"
                @click="mentor = true"
              >MENTOR</v-btn>
              <v-btn
                x-large
                :color="mentor ? 'grey lighten-4' : 'primary'"
                @click="mentor = false"
              >NOVATO</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div>
              <v-btn @click="join" :loading="loading">Unirse</v-btn>
            </div>
          </v-card-actions>
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
          this.$router.push("/waiting");
        });
      }
    }
  }
};
</script>