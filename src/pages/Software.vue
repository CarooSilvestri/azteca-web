<template>
  <b-container class="space">
    <b-tabs content-class="jesus" fill>
      <b-tab
        :title="soft.name"
        active
        v-for="soft in productsInfo"
        :key="soft.id"
      >
        <TabProduct :product="soft" />
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
import TabProduct from "../components/TabProduct.vue";
import productsInfo from "../data/productsInfo.json";

export default {
  name: "Software",
  components: {
    TabProduct,
  },
  data() {
    return {
      productsInfo: productsInfo,
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

.tab-panel .tab-content .jesus {
  background-color: blue;
  color: white;
}
</style>
