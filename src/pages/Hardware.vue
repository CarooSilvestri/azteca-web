<template>
  <b-col>
    <b-row>
      <b-col cols="12" class="sectionTitle">
        <h1 class="title">Hardware</h1>
      </b-col>
    </b-row>

    <b-row class="justified mt-5">
      <b-col cols="12" md="9">
        <b-row class="mt-5">
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

        <div class="my-5" v-for="elem in hardware" :key="elem.id">
          <div v-for="h in elem" :key="h.id">
            <CardProduct :productH="h" />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-col>
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
.sectionTitle {
  padding: 10%;
  background-image: url(../assets/banners_sections/hardware.jpg);
  background-size: cover;
  background-position-y: center;
  color: white;
}
.title {
  font-size: 55pt;
}
.justified {
  justify-content: center;
}
</style>
