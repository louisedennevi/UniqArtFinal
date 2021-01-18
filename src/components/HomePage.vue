<template>
<v-app>
  <div id="home">
    <my-header></my-header>
      <v-container fluid class="pa-0 ma-0">
        <v-layout align-center>
          <v-flex>
            <div class="image">
              <div style="background-color: #FFB8DF; height: 100vh; max-width:100%">
                <v-row align="center" justify="center">
                  <div class="text" data-aos="fade-right" data-aos-duration="1500">
                    <h1 class="text-center hidden-xs-only" id="extralarge">uniq art</h1>
                    <h1 class="text-center hidden-sm-and-up" id="small">uniq art</h1>
                  </div>
                </v-row>
              </div>
            </div>

          <div class="image">
            <v-img :src="imageOne" height="800"></v-img>
              <div class="text"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h1 class="text-center hidden-xs-only" id="large">MODERN</h1>
                <h1 class="text-center hidden-sm-and-up" id="small">MODERN</h1>
            </div>
          </div>
          <div class="image">
            <div style="background-color: #000; height: 100vh;">
              <h2
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                class="category"
              >
              <h2 class="text-center hidden-xs-only" id="medium">WE BELIEVE THAT EVERYONE HAS A CREATIVE SOUL</h2>
              <h2 class="text-center hidden-sm-and-up" id="extrasmall">WE BELIEVE THAT EVERYONE HAS A CREATIVE SOUL</h2>
              </h2>
            </div>
          </div>
          <div class="image">
            <div>
              <v-img :src="imageTwo" height="800"></v-img>
              <div class="text" 
              data-aos="fade-up" 
              data-aos-duration="3000"
              >
              <h1 class="text-center hidden-xs-only" id="large">ABSTRACT</h1>
              <h1 class="text-center hidden-sm-and-up" id="small">ABSTRACT</h1>
              </div>
            </div>
          </div>
          <div class="image">
            <div>
              <v-img :src="imageThree" height="800"></v-img>
                <div class="text"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                <h1 class="text-center hidden-xs-only" id="large">POP ART</h1>
                <h1 class="text-center hidden-sm-and-up" id="small">POP ART</h1>
              </div>
            </div>
          </div>
          <div class="image">
            <div style="background-color: #F04D38; height: 100vh;">
              <h3 data-aos="zoom-out-down" data-aos-duration="1500" class="text-center hidden-xs-only" id="medium">
                You don't have to have an idea of what you are going to do, you just
                need an open mind.
              </h3>
              <h3 data-aos="zoom-out-down" data-aos-duration="1500" class="text-center hidden-sm-and-up" id="extrasmall">
                You don't have to have an idea of what you are going to do, you just
                need an open mind.
              </h3>
            </div>
          </div>
          <div class="image">
            <div>
              <v-img :src="imageFour" height="800"></v-img>
              <div class="text"
                data-aos="zoom-in-right"
                data-aos-duration="500"
              >
                <h2 class="text-center hidden-sm-and-up" id="small">Take our quiz</h2>
                <h2 class="text-center hidden-xs-only" id="medium">Take our quiz</h2>
              </div>
            </div>
          </div>
          </v-flex>
        </v-layout>
      </v-container>
    <my-footer></my-footer>
  </div>
</v-app>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Home",
  components: {
    "my-header": Header,
    "my-footer": Footer
  },
  data() {
    return {
      imageOne: require('../assets/images/image-one.jpg'),
      imageTwo: require('../assets/images/image-two.jpg'),
      imageThree: require('../assets/images/image-three.jpg'),
      imageFour: require('../assets/images/image-four.jpg')
    }
  }
};
</script>

<style>
#extralarge {
  font-size: 150px;
}
#large {
font-size: 110px;
}
#medium {
  font-size: 70px;
  letter-spacing: 0px;
}
#small {
font-size: 60px;
letter-spacing: 10px;
}
#extrasmall {
  font-size: 50px;
  letter-spacing: 5px;
}
h2 {
  font-size: 50px;
}
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
.category {
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
  padding-top: 260px;
}
</style>
