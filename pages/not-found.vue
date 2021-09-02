<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center page-content">
        <h1 class="title">404</h1>
        <p class="lead">Page not found :(</p>
        <h4 class="description text-default">Ooooups! Looks like you got lost.</h4>
      </div>
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
  mounted() {
    this.$accessor.setHeaderBackground('dark');
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 6rem;
  & .page-content {
    position: relative;
    top: 20px;
    margin-bottom: 10px;
  }
  & .title {
    font-size: 12em;
    color: #172b4d;
    letter-spacing: 14px;
    font-weight: 700;
  }
}
</style>
