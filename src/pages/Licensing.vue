<template>
  <div>
    <b-container>
      <div v-for="license in licences" :key="license.name">
        <CardLicencing :lic="license" />
      </div>
    </b-container>
  </div>
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
    };
  },
};
</script>

<style></style>
