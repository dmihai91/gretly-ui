<template>
  <div class="full-form-wrapper">
    <div class="d-none d-lg-block d-xl-block col-lg-4 col-xl-3 side-banner">
      <div class="header">
        <div class="logo my-4">
          <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
            <img src="img/brand/white.png" alt="logo">
          </router-link>
        </div>
        <div class="d-flex">
          <h3 class="slogan" v-html="slogan" />
        </div>
      </div>
      <div
        class="artwork"
        :style="{
          backgroundImage: `url(${ilustrationPath})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }"
        aria-label="login-illustration"
      />
    </div>

    <div class="form-content">
      <div class="container form-container">
        <div class="mx-auto my-md-3">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AuthForm',
  props: {
    slogan: String,
    ilustrationPath: String,
  },
});
</script>

<style lang="scss" scoped>
// login and register forms
.full-form-wrapper {
  display: flex;
  height: 100%;
  min-height: 100vh;
  flex: 1;

  .artwork {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  // login and register forms
  .side-banner {
    flex: 1;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background: #a0daa9;
    padding: 3rem;

    @include media-breakpoint-up(lg) {
      padding: 5rem;
    }

    .header {
      position: relative;
      top: auto;
    }
  }

  .slogan {
    color: $white;
    line-height: 3.5rem;
  }

  .form-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: auto;
  }

  .form-container {
    height: auto;
    max-width: $max-form-width;
    margin: auto;

    @include media-breakpoint-down(md) {
      padding: 0;
    }

    .card {
      min-width: 350px;
    }
  }
}

.divider {
  height: 14px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.divider span {
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  padding: 0 8px;
  background: $muted-gray;
}
</style>
