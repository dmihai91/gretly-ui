<template>
  <div>
    <div class="position-relative hero-section">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-custom shape-skew"></div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3 text-white">
                  Build professional progresive web apps or web site quickly and cut development costs by half.
                </h1>
                <h4 class="text-white my-3">
                  Gretly is a platform dedicated to developers, designers and startups for creating web apps and website
                  using the latest available technologies.
                </h4>
                <button class="btn btn-primary">Create youryirst project</button>
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
export default Vue.extend({
  middleware: ['auth'],
});
</script>
