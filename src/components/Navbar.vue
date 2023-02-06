<template>
  <b-row class="center">
    <b-col cols="8">
      <nav class="navbar navbar-expand-lg navbar-light">
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

        <div class="collapse navbar-collapse navbarPpal" id="navbarNav">
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

            <b-nav-item-dropdown text="Training">
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="../pages/Contact.vue">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>
              <router-link to="/training">Training</router-link>
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
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
.navbar {
  padding-top: 1%;
  padding-bottom: 1%;
}
.navbarPpal {
  justify-content: flex-end;
}

.center {
  justify-content: center;
  -webkit-box-shadow: 0px 50px 56px -38px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 50px 56px -38px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 50px 56px -38px rgba(0, 0, 0, 0.15);
}
.nav-link a {
  text-decoration: none;
  color: black;
}
</style>
