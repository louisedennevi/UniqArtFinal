<template>
  <div>
    <router-link :to="{ name: 'Mollybladskog' }"
      ><h2 class="profile">See Molly bladskog</h2></router-link
    >
    <router-link :to="{ name: 'Louisedennevi' }"
      ><h2 class="profile">See Louise Dennevi</h2></router-link
    >

  </div>
</template>

<script>
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
  }
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
