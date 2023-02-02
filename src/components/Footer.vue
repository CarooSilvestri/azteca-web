<template>
  <b-container fluid class="footer">
    <b-row>
      <b-col>
        <b-row>
          <b>Contact info</b>
        </b-row>
        <b-row style="text-align: left">
          <b> Address:</b>
          <p>
            2525 N. Grand Ave, Suite H
            <br />
            Santa Ana, CA 92705
          </p>
        </b-row>
        <b-row>
          <b> Contact information</b>
          <p>
            714-363-0006
            <br />
            sales@aztecataxsystems.com
          </p>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b>Contact info</b>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b>Contact info</b>
        </b-row>
      </b-col>
      <p class="copyright">
        Copyright © 2022 Azteca Tax Systems - All Rights Reserved an Azteca
        Technology Company - Terms & Conditions
      </p>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ContactNavbar",
  components: {},
};
</script>

<style scoped>
.footer {
  background: #010440;
  color: #f2b138;
}

.copyright {
  font-size: 12px;
}
</style>
