<template>
  <div>
    <div class="position-relative hero-section">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-custom shape-skew"></div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3 text-white">
                  {{ $t('banner_title') }}
                </h1>
                <p class="lead text-white">
                  {{ $t('banner_text') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>
