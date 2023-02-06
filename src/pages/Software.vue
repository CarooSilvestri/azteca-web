<template>
  <b-container class="space">
    <b-tabs content-class="hola mt-3" fill id="#hola">
      <b-tab
        title="ATS 1040 Deskop"
        active
        v-for="a in e"
        :key="a.e"
        style="border: 1px solid purple"
      >
        <TabProduct />
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
import TabProduct from "../components/TabProduct.vue";

export default {
  name: "Software",
  components: {
    TabProduct,
  },
  data() {
    return {
      e: { 1: "3", 5: "ñ" },
    };
  },
};
</script>

<style scoped>
.space {
  margin-top: 5%;
  margin-bottom: 5%;
}
.titulo {
  background: #010440;
  color: whitesmoke;
  padding: 2%;
  font-weight: bold;
  margin-bottom: 3%;
}

.hola,
#hola {
  background-color: "red" !important;
}
</style>
