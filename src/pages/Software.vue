<template>
  <b-row>
    <b-col>
      <b-row class="center">
        <b-col cols="12" class="sectionTitle">
          <h1 class="title">
            <span class="orange">Industry leading</span> tax software
          </h1>
        </b-col>
      </b-row>

      <b-row class="justified my-5">
        <b-col cols="8">
          <b-tabs
            active-nav-item-class="font-weight-bold text-uppercase text-danger"
            fill
          >
            <b-tab
              :title="soft.name"
              v-for="soft in productsInfo"
              :key="soft.id"
              class="tab-name"
            >
              <TabProduct :product="soft" />
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
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
.space {
  margin-top: 5%;
  margin-bottom: 5%;
}
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
.justified {
  justify-content: center;
}
</style>
