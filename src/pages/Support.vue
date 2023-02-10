<template>
  <b-row class="center">
    <b-col cols="12" class="head-title">
      <h1>what do you need help with today?</h1>
      <h5 class="mt-4">
        We support you in every step through the process. <br />
      </h5>
    </b-col>

    <b-col cols="8">
      <b-row class="content-help mt-5">
        <b-col cols="5" class="my-5">
          <b-card title="Remote desktop assistance" class="cards">
            <b-card-text class="my-4">
              We can connect to your computer and help you with our software.
            </b-card-text>
            <b-button href="#" variant="primary">
              I need help with this
            </b-button>
          </b-card>
        </b-col>

        <b-col cols="5" class="my-5">
          <b-card title="Contact with our specialists" class="cards">
            <b-card-text class="my-4">
              You can comunicate with our specialists via Skype!
              <br />
              <br />
            </b-card-text>
            <b-button href="#" variant="primary">I need a specialist</b-button>
          </b-card>
        </b-col>
      </b-row>

      <hr class="mb-5 mt-5" />

      <b-row class="mt-5 mb-5">
        <h2>Remote desktop assistance</h2>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Support",
};
</script>

<style scoped>
.center {
  justify-content: center;
  align-content: stretch;
}
.head-title {
  padding: 7%;
  background-color: #010440;
  color: white;
}

.head-title h5 {
  font-weight: normal;
}
.content-help {
  justify-content: space-around;
}

.cards {
  border: 2px solid #f2b138;
  padding: 2%;
}
</style>
