<template>
  <b-card
    title="Nombre producto"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    class="mb-2"
  >
    <b-card-text> $$$ </b-card-text>
    <b-row>
      <b-col cols="5">
        <b-button v-b-modal.modal-1 variant="primary">Ver más</b-button>
      </b-col>
      <b-col cols="5">
        <b-button href="#" variant="primary">Comprar</b-button>
      </b-col>
    </b-row>

    <ModalProductInfo />
  </b-card>
</template>

<script>
import ModalProductInfo from "./ModalProductInfo.vue";

export default {
  name: "CardProdut",
  components: { ModalProductInfo },
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped></style>
