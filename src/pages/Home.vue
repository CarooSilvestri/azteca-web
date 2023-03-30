<template>
  <b-col class="p-0">
    <b-row class="p-0 m-0">
      <carousel />
    </b-row>

    <b-row class="m-0 p-0">
      <h1 style="font-size: 50pt" class="my-5"><strong>Our offer</strong></h1>
    </b-row>

    <b-row class="m-0 p-0">
      <b-col cols="12" class="image-container" id="bg1">
        <b-row class="image-text">
          <b-col cols="6">
            <h1>INDUSTRY LEADING SOFTWARE FOR VOLUME TAX BUSINESSES</h1>
            <h3 class="mb-4">WINDOWS COMPATIBLE!</h3>
            <p class="bullet">• Fast, easy and efficient</p>
            <p class="bullet">• In-depth calculations</p>
            <p class="bullet">• Bank products</p>
            <p class="bullet">• 1040 & Corp forms</p>
            <p class="bullet">• Comprehensive deprecation capabilities</p>
            <p class="bullet">• Paperless Solutions</p>

            <b-button size="lg" variant="primary" class="mt-3 mb-5">
              ATS Software
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="m-0 p-0">
      <b-col cols="12" class="image-container" id="bg2">
        <b-row class="image-text">
          <b-col cols="6">
            <h1>TAKING YOUR CAREER FURTHERS</h1>
            <h3 class="mb-4">
              Azteca Tax Systems's Training Center offers convenient Tax
              Preparation Courses that will help you master your annual return.
              Our Tax preparer certification can lead you to a new career!
            </h3>
            <p class="bullet">
              • Become a Certified Tax Professional within of 6 weeks
            </p>
            <p class="bullet">• 20 Hours of continuing education</p>
            <p class="bullet">
              • Morning and Evening classes with flexible schedule
            </p>
            <p class="bullet">
              • Hands on training (ATS Proprietary Tax Software)
            </p>
            <p class="bullet">• Comprehensive deprecation capabilities</p>
            <p class="bullet">• Classes available in English & Spanish</p>
            <b-button size="lg" variant="primary" class="mt-3">
              ATS Tax Training
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="m-0 p-0">
      <b-col cols="12" class="image-container" id="bg3">
        <b-row class="image-text">
          <b-col cols="6">
            <h1>DON’T FACE YOUR AUDIT ALONE</h1>
            <h4 class="mb-4">
              We sensitively guide you through the procedure and explain exactly
              what you need to know and what to do.
            </h4>
            <p class="bullet">
              • Evaluation and drafting of IRS correspondance as needed
            </p>
            <p class="bullet">
              • Assistance with communication with IRS during audit
            </p>
            <p class="bullet">
              • Explanation of claim requirements and available options
            </p>
            <p class="bullet">
              • Help with IRS forms including Schedules A, C, and E
            </p>
            <p class="bullet">
              • Assitance with denied credits when tax return is unfundeds
            </p>
            <b-button size="lg" variant="primary" class="mt-3 mb-5">
              Auditions Solutions
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="m-0 p-0 my-5 just">
      <b-col cols="8">
        <card-contact />
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import CardContact from "../components/CardContact.vue";
import Carousel from "../components/Carousel.vue";
export default {
  name: "Home",
  components: { Carousel, CardContact },
};
</script>

<style>
#bg1 {
  background-image: url("../assets/home/banner1.jpg");
}

#bg2 {
  background-image: url("../assets/home/banner2.jpg");
}

#bg3 {
  background-image: url("../assets/home/banner3.jpg");
}

.image-container {
  padding: 0;
  background-size: 100%;
  background-repeat: no-repeat;
  align-self: space-between;
}

.image-text {
  color: white;
  text-align: left;

  padding: 3% 7% 0% 7%;
  left: 5%;
}

.bullet {
  font-size: medium;
}

.just {
  justify-content: center;
}
</style>
