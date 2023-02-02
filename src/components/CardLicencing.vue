<template>
  <b-row>
    <b-row class="cuadro">
      <b-col> </b-col>
      <b-col>
        {{ txt }}
        <p></p>
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
export default {
  name: "CardLicensing",
  components: {},
  props: {
    txt: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.cuadro {
  justify-content: center;
  align-items: center;
  gap: 120px;
  background: #f6f6f6;
  margin-bottom: 5%;
  box-shadow: 10px 10px 20px rgba(199, 199, 199, 0.2),
    -10px -10px 20px rgba(199, 199, 199, 0.2),
    10px -10px 20px rgba(255, 255, 255, 0.9),
    -10px 10px 25px rgba(199, 199, 199, 0.9),
    inset -1px 1px 2px rgba(255, 255, 255, 0.3),
    inset 1px -1px 2px rgba(199, 199, 199, 0.5);
  border-radius: 8px;
  padding: 2%;
}
</style>
