<template>
  <div>
      <h3>Sad to see you leave, until next time!</h3>
      <span
      >Want to log in again? Click
      <router-link to="/login" id="link">here</router-link></span
    >
  </div>
</template>

<script>
export default {

}
</script>

<style>
h3 {
   color: black;
}
a:link {
    text-decoration: none;
    color: #2C3E50;
}
a:hover {
  text-decoration: underline;
  text-decoration-color:black;
}
a:active {
  color: black;
}
#link {
color: #2C3E50;
}
</style>