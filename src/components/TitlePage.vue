<template>
  <b-container fluid class="titulo">
    <h1>{{ title }}</h1>
  </b-container>
</template>

<script>
export default {
  name: "TitlePage",
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.titulo {
  background: #010440;
  color: whitesmoke;
  padding: 2%;
  font-weight: bold;
  margin-bottom: 3%;
}
</style>
