<template>
  <b-row class="center">
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
.center {
  justify-content: space-between;
  padding: 5%;
  align-items: center;
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
