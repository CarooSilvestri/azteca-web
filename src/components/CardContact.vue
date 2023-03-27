<template>
  <b-row class="cont-info p-2 p-md-5 m-md-3 mt-5">
    <b-col cols="12" md="5">
      <h1 class="titulo">
        <b>CALL US!</b>
      </h1>
    </b-col>

    <b-col cols="12" md="6">
      <b-row class="mb-4">
        <p class="contact-info mt-5 mt-md-0">
          <b>Phone:</b> <br />
          714-363-0006
        </p>
      </b-row>

      <b-row class="d-none d-md-flex">
        <p class="contact-info">
          <b>Email:</b> <br />
          support@aztecataxsystems.com
        </p>
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
  justify-content: space-between;
}

.titulo {
  font-size: 4em;
}
.cont-info {
  font-size: 1.5em;
}
</style>
