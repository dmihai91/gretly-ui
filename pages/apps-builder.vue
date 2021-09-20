<template>
  <div>
    <div v-show="!loggedIn">
      <div class="position-relative apps-builder">
        <div class="hero-section-container">
          <div class="hero-section">
            <!-- shape Hero -->
            <section class="hero-section-content">
              <div class="container d-flex">
                <div class="col px-0">
                  <div class="row">
                    <div class="col-lg-7 my-auto">
                      <h1 class="display-3 text-white">Best editor in town</h1>
                      <p class="lead text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                      </p>
                      <BaseButton
                        tag="a"
                        href="/register"
                        class="my-3"
                        type="primary"
                        icon="fa fa-arrow-right"
                        :iconAfterText="true"
                      >
                        Try it for free
                      </BaseButton>
                    </div>
                    <div class="offset-lg-1 col-lg-4"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section class="section section-lg my-5">
          <div class="container">
            <div class="row justify-content-center text-center mb-lg">
              <div class="col-lg-8">
                <h2 class="display-3">Build fast and go to live</h2>
                <p class="lead text-muted">
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist,
                  puts the potentially record maximum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="section bg-secondary">
          <div class="container">
            <div class="row row-grid align-items-center">
              <div class="col-md-6">
                <div class="card bg-default shadow border-0">
                  <img v-lazy="'img/theme/img-1-1200x1000.jpg'" class="card-img-top" />
                  <blockquote class="card-blockquote">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      class="svg-bg"
                    >
                      <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                      <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                    </svg>
                    <h4 class="display-3 font-weight-bold text-white">Design System</h4>
                    <p class="lead text-italic text-white">
                      The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that
                      process will continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
              <div class="col-md-6">
                <div class="pl-md-5">
                  <BaseIcon name="ni ni-settings" class="mb-5" size="lg" type="warning" shadow rounded></BaseIcon>

                  <h3>Our customers</h3>
                  <p class="lead">
                    Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you
                    enable them first via JavaScript.
                  </p>
                  <p>
                    The kit comes with three pre-built pages to help you get started faster. You can change the text and
                    images and you're good to go.
                  </p>
                  <p>
                    The kit comes with three pre-built pages to help you get started faster. You can change the text and
                    images and you're good to go.
                  </p>
                  <a href="#" class="font-weight-bold text-warning mt-5">A beautiful UI Kit for impactful websites</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section section-lg">
          <div class="container">
            <div class="row row-grid justify-content-center">
              <div class="col-lg-8 text-center">
                <h2 class="display-3">
                  Do you love this awesome
                  <span class="text-success">Design System for Bootstrap 4?</span>
                </h2>
                <p class="lead">
                  Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you
                  can find the Design System in HTML. Start a new project or give an old Bootstrap project a new look!
                </p>
                <div class="btn-wrapper">
                  <a
                    href="https://www.creative-tim.com/product/vue-argon-design-system"
                    class="btn btn-primary mb-3 mb-sm-0"
                    >Download Vue</a
                  >
                </div>
                <div class="text-center">
                  <h4 class="display-4 mb-5 mt-5">Available on these technologies</h4>
                  <div class="row justify-content-center">
                    <div class="col-lg-2 col-4">
                      <a
                        href="https://getbootstrap.com/"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="Bootstrap 4 - Most popular front-end component library"
                      >
                        <img
                          v-lazy="
                            'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg'
                          "
                          class="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="col-lg-2 col-4">
                      <a
                        href="https://www.sketchapp.com/"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="[Coming Soon] Sketch - Digital design toolkit"
                      >
                        <img
                          v-lazy="
                            'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg'
                          "
                          class="img-fluid opacity-5"
                        />
                      </a>
                    </div>
                    <div class="col-lg-2 col-4">
                      <a
                        href="https://www.adobe.com/products/photoshop.html"
                        data-toggle="tooltip"
                        data-original-title="[Coming Soon] Adobe Photoshop - Software for digital images manipulation"
                      >
                        <img
                          v-lazy="
                            'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg'
                          "
                          class="img-fluid opacity-5"
                        />
                      </a>
                    </div>
                    <div class="col-lg-2 col-4">
                      <a
                        href="https://vuejs.org/"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="Vue.js - The progressive javascript framework"
                      >
                        <img
                          v-lazy="
                            'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg'
                          "
                          class="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="col-lg-2 col-4">
                      <a
                        href="https://angularjs.org/"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="[Coming Soon] Angular - One framework. Mobile &amp; desktop"
                      >
                        <img
                          v-lazy="
                            'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg'
                          "
                          class="img-fluid opacity-5"
                        />
                      </a>
                    </div>
                    <div class="col-lg-2 col-4">
                      <a
                        href="https://reactjs.org/"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="[Coming Soon] React - A JavaScript library for building user interfaces"
                      >
                        <img
                          v-lazy="
                            'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg'
                          "
                          class="img-fluid opacity-5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div v-if="loggedIn">
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
      titleTemplate: `${this.$t('app_name')} - ${this.$t('apps_builder')}`,
    };
  },
});
</script>

<style lang="scss" scoped></style>
