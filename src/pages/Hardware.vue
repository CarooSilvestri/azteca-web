<template>
  <b-container class="my-5">
    <b-row align-h="evenly">
      <b-col lg="2" class="pb-2">
        <b-button size="sm">All items</b-button>
      </b-col>
      <b-col lg="2" class="pb-2">
        <b-button size="sm" variant="success">Signature pads</b-button>
      </b-col>
      <b-col lg="2" class="pb-2">
        <b-button size="sm" variant="danger">Scanners</b-button>
      </b-col>
      <b-col lg="2" class="pb-2">
        <b-button size="sm" variant="warning">Work Stations</b-button>
      </b-col>
      <b-col lg="2" class="pb-2">
        <b-button size="sm" variant="info">Monitors</b-button>
      </b-col>
      <b-col lg="2" class="pb-2">
        <b-button size="sm" variant="primary">Laptops</b-button>
      </b-col>
    </b-row>

    <b-row class="my-5" v-for="h in hardware" :key="h.name">
      <b-col cols="3" v-for="prodH in h" :key="prodH.id">
        <div v-for="a in prodH" :key="a.id">
          <CardProduct :productH="a" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CardProduct from "../components/CardProduct.vue";
import products from "../data/products.json";

export default {
  name: "Hardware",
  components: { CardProduct },
  data() {
    return {
      hardware: products,
    };
  },
};
</script>

<style scoped>
.tabContent {
  border: 1px solid lightgray;
  border-top: none;
  padding: 3%;
  text-align: left;
}
.tab-title {
  text-align: center;
  font-size: 50px;
  margin-bottom: 3%;
}

.content-prod {
  background: red;
  padding: 2%;
}

.justified {
  justify-content: space-between;
}
</style>
