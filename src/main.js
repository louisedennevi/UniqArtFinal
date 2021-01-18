import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import admin from "firebase-admin";
import vuetify from "@/plugins/vuetify";

import AOS from "aos";
import "aos/dist/aos.css";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(admin);


const firebaseConfig = {
  apiKey: "AIzaSyB3gzVghWYFWdaT_JUt0Bu9p-hYu_xMDzQ",
  authDomain: "uniqart-d89a5.firebaseapp.com",
  databaseURL: "https://uniqart-d89a5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "uniqart-d89a5",
  storageBucket: "uniqart-d89a5.appspot.com",
  messagingSenderId: "248961533032",
  appId: "1:248961533032:web:4d5a7fba2a90a0fc8227dd"
};

firebase.initializeApp(firebaseConfig);

// utils

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
const projectStorage = firebase.storage();

// const userList = document.querySelector("#user-list");

// create element and render users

// function renderUser (doc){
//   let li = document.createElement("li");
//   let firstName = document.createElement("span");
//   let lastName = document.createElement("span");
//   let artMatch = document.createElement("span");

//   li.setAttribute("data-id", doc.id);
//   firstName.textContent = doc.data.firstName;
//   lastName.textContent = doc.data.lastName;
//   artMatch.textContent = doc.data.artMatch;

//   li.appendChild(firstName);
//   li.appendChild(lastName);
//   li.appendChild(artMatch);

//   userList.appendChild(li);
// }


// collection ref, getting data

db.collection("users").get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
  })
})

export { db, projectStorage }

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  if (!app) {
    app = new Vue({
      created() {
        AOS.init();
      },
      router,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
