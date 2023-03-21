<template>
  <b-row class="mb-5 mt-5 content">
    <b-col cols="12" md="4" class="p-5">
      <h2>Contact us</h2>
      <p class="mb-4">Our team is always avaliable to talk to you!</p>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group
          id="input-group-3"
          label="Why are you contacting us today?"
          label-for="input-3"
          class="form-style spacing-top mb-4"
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
          class="form-style mb-4"
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
          class="form-style mb-4"
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

        <b-form-group label="Message" label-for="message" class="mb-0">
          <b-form-textarea
            id="message"
            v-model="text1"
            placeholder="Enter your message"
            class="form-style mb-4"
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary"> Send </b-button>
      </b-form>
    </b-col>

    <b-col cols="12" md="4" class="col-info p-5">
      <h2 class="mb-3">Our contact information</h2>
      <p>
        <b>Phone:</b> <br />
        714-363-0006
      </p>

      <p>
        <b>Email:</b> <br />
        support@aztecataxsystems.com
      </p>

      <p>
        <b>Address:</b> <br />
        3111 N. Tustin St, Suite 235 Orange, CA 92865
      </p>

      <p>
        <strong>Business Hours:</strong> <br />
        <br />
        <b> In tax season (January - April)</b><br />
        Monday - Friday: 8 AM - 9 PM <br />
        Saturday & Sunday: 9 AM - 5 PM<br />
        <br />
        <b> Off tax season</b><br />
        Monday - Friday: 9 AM - 5 PM <br />
        Saturday & Sunday: CLOSED
      </p>

      <b-row class="mt-3">
        <b-col cols="3">
          <b-row style="justify-content: space-between">
            <p><strong>Follow us </strong></p>
            <b-col cols="2" class="content">
              <b-icon-facebook font-scale="1.5" />
            </b-col>
            <b-col cols="2" class="content">
              <b-icon-instagram font-scale="1.5" />
            </b-col>
            <b-col cols="2" class="content">
              <b-icon-twitter font-scale="1.5" />
            </b-col> </b-row
        ></b-col>
      </b-row>
    </b-col>
  </b-row>
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
.content {
  justify-content: space-around;
  text-align: left;
  border-top: 2px solid #f2b138;
  border-bottom: 2px solid #f2b138;
}

.col-info {
  background: #f2b138;
}

.form-style label {
  font-weight: bold;
}

.form-select {
  padding: 4%;
  border: none;
}

.button-send {
  background: green;
  color: white;
  align-self: right;
}
</style>
