<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    background="#010440"
    class="p-0"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide>
      <template #img>
        <img
          class="d-block img-fluid w-100"
          src="../assets/home/carousel/referencia1.jpg"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>

    <b-carousel-slide>
      <template #img>
        <img
          class="d-block img-fluid w-100"
          src="../assets/home/carousel/referencia2.jpg"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
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
.image-container {
  position: relative;
}

.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 2px black;
}
</style>
