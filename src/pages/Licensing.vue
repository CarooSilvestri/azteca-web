<template>
  <div>
    <b-container>
      <div v-for="license in licences" :key="license.name">
        <CardLicencing
          :txt="license.description"
          :imgSrc="license.name"
          :subtitle="license.subtitle"
        />
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

<style>
.cuadro {
  background: #ababab;
  background: #f6f6f6;
  margin-bottom: 5%;
  box-shadow: 10px 10px 20px rgba(199, 199, 199, 0.2),
    -10px -10px 20px rgba(199, 199, 199, 0.2),
    10px -10px 20px rgba(255, 255, 255, 0.9),
    -10px 10px 25px rgba(199, 199, 199, 0.9),
    inset -1px 1px 2px rgba(255, 255, 255, 0.3),
    inset 1px -1px 2px rgba(199, 199, 199, 0.5);
  border-radius: 8px;
  padding: 3%;
}
</style>
