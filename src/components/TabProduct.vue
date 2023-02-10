<template>
  <div class="tabContent">
    <h1 class="tab-title">{{ product.name }}</h1>
    <b-row class="justified">
      <p>{{ product.description }}</p>
      <b-col
        v-for="soft in product.tittles"
        :key="soft.t"
        cols="3"
        class="content-prod"
      >
        <h3>{{ soft.t }}</h3>
        <p>{{ soft.d }}</p>
      </b-col>
    </b-row>
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
