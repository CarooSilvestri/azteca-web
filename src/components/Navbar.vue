<template>
  <b-container class="navbarPpal">
    <b-navbar justify-center>
      <b-navbar-brand href="#">
        <img src="../assets/logo/logo.png" alt="Kitten" />
      </b-navbar-brand>

      <b-navbar-nav right>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Software</b-nav-item>
        <b-nav-item href="#">Hardware</b-nav-item>
        <b-nav-item href="#">Licencing</b-nav-item>
        <b-nav-item href="#">Training</b-nav-item>
        <b-nav-item href="#">Suport</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
        <!-- 

      <b-nav-item-dropdown text="Lang" left>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-navbar>
  </b-container>
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
}
</style>
