<template>
  <b-col>
    <b-row>
      <b-col cols="12" class="sectionTitle">
        <h1 class="title">
          <span class="orange">How can we help you today?</span>
        </h1>
        <h1>We support you in every step through the process.</h1>
      </b-col>
    </b-row>

    <b-row class="center">
      <b-col cols="11" md="8" class="content-help mt-5 mb-5">
        <h1>We offer remote desktop assistance!</h1>
        <h3 class="mt-4">
          Our specialists can connect to your computer and help you with our
          software.
        </h3>

        <b-button
          href=" https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe"
          variant="primary"
          size="lg"
          class="mt-5 mb-5"
        >
          Download Teamviewer
        </b-button>

        <card-contact />
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import CardContact from "../components/CardContact.vue";

export default {
  components: { CardContact },
  name: "Support",
};
</script>

<style scoped>
.center {
  justify-content: center;
  align-content: stretch;
}
.sectionTitle {
  padding: 10%;
  background-image: url(../assets/banners_sections/support.jpg);
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
.content-help {
  justify-content: space-around;
}

.cards {
  border: 2px solid #f2b138;
  padding: 2%;
}
</style>
