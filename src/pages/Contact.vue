<template>
  <b-container class="mb-5 mt-5">
    <b-row class="justify">
      <b-col cols="12" md="5" class="col-form col-common">
        <h2>Contact us</h2>
        <p>Our team is always avaliable to talk to you!</p>
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group
            id="input-group-3"
            label="Why are you contacting us today?"
            label-for="input-3"
            class="form-style spacing-top spacing-bottom"
          >
            <b-form-select
              id="input-3"
              v-model="form.motive"
              :options="motives"
              required
              class="form-select"
            />
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Name"
            label-for="input-2"
            class="form-style spacing-bottom"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Email"
            label-for="input-1"
            class="form-style spacing-bottom"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            label="Textarea with formatter (on input)"
            label-for="textarea-formatter"
            class="mb-0"
          >
            <b-form-textarea
              id="textarea-formatter"
              v-model="text1"
              placeholder="Enter your text"
            ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary" class="spacing-top"
            >Submit</b-button
          >
        </b-form>
      </b-col>

      <b-col cols="12" md="6" class="col-info">
        <GmapMap
          :center="{ lat: 10, lng: 10 }"
          :zoom="7"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
          />
        </GmapMap>
      </b-col>
    </b-row>

    <b-row class="spacing-top justify">
      <h3 class="spacing-bottom">Our contact information</h3>
      <b-col cols="3" class="card-info">
        <p>
          <b>Phone:</b> <br />
          714-363-0006
        </p>
      </b-col>

      <b-col cols="4" class="card-info">
        <p>
          <b>Email:</b> <br />
          support@aztecataxsystems.com
        </p>
      </b-col>

      <b-col cols="3" class="card-info">
        <p>
          <b>Address:</b> <br />
          2525 N. Grand Avenue, Suite H Santa Ana, CA 92705
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  name: "Contact",
  data() {
    return {
      form: {
        email: "",
        name: "",
        motive: null,
        checked: [],
        text: "",
      },
      motives: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },

  computed: {
    google: gmapApi,
  },
};
</script>

<style>
p {
  margin-bottom: 0;
}
.justify {
  justify-content: space-between;
}

.col-common {
  padding: 4%;
  text-align: left;
}

.spacing-bottom {
  margin-bottom: 5%;
}

.spacing-top {
  margin-top: 5%;
}

.col-form {
}

.form-style label {
  font-weight: bold;
}

.form-select {
  padding: 4%;
  border: none;
}

.card-info {
  border-radius: 15px;
  border: 2px solid #f2b138;
  align-content: center;
  padding: 2%;
  align-self: center;
}
</style>
