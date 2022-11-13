<template>
  <div class="full-form-wrapper">
    <div class="d-none d-lg-block col-lg-4 side-banner">
      <div class="header">
        <div class="logo my-3">
          <Logo path="img/brand/blue.png" />
        </div>
        <div class="d-flex">
          <p class="slogan text-primary lead font-weight-normal" v-html="slogan"></p>
        </div>
      </div>
      <div class="illustration" :style="illustrationStyle" aria-label="auth-form-illustration"></div>
    </div>

    <div class="form-content">
      <div class="container form-container">
        <div class="mx-auto my-4">
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
    illustrationPath: {
      type: String,
      default: '/img/signin-illu.svg',
    },
  },
  data() {
    return {
      illustrationStyle: {
        backgroundImage: `url(${this.illustrationPath})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }
    }
  }
});
</script>

<style lang="scss" scoped>
// login and register forms
.full-form-wrapper {
  display: flex;
  height: 100%;
  min-height: 100vh;
  flex: 1;

  .form-container {
    height: auto;
    max-width: $max-form-width;
    margin: auto;
    align-items: center;

    @include media-breakpoint-down(md) {
      padding: 0;
    }

    .card {
      min-width: 350px;
    }
  }

  // login and register forms
  .side-banner {
    flex: 1;
    max-width: 350px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background: rgb(242, 219, 255);
    background: linear-gradient(153deg,
        rgba(242, 219, 255, 1) 0%,
        rgba(239, 208, 255, 1) 55%,
        rgb(158, 93, 248) 100%);
    padding: 2.5rem;

    @include media-breakpoint-up(xl) {
      padding: 3.5rem;
      max-width: 500px;
    }

    .header {
      position: relative;
      top: auto;
    }

    .illustration {
      position: relative;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      max-height: 350px;
      margin-top: 2.5rem;
    }
  }

  .slogan {
    color: $white;
    line-height: 2.8rem;
  }

  .form-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: auto;
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
