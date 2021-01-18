<template>
  <div>
    Login
    <form @submit.prevent="pressed">
      <v-form v-model="valid">
        <v-container fill-height>
          <v-row align="center">
            <v-col
              cols="12"
              align-self="center"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              align-self="center"
            >
              <v-text-field
                v-model="password"
                type="password"
                :counter="10"
                label="Password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <button type="submit">Login</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
    <span
      >Need an account? Register
      <router-link to="/register" id="link">here</router-link></span
    >
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "secret" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style scoped>
form {
  padding-left: 50px;
  padding-right: 50px;
}
.error {
  color: red;
  font-size: 18px;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
#link {
color: #2C3E50;
}
</style>
