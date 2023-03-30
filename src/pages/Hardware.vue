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
            <b-button size="lg" variant="warning">All items</b-button>
          </b-col>
          <b-col lg="2" class="pb-2">
            <b-button size="lg" variant="warning">Signature pads</b-button>
          </b-col>
          <b-col lg="2" class="pb-2">
            <b-button size="lg" variant="warning">Scanners</b-button>
          </b-col>
          <b-col lg="2" class="pb-2">
            <b-button size="lg" variant="warning">Work Stations</b-button>
          </b-col>
          <b-col lg="2" class="pb-2">
            <b-button size="lg" variant="warning">Monitors</b-button>
          </b-col>
          <b-col lg="2" class="pb-2">
            <b-button size="lg" variant="warning">Laptops</b-button>
          </b-col>
        </b-row>

        <b-row class="mb-5">
          <b-col cols="3" class="mt-5" v-for="elem in hardware" :key="elem.id">
            <CardProduct :productH="elem" @show-modal="showModal" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-modal
      v-if="selectedProduct"
      :title="selectedProduct.name"
      @hidden="resetSelectedProduct"
    >
      <p>{{ selectedProduct.description }}</p>
    </b-modal>
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
      selectedProduct: null,
    };
  },
  methods: {
    showModal(product) {
      this.selectedProduct = product;
      console.log(product);
    },
    resetSelectedProduct() {
      this.selectedProduct = null;
    },
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
