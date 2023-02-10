<template>
  <b-container class="my-5">
    <b-row>
      <b-col lg="1" class="pb-2">
        <p>Filter</p>
      </b-col>
      <b-col lg="1" class="pb-2">
        <b-button size="sm">All items</b-button>
      </b-col>
      <b-col lg="2" class="pb-2">
        <b-button size="sm">Signature pads</b-button>
      </b-col>
      <b-col lg="1" class="pb-2">
        <b-button size="sm">Scanners</b-button>
      </b-col>
      <b-col lg="2" class="pb-2">
        <b-button size="sm">Work Stations</b-button>
      </b-col>
      <b-col lg="1" class="pb-2">
        <b-button size="sm">Monitors</b-button>
      </b-col>
      <b-col lg="1" class="pb-2">
        <b-button size="sm">Laptops</b-button>
      </b-col>
    </b-row>

    <b-row class="my-5">
      <b-col cols="3">
        <CardProduct />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CardProduct from "../components/CardProduct.vue";
export default {
  name: "Hardware",
  components: { CardProduct },
  props: {
    product: {
      type: Object,
      default: null,
    },
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
