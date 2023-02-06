<template>
  <b-container class="mb-5 mt-5">
    <b-row class="justify">
      <b-col cols="12" md="6" class="col-form col-common">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-3"
            label="Why are you contacting us today?"
            label-for="input-3"
            class="form-style spacing"
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
            class="spacing form-style"
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
            class="spacing form-style"
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

          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>

      <b-col cols="12" md="5" class="col-info">
        <b-row>
          <p>Follow us!</p>
        </b-row>
        <b-row>
          <p>Our contact information</p>
          Phone: 714-363-0006 ‍ Email: support@aztecataxsystems.com ‍ Address:
          2525 N. Grand Avenue, Suite H Santa Ana, CA 92705
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        email: "",
        name: "",
        motive: null,
        checked: [],
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
};
</script>

<style>
.justify {
  justify-content: space-between;
}
.col-common {
  padding: 4%;
}

.col-form {
}

.col-info {
  border-radius: 15px;
  background-color: #f2b138;
}

.form-style {
  margin-bottom: 5%;
}

.form-style label {
  font-weight: bold;
  text-align: left;
}

.form-select {
  padding: 4%;
  border: none;
}

.spacing {
}
</style>
