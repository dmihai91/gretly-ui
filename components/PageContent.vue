<template>
  <div class="page">
    <div class="page-header d-flex text-center my-auto">
      <div class="container">
        <div class="my-4 text-center px-5">
          <h1 class="title font-weight-bold px-3 text-uppercase">{{ headerTitle }}</h1>
          <h5 class="mt-4 lh-2 page-header-banner">{{ headerBanner }}</h5>
        </div>
      </div>
    </div>
    <div class="container page-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PageTitle',
  props: {
    headerTitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: function () {
        return this.headerTitle;
      },
    },
    headerBanner: {
      type: String,
    },
  },
  head() {
    return {
      titleTemplate: `${this.$t('app_name')} - ${this.title}`,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-header {
  background: rgb(240, 231, 255);
  padding: 130px 0 50px 0;
}

.page-content {
  padding: 3rem;
}

.page-header-banner {
  @include media-breakpoint-up(lg) {
    padding: 0 10rem;
  }
}
</style>
