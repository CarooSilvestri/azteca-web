<template>
  <b-row class="contactNavbar">
    <b-col lg="3" sm="12" align-self="center">
      <b-row>
        <b-col cols="1">
          <b-icon-telephone-fill font-scale="1" />
        </b-col>
        <b-col cols="9" class="no-padding">
          <p class="call"><b>CALL</b> US! 714-363-0006</p>
        </b-col>
      </b-row>
    </b-col>

    <b-col lg="1" sm="5" align-self="center" class="justify-center">
      <b-row align-h="evenly">
        <b-col>
          <b-icon-facebook font-scale="1.5" />
        </b-col>
        <b-col>
          <b-icon-instagram font-scale="1.5" />
        </b-col>
        <b-col>
          <b-icon-twitter font-scale="1.5" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ContactNavbar",
  components: {},
};
</script>

<style scoped>
.contactNavbar {
  background: #125938;
  color: #f2b138;
  justify-content: space-around;
  padding-top: 0.75%;
  padding-bottom: 0.75%;
}

.call {
  text-align: left;
  margin: 0;
}

.no-padding {
  padding: 0;
}
</style>
