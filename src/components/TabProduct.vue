<template>
  <div class="tabContent">
    <b-row>
      <b-img :src="getImgUrl(product.name)" fluid :alt="product.name" />
    </b-row>

    <b-row v-if="product.description" class="justify">
      <b-col cols="7">
        <h3 class="description">
          {{ product.description }}
        </h3>
      </b-col>
    </b-row>

    <b-row
      class="justified content-prod"
      v-for="soft in product.tittles"
      :key="soft.t"
      align-v="center"
    >
      <b-col cols="3">
        <h3 class="titleProd">{{ soft.t }}</h3>
      </b-col>
      <b-col cols="8">
        <p>{{ soft.d }}</p>

        <div v-if="soft.points">
          <ul v-for="point in soft.points" :key="point">
            <li>{{ point }}</li>
          </ul>
        </div>
      </b-col>
    </b-row>

    <b-row class="justify">
      <b-col cols="4">
        <b-button size="lg" class="btnAction" href="/contact">
          CALL US!
        </b-button>
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
  methods: {
    getImgUrl(nameProd) {
      var images = require.context("../assets/banners_prods/", false, /\.jpg$/);
      return images("./" + nameProd + ".jpg");
    },
  },
};
</script>

<style scoped>
.tabContent {
  border: 1px solid lightgray;
  border-top: none;
  padding: 0%;
  background: aliceblue;
  text-align: left;
}

.content-prod {
  padding: 3%;
}

.justify {
  justify-content: center;
}

.justified {
  justify-content: space-between;
}

.titleProd {
  font-weight: bold;
  text-align: center;
  color: #f2b33d;
}
.description {
  text-align: center;
}

.btnAction {
  background-color: #125938;
  font-size: 32px;
  text-align: center;
  margin-bottom: 10%;
  width: 100%;
}
</style>
