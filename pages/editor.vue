<template>
  <div>
    <div class="position-relative hero-section page-container" v-if="!loggedIn">
      <!-- shape Hero -->
      <section class="hero-section-content">
        <div class="container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-7">
                <h1 class="display-3">
                  Build professional progresive web apps or web site quickly and cut development costs by half.
                </h1>
                <p class="lead">
                  Gretly is a platform dedicated to developers, designers and startups for creating web apps and website
                  using the latest available technologies.
                </p>
                <BaseButton tag="button" type="primary" class="my-3"
                  ><i class="fa fa-play mr-2"></i>Watch demo</BaseButton
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <template>
        <div class="container page-container">Editor here</div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  head() {
    return {
      titleTemplate: `${this.$t('app_name')} - Editor`,
    };
  },
  computed: {
    loggedIn() {
      return this.$auth ? this.$auth.loggedIn : false;
    },
  },
});
</script>

<style lang="scss" scoped></style>
