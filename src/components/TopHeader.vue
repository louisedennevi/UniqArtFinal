<template>
  <div>
    <div>
    <div>
      <div>
        <button @click="signOut">Sign out</button>
      </div>
    </div>
  </div>
    <v-app-bar color="white" dense flat>
      <v-spacer></v-spacer>
      <span class="hidden-sm-up">
        <v-btn @click.stop="drawer = !drawer" class="hidden-sm-and-up" plain>
          Menu
        </v-btn>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>
          Home
        </v-btn>
        <v-btn to="/profile" text>
          Designers
        </v-btn>
        <v-btn to="/about" text>
          About
        </v-btn>
        <v-btn to="/login" text>
          Login
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user;
    });
  },
  data() {
    return {
      loggedIn: false,
      drawer: false,
      items: [
        { title: "Home", link: "/" },
        { title: "Designers", link: "/profile" },
        { title: "About", link: "/about" },
        { title: "Login", link: "/login" }
      ]
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>

</style>
