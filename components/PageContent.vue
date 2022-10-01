<template>
  <div class="page">
    <div class="page-header d-flex text-center my-auto" :class="`${[gradient]}-gradient`">
      <div class="my-4 text-center px-5">
        <h1 class="title font-weight-bold px-3 text-uppercase">{{ headerTitle }}</h1>
        <h5 class="mt-4 lh-2 page-header-banner">{{ headerBanner }}</h5>
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
      default() {
        return this.headerTitle;
      },
    },
    headerBanner: {
      type: String,
    },
    gradient: {
      type: String,
      validator(val: string) {
        return ['default', 'second', 'third'].includes(val);
      },
      default() {
        return 'default';
      },
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
  display: flex;
  padding: 130px 0 50px 0;
  height: 450px;
  justify-content: center;
  align-items: center;

  &.default-gradient {
    background: rgb(220, 218, 255);
    background: linear-gradient(
      90deg,
      rgba(220, 218, 255, 1) 0%,
      rgba(229, 193, 255, 1) 31%,
      rgba(192, 228, 255, 1) 100%
    );
  }

  &.second-gradient {
    background: rgb(193, 219, 255);
    background: linear-gradient(
      90deg,
      rgba(193, 219, 255, 1) 0%,
      rgba(192, 228, 255, 1) 31%,
      rgba(218, 254, 255, 1) 100%
    );
  }

  &.third-gradient {
    background: rgb(235, 255, 218);
    background: linear-gradient(
      90deg,
      rgba(235, 255, 218, 1) 0%,
      rgba(193, 255, 198, 1) 31%,
      rgba(255, 251, 192, 1) 100%
    );
  }
}

.page-content {
  padding: 2rem;
}

.page-header-banner {
  @include media-breakpoint-up(lg) {
    padding: 0 10rem;
  }
}
</style>
