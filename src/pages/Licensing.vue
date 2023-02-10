<template>
  <b-container class="cuadro my-5">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="license in licences" :key="license.name">
        <template #img>
          <CardLicencing :lic="license" />
        </template>
      </b-carousel-slide>

      <!-- Custom previous button -->
      <template v-slot:prev-control>
        <b-button class="carousel-control-prev-icon" aria-hidden="true">
          <b-icon icon="chevron-left"></b-icon>
        </b-button>
      </template>

      <!-- Custom next button -->
      <template v-slot:next-control>
        <b-button class="carousel-control-next-icon" aria-hidden="true">
          <b-icon icon="chevron-right">holaaa</b-icon>
        </b-button>
      </template>
    </b-carousel>
  </b-container>
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
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
.cuadro {
  box-shadow: 10px 10px 20px rgba(199, 199, 199, 0.2),
    -10px -10px 20px rgba(199, 199, 199, 0.2),
    10px -10px 20px rgba(255, 255, 255, 0.9),
    -10px 10px 25px rgba(199, 199, 199, 0.9),
    inset -1px 1px 2px rgba(255, 255, 255, 0.3),
    inset 1px -1px 2px rgba(199, 199, 199, 0.5);
  border-radius: 8px;
}

.carousel-control-prev-icon {
  color: red;
}
</style>
