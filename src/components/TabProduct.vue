<template>
  <div class="tabContent">
    <b-row class="mb-5">
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
        <h2 class="titleProd">{{ soft.t }}</h2>
      </b-col>
      <b-col cols="8" class="points">
        <p>{{ soft.d }}</p>

        <div v-if="soft.points">
          <ul v-for="point in soft.points" :key="point">
            <li>{{ point }}</li>
          </ul>
        </div>
      </b-col>
    </b-row>

    <b-row class="justify"> <btn-call-us /> </b-row>
  </div>
</template>

<script>
import BtnCallUs from "./BtnCallUs.vue";
export default {
  components: { BtnCallUs },
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
  padding: 0%;
  text-align: left;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
  box-shadow: 16px 15px 35px -4px rgba(0, 0, 0, 0.33);
  -webkit-box-shadow: 16px 15px 35px -4px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 16px 15px 35px -4px rgba(0, 0, 0, 0.33);
}

.content-prod {
  padding: 1% 3% 2% 3%;
  color: black;
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

  color: black;
}
.points {
  font-size: large;
}
</style>
