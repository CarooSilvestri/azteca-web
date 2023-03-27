<template>
  <b-card
    :title="productH.name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="productH"
    img-top
    class="mb-2"
  >
    <b-card-text>{{ productH.price }} </b-card-text>
    <b-row align-h="center">
      <b-col cols="5">
        <b-button v-b-modal.modal-1 class="btnFlat" variant="link">
          Ver más
        </b-button>
      </b-col>
      <b-col cols="5">
        <b-button href="#" variant="primary">Comprar</b-button>
      </b-col>
    </b-row>

    <ModalProductInfo :p="productH" />
  </b-card>
</template>

<script>
import ModalProductInfo from "./ModalProductInfo.vue";

export default {
  name: "CardProdut",
  components: { ModalProductInfo },
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
