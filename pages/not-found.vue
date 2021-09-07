<template>
  <div class="container d-flex align-content-center justify-content-center">
    <div class="row">
      <div class="col-md-4 text-center page-content d-flex justify-content-center align-content-center flex-column">
        <h1 class="title mb-4">Page not found</h1>
        <h4>Ooooups! Looks like you got lost.</h4>
        <NuxtLink class="text-uppercase mt-3" to="/">Go to homepage</NuxtLink>
      </div>
      <div class="col-md-8"><img src="img/404-illu.svg" class="mw-100" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  head() {
    return {
      titleTemplate: `${this.$t('app_name')} - Page not found`,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 4rem;
  margin-bottom: 4rem;
  min-height: 55vh;
  @media screen and (min-width: 1200px) {
    margin-top: 1rem;
    margin-bottom: auto;
  }
  justify-content: center;
  align-items: center;
  & .page-content {
    position: relative;
    top: 20px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  & .title {
    @media screen and (max-width: 992px) {
      font-size: 4em;
    }
    font-size: 5em;
    color: #172b4d;
    letter-spacing: 0.5px;
    font-weight: 700;
  }
}
</style>
