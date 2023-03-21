<template>
  <b-row>
    <b-col>
      <b-row class="center mb-5">
        <b-col cols="12" class="sectionTitle">
          <h1 class="title"></h1>
        </b-col>
      </b-row>

      <b-row
        v-for="license in licences"
        :key="license.name"
        align-h="center"
        class="mb-5"
      >
        <b-col cols="9">
          <CardLicencing :lic="license" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import CardLicencing from "../components/CardLicencing.vue";
import licenses from "../data/licenses.json";

export default {
  name: "Licensing",
  components: {
    CardLicencing,
  },
  data() {
    return {
      licences: licenses,
      slide: 0,
      sliding: null,
    };
  },
};
</script>

<style scoped>
.sectionTitle {
  padding: 10%;
  background-image: url(../assets/banners_sections/licencing.jpg);
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;
  color: white;
}
</style>
