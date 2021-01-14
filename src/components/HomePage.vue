<template>
  <div id="home">
    <my-header></my-header>
      <v-container fluid class="pa-0 ma-0">
        <v-layout align-center>
          <v-flex>
            <div class="image">
              <div style="background-color: #FFB8DF; height: 100vh; max-width:100%">
                  <div class="text" data-aos="fade-right" data-aos-duration="1500">
                    uniq art
                  </div>
              </div>
            </div>
          <div class="image">
              <img src="@/assets/images/image-one.jpg">
              <div class="text"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                MODERN
            </div>
          </div>
          <div class="image">
            <div style="background-color: #000; height: 100vh;">
              <h2
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                WE BELIEVE THAT EVERYONE HAS A CREATIVE SOUL
              </h2>
            </div>
          </div>
          <div class="image">
            <div>
              <div class="text" 
              data-aos="fade-up" 
              data-aos-duration="3000"
              >
                ABSTRACT
              </div>
              <img src="@/assets/images/image-two.jpg">
            </div>
          </div>
          <div class="image">
            <div>
                <div class="text"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  POP ART
              </div>
              <img src="@/assets/images/image-three.jpg">
            </div>
          </div>
          <div class="image">
            <div style="background-color: #F04D38; height: 100vh;">
              <h3 data-aos="zoom-out-down" data-aos-duration="1500">
                You don't have to have an idea of what you are going to do, you just
                need an open mind.
              </h3>
            </div>
          </div>
          <div class="image">
            <div>
              <div class="text"
                data-aos="zoom-in-right"
                data-aos-duration="500"
              >
                Take a quiz to find out more
              </div>
              <img src="@/assets/images/image-four.jpg">
            </div>
          </div>
      <div class="big-row"></div>
      </v-flex>
      </v-layout>
      </v-container>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Home",
  components: {
    "my-header": Header,
    "my-footer": Footer
  }
};
</script>

<style>

.image {
  position: relative;
}
.text {
  width:100%;    
  height:100%;
  position: absolute;
  top: 0;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  font-size: 190px;
  font-weight: 900;
  letter-spacing: 40px;
  color: white;
  text-transform: uppercase;
}

#home {
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
  width: 100%;
}
img {
  max-width: 100%;
  width: 100%;
  height: auto;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
}
h1 {
  font-size: 190px;
  font-weight: 900;
  letter-spacing: 40px;
  color: white;
  text-transform: uppercase;
  margin: 0 auto;
}
h2 {
  font-size: 95px;
  color: white;
  text-transform: uppercase;
  margin: 0 auto;
  padding-top: 250px;
}
h3 {
  font-size: 50px;
  color: white;
  text-transform: uppercase;
  margin: 0 auto;
  padding-top: 320px;
}
#test {
  position: relative;
}
#test-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  color: white;
  text-align: center;
}
.row {
  height: 20vh;
}
/* .big-row {
  height: 80vh;
} */
</style>
