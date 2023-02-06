<template>
  <div>
    <b-row class="hola">
      <img src="../assets/0-banner.jpg" w="100vw" class="p-0" />
      <div class="centered">Centered</div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
