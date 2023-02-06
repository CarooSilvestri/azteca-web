<template>
  <b-row class="footer">
    <b-col cols="1" class="txt-footer">
      <p><b>ATS Software</b></p>
      <p>ATS 1040 Desktop</p>
      <p>ATS 1040 Online</p>
      <p>ATS Corporations</p>
      <p>ATS Bookkeeping</p>
      <p>ATS Payroll</p>
    </b-col>

    <b-col cols="1" class="txt-footer">
      <p><b>Licensing</b></p>
      <p>CTEC</p>
      <p>PTIN</p>
      <p>OTRO</p>
      <p>OTRO</p>
    </b-col>

    <b-col cols="2" class="txt-footer">
      <p><b>Training</b></p>
      <p>ATS Online 20hrs Renewal Course</p>
      <p>ATS Classroom 20hrs Renewal Course</p>
      <p>ATS Online 60hrs Certification Course</p>
      <p>ATS Classroom 60hrs Certification Course</p>
    </b-col>

    <b-col cols="1" class="txt-footer">
      <p><b>Support</b></p>
      <p>TeamViewer</p>
      <p>Quick Assist</p>
      <p>LogMeIn</p>
    </b-col>

    <b-col cols="2" class="txt-footer">
      <p><b>Business Software</b></p>
      <p>ATS Online Backup</p>
      <p>ATS Antivirus</p>
      <p>ATS Office365</p>
      <p>ATS Remote Desktop</p>
    </b-col>

    <b-col cols="3">
      <b-row>
        <b-form @submit="onSubmit" style="padding: 0">
          <b-form-group
            id="input-group-1"
            label="SUSCRIBE TO OUR UPDATES!"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
            >
            </b-form-input>
          </b-form-group>
        </b-form>
        <b-button type="submit" variant="primary">Suscribe</b-button>
      </b-row>

      <b-row style="margin-top: 3%">
        <p><b>Follow us</b></p>
      </b-row>
    </b-col>

    <hr class="my-3" />

    <p class="copyright">
      Copyright © 2022 Azteca Tax Systems - All Rights Reserved an Azteca
      Technology Company -
      <router-link to="/terms_and_conditions">Terms & Conditions</router-link>
    </p>
    <p class="copyright">
      Desarrollado y diseñado por
      <a href="https://github.com/CarooSilvestri">Silvestri Web Designer</a>
    </p>
  </b-row>
</template>

<script>
export default {
  name: "ContactNavbar",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.email));
    },
  },
};
</script>

<style scoped>
.footer {
  background: #010440;
  color: whitesmoke;
  justify-content: center;
  padding: 2%;
}
.txt-footer {
  text-align: left;
  font-size: 12px;
}
.aligned {
  align-items: center;
}
.copyright {
  font-size: 10px;
}

.text-muted {
  color: red !important;
}

a {
  color: white;
}
</style>
