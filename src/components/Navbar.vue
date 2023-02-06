<template>
  <!-- <b-row class="navbarPpal" style="justify-content: center">
    <b-col cols="9">
      <b-navbar class="navContent">
               <b-navbar-nav>
         

          <b-nav-item-dropdown text="Training">
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Support">
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="../pages/Contact.vue">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </b-col>
  </b-row> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <b-navbar-brand href="#">
      <img src="../assets/logo/logo.png" alt="azteca tax system logo" />
    </b-navbar-brand>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <b-nav-item>
          <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/software">Software</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/software">Hardware</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/contact">Training</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/licensing">Licensing</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/contact">Support</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/contact">Contact</router-link>
        </b-nav-item>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
.navbarPpal {
  padding: 1%;
  justify-content: "center";
}

.center {
  justify-content: "center";
}

.nav-link a {
  text-decoration: none;
  color: black;
}
</style>
