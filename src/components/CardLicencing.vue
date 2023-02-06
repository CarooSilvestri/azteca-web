<template>
  <b-row class="cuadro">
    <b-col cols="5">
      <img src="../assets/CTEC.png" width="100%" fluid />
    </b-col>

    <b-col cols="6">
      <p>{{ txt }}</p>
      <p>
        <b> {{ subtitle }}</b>
      </p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "CardLicensing",
  props: {
    txt: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      src2: "",
    };
  },

  mounted() {
    this.src2 = "../assets/" + this.imgSrc + ".png";
    console.log(this.src2.toString());
  },
};
</script>

<style scoped>
.cuadro {
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
</style>
