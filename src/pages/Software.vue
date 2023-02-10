<template>
  <b-container class="space">
    <b-tabs
      active-nav-item-class="font-weight-bold text-uppercase text-danger"
      fill
    >
      <b-tab
        :title="soft.name"
        v-for="soft in productsInfo"
        :key="soft.id"
        class="tab-name"
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
</style>
