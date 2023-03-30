<template>
  <b-row class="center">
    <b-col cols="8">
      <nav class="navbar navbar-expand-lg navbar-light text-center">
        <b-navbar-brand href="#" width="20%">
          <img
            src="../assets/logo/logo.png"
            alt="azteca tax system logo"
            style="max-height: 75px"
          />
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

        <div class="collapse navbar-collapse mx-5" id="navbarNav">
          <ul class="navbar-nav">
            <b-nav-item>
              <router-link to="/">Home</router-link>
            </b-nav-item>

            <b-nav-item class="mx-3">
              <router-link to="/software">Software</router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link to="/hardware">Hardware</router-link>
            </b-nav-item>

            <b-nav-item class="mx-3">
              <router-link to="/training">Training</router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link to="/licensing">Licensing</router-link>
            </b-nav-item>

            <b-nav-item class="mx-3">
              <router-link to="/support">Support</router-link>
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
  -webkit-box-shadow: 0px 50px 56px -38px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 50px 56px -38px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 50px 56px -38px rgba(0, 0, 0, 0.15);
  font-size: larger;
}
.center {
  justify-content: center;
}
.nav-link a {
  text-decoration: none;
  color: black;
}
</style>
