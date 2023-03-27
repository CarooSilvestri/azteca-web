<template>
  <b-col class="mb-5 mt-5">
    <b-row class="content">
      <b-col cols="12" md="6" class="p-4 p-lg-5">
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

          <b-form-group
            label="Message"
            label-for="message"
            class="mb-0 form-style mb-4"
          >
            <b-form-textarea
              id="message"
              v-model="text"
              placeholder="Enter your message"
              class="area"
            ></b-form-textarea>
          </b-form-group>

          <div class="right">
            <b-button class="btn button-send" type="submit"> Send </b-button>
          </div>
        </b-form>
      </b-col>

      <b-col cols="12" md="6" class="col-info p-5">
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
          2525 N. Grand Avenue, Suite H Santa Ana, CA 92705
        </p>

        <p>
          <strong>Business Hours:</strong> <br />
          <br />
          <b> In tax season (January - April)</b><br />
          Monday - Friday: 8 AM - 9 PM <br />
          Saturday & Sunday: 9 AM - 5 PM<br />
          <br />
          <b> Off tax season</b><br />
          Monday - Friday: 9 AM - 6 PM <br />
          Saturday & Sunday: CLOSED
        </p>

        <b-row class="mt-3">
          <b-col cols="6" md="3">
            <b-row style="justify-content: space-between">
              <p><strong>Follow us </strong></p>
              <b-col cols="2" class="content">
                <a href="https://www.facebook.com/aztecataxsystems/">
                  <b-icon-facebook font-scale="1.5" />
                </a>
              </b-col>
              <b-col cols="2" class="content">
                <a href="https://www.instagram.com/aztecataxsystems/">
                  <b-icon-instagram font-scale="1.5" />
                </a>
              </b-col>
              <b-col cols="2" class="content">
                <a href="https://twitter.com/aztecataxes">
                  <b-icon-twitter font-scale="1.5" />
                </a>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" md="12" class="p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8505288353285!2d-117.83470528442113!3d33.84196513622873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd994524df2ad%3A0x8bd589fa55348c9c!2sAzteca%20Tax%20Systems!5e0!3m2!1ses!2sar!4v1679419561350!5m2!1ses!2sar"
          width="100%"
          height="500px"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </b-col>
    </b-row>
  </b-col>
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
        text: "",
      },
      motives: [
        { text: "Select One", value: null },
        "General Inquiry",
        "ATS Tax Software Demo",
        "Tax Consulting",
        "Business Software",
        "Cyber Security",
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
.content {
  justify-content: space-around;
  text-align: left;
  border-top: 2px solid #f2b138;
  border-bottom: 2px solid #f2b138;
}

.content a {
  color: #2c3e50;
  text-decoration: none;
}

.col-info {
  background: #f2b138;
}

.form-style label {
  font-weight: bold;
  font-size: 14pt;
}

.form-select {
  padding: 4%;
  border: none;
}

.area {
  height: 1 50px;
}
.right {
  text-align: right;
}

.button-send {
  background-color: #125938 !important;
  font-size: 1.5em !important;
  text-align: left;
  width: fit-content;
}
</style>
