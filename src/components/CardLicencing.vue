<template>
  <b-row class="cuadro">
    <b-col cols="4">
      <img :src="getImgUrl(lic.name)" width="100%" fluid />
    </b-col>

    <b-col cols="7">
      <p>{{ lic.description }}</p>
      <p>
        <b> {{ lic.subtitle }}</b>
      </p>
      <p class="callToAction">
        Call us now and learn how to get your {{ lic.name }} with our help!
        <br />
        <span class="phoneNumber">714-363-0006</span>
      </p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "CardLicensing",
  props: {
    lic: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      src2: "",
    };
  },
  methods: {
    getImgUrl(nameLic) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + nameLic + ".png");
    },
  },
};
</script>

<style scoped>
.cuadro {
  margin-top: 5%;
  justify-content: space-between;
  align-items: center;
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

.callToAction {
  font-weight: bold;
  color: #f2b138;
  font-size: 20px;
}

.phoneNumber {
  font-size: 30pt;
}
</style>
