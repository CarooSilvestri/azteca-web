<template>
  <b-card
    :title="productH.name"
    :img-src="require('../assets/blanc.jpg')"
    :img-alt="productH.name"
    img-top
    class="mt-2"
  >
    <b-card-text class="my-4" style="font-size: 18pt">
      {{ productH.price }}
    </b-card-text>

    <b-row align-h="center">
      <b-col cols="6">
        <b-button
          @click="$emit('show-modal', productH)"
          class="btnFlat"
          variant="link"
          size="med"
        >
          More info...
        </b-button>
      </b-col>
      <b-col cols="6">
        <b-button href="#" variant="primary" size="md" class="px-5">
          Buy
        </b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "CardProdut",
  components: {},
  props: {
    productH: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.btnFlat {
  font-weight: bold;
  text-decoration: none !important;
  color: gray;
  background: none;
}
</style>
