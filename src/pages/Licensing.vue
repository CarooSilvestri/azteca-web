<template>
  <div>
    <b-container>
      <div v-for="l in lic" :key="l.name">
        <CardLicencing :txt="l.description" img="" />
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
      lic: licenses,
    };
  },
};
</script>
