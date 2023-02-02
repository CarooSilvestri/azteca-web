<template>
  <div>
    <!--   <TitlePage title="Software" /> -->
    <b-container>
      <b-tabs content-class="mt-3">
        <b-tab title="ATS 1040 Deskop" active
          ><p>
            ATS 1040 is the industry's leading tax software solution for
            high-volume tax businesses. Built based on the needs of busy tax
            offices that specialize in providing their taxpayer clients with
            fast and accurate tax returns, ATS 1040 has been a trusted software
            solution since 1989. With industry-leading tools such as
            Point-and-Shoot Error Correction™, exclusive TextLink™ integrated
            text messaging technology, and support for electronic signature pads
            and hand-held W-2 barcode scanners, ATS 1040 software users are able
            to process tax returns more quickly and accurately. b
          </p></b-tab
        >
        <b-tab title="ATS 1040 Online"><p>I'm the second tab</p></b-tab>
        <b-tab title="ATS Corporations"><p>I'm the second tab</p></b-tab>
        <b-tab title="ATS Partners"><p>I'm the second tab</p></b-tab>
      </b-tabs></b-container
    >
  </div>
</template>

<script>
export default {
  name: "Software",
  components: {
    /* TitlePage, */
  },
};
</script>

<style scoped>
.titulo {
  background: #010440;
  color: whitesmoke;
  padding: 2%;
  font-weight: bold;
  margin-bottom: 3%;
}
</style>
