<template>
  <b-row class="cont-info p-5 m-3 mt-5">
    <b-col cols="12" md="6">
      <h1>
        <b>CALL US!</b>
      </h1>
    </b-col>

    <b-col cols="12" md="6">
      <b-row class="info mb-4">
        <h4>
          <b>Phone:</b> <br />
          714-363-0006
        </h4>
      </b-row>

      <b-row class="info">
        <h4>
          <b>Email:</b> <br />
          support@aztecataxsystems.com
        </h4>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "CardContact",
};
</script>

<style>
.cont-info {
  background: #f2b138;
  border-radius: 8px;
  align-items: center;
}

.info {
  text-align: left;
}
</style>
