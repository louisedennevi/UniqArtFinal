<template>
  <div>
    <router-link :to="{ name: 'Mollybladskog' }"
      ><h2 class="profile">See Molly bladskog</h2></router-link
    >
    <router-link :to="{ name: 'Louisedennevi' }"
      ><h2 class="profile">See Louise Dennevi</h2></router-link
    >

    <!-- <div>
      <form id="add-user-form">
        <input type="text" name="firstName" placeholder="firstname">
        <input type="text" name="lastName" placeholder="lastname">
        <button>Add user</button>
      </form>
    </div> -->

  </div>
</template>

<script>
// import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

export default {
  name: "Profile",
  components: {},
  mounted() {
    console.log(this.$route.params.id);
  },
  watch: {
    $route(to, from) {
      console.log("to", to);
      console.log("from", from);
    }
  },
  // methods() {
  //       const db = firebase.firestore();
  //       const form = document.querySelector("add-user-form");

  //       form.addEventListener("submit", (e) => {
  //       e.preventDefault();
  //       db.collection("users").add({
  //       firstName: form.firstName.value,
  //       lastname: form.lastName.value
  //     })
  //   })
  // }
};
</script>

<style scoped>
.profile {
  font-size: 20px;
  color: black;
  padding-top: 100px;
}
a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  text-decoration-color:black;
}
a:active {
  color: black;
}
</style>
