<template>
  <b-modal id="modal-1" :title="p.name">
    <p class="my-4">{{ p.description }}</p>
  </b-modal>
</template>

<script>
export default {
  name: "ModalProductInfo",
  props: {
    p: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped></style>
