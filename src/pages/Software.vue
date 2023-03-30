<template>
  <b-col>
    <b-row class="center">
      <b-col cols="12" class="sectionTitle">
        <h1 class="title">
          <span class="orange">Industry leading</span> tax software
        </h1>
      </b-col>
    </b-row>

    <b-row class="justified py-5 tab-cont">
      <b-col cols="10">
        <b-tabs active-tab-class="tab-name" fill>
          <b-tab v-for="soft in productsInfo" :key="soft.id">
            <template #title>
              <span class="tab-name">
                <strong> {{ soft.name }}</strong>
              </span>
            </template>
            <TabProduct :product="soft" />
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import TabProduct from "../components/TabProduct.vue";
import productsInfo from "../data/productsInfo.json";

export default {
  name: "Software",
  components: {
    TabProduct,
  },
  data() {
    return {
      productsInfo: productsInfo,
    };
  },
};
</script>

<style scoped>
.sectionTitle {
  padding: 10%;
  background-image: url(../assets/banners_sections/software.jpg);
  background-size: cover;
  background-position-y: center;
  color: white;
}

.title {
  font-size: 55pt;
}
.orange {
  color: #f2b33d;
  font-weight: 600;
}
.tab-cont {
  background-color: #eaeaea;
}
.justified {
  justify-content: center;
}

.tab-cont {
  font-size: 20pt !important;
  color: black;
}

.t:active {
  color: red !important;
}
</style>
