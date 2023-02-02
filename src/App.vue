<template>
  <b-container fluid id="app">
    <ContactNavbar />
    <Navbar />
    <Licensing />
    <!--   <Licensing /> -->
    <!--     <router-view :key="$router.path" /> -->
    <Footer />
  </b-container>
</template>

<script>
import ContactNavbar from "./components/ContactNavbar.vue";
import Navbar from "./components/Navbar.vue";

import Footer from "./components/Footer.vue";
import Licensing from "./pages/Licensing.vue";
//import Licensing from "./pages/Licensing.vue";
export default {
  name: "App",
  components: {
    ContactNavbar,
    Navbar,
    Footer,
    Licensing,
    /*  Home, */
    /* Licensing, */
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}
</style>
