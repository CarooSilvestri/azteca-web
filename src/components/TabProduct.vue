<template>
  <div class="tabContent">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <div v-for="soft in product.tittles" :key="soft.t">
      <h3>{{ soft.t }}</h3>
      <p>{{ soft.d }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabProduct",
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
</style>
