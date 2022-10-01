<template>
  <div class="container d-flex align-content-center justify-content-center page-container">
    <div class="row">
      <div class="col-md-5 text-center page-content d-flex justify-content-center align-content-center flex-column">
        <h1 class="title mb-4">Page not found</h1>
        <h4>Ooooups! Looks like the page you requested doesn't exist.</h4>
        <NuxtLink class="text-uppercase mt-3" to="/">Go to homepage</NuxtLink>
      </div>
      <div class="col-md-7"><img src="img/404-illu.svg" class="mw-100 illu" /></div>
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
  justify-content: center;
  align-items: center;
  & .page-content {
    position: relative;
    top: 20px;
    margin-bottom: 10px;
    overflow: hidden;
  }

  & .title {
    font-size: 4em;
    color: #172b4d;
    letter-spacing: 0.5px;
    font-weight: 700;
  }

  & .illu {
    min-width: 450px;

    @include media-breakpoint-up(md) {
      min-width: 550px;
    }
  }
}
</style>
