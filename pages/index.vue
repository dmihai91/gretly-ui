<template>
  <div class="position-relative landing-page">
    <div class="hero-section-container">
      <div class="hero-section">
        <!-- shape Hero -->
        <section class="hero-section-content">
          <div class="container d-flex">
            <div class="col px-0">
              <div class="row">
                <div class="col-lg-7 my-auto">
                  <h1 class="display-3 text-white">
                    {{ $t('banner_title') }}
                  </h1>
                  <p class="lead text-white" v-html="$t('banner_text', { appName: $t('app_name') })"></p>
                  <BaseButton
                    tag="a"
                    href="/register"
                    class="my-3"
                    type="primary"
                    icon="fa fa-arrow-right"
                    :iconAfterText="true"
                  >
                    {{ $t('get_started') }}
                  </BaseButton>
                </div>
                <div class="col-lg-5">
                  <!-- illustration here !-->
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <section class="section section-lg pt-lg-0 mt--50">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <BaseCard class="border-0" hover shadow body-classes="py-5">
                  <BaseIcon name="ni ni-check-bold" type="primary" rounded class="mb-4"> </BaseIcon>
                  <h6 class="text-primary text-uppercase">Download Argon</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that includes the most important components
                    and features.
                  </p>
                  <div>
                    <BaseBadge type="primary" rounded>design</BaseBadge>
                    <BaseBadge type="primary" rounded>system</BaseBadge>
                    <BaseBadge type="primary" rounded>creative</BaseBadge>
                  </div>
                  <BaseButton tag="a" href="#" type="primary" class="mt-4"> Learn more </BaseButton>
                </BaseCard>
              </div>
              <div class="col-lg-4">
                <BaseCard class="border-0" hover shadow body-classes="py-5">
                  <BaseIcon name="ni ni-istanbul" type="success" rounded class="mb-4"> </BaseIcon>
                  <h6 class="text-success text-uppercase">Build Something</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that includes the most important components
                    and features.
                  </p>
                  <div>
                    <BaseBadge type="success" rounded>business</BaseBadge>
                    <BaseBadge type="success" rounded>vision</BaseBadge>
                    <BaseBadge type="success" rounded>success</BaseBadge>
                  </div>
                  <BaseButton tag="a" href="#" type="success" class="mt-4"> Learn more </BaseButton>
                </BaseCard>
              </div>
              <div class="col-lg-4">
                <BaseCard class="border-0" hover shadow body-classes="py-5">
                  <BaseIcon name="ni ni-planet" type="warning" rounded class="mb-4"> </BaseIcon>
                  <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that includes the most important components
                    and features.
                  </p>
                  <div>
                    <BaseBadge type="warning" rounded>marketing</BaseBadge>
                    <BaseBadge type="warning" rounded>product</BaseBadge>
                    <BaseBadge type="warning" rounded>launch</BaseBadge>
                  </div>
                  <BaseButton tag="a" href="#" type="warning" class="mt-4"> Learn more </BaseButton>
                </BaseCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg mt--100">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="img/theme/promo-1.png" class="img-fluid floating" />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <BaseIcon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="success" shadow rounded></BaseIcon>
              <h3>Awesome features</h3>
              <p>
                The kit comes with three pre-built pages to help you get started faster. You can change the text and
                images and you're good to go.
              </p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <BaseBadge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></BaseBadge>
                    <h6 class="mb-0">Carefully crafted components</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <BaseBadge type="success" circle class="mr-3" icon="ni ni-html5"></BaseBadge>
                    <h6 class="mb-0">Amazing page examples</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <BaseBadge type="success" circle class="mr-3" icon="ni ni-satisfied"></BaseBadge>
                    <h6 class="mb-0">Super friendly support team</h6>
                  </div>
                </li>
              </ul>
            </div>
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
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="svg-bg">
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
                Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable
                them first via JavaScript.
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
    <section class="section section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <img src="img/ill/ill-2.svg" class="img-center img-fluid" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="d-flex px-3">
              <div>
                <BaseIcon
                  name="ni ni-building"
                  size="lg"
                  class="bg-gradient-white"
                  color="primary"
                  shadow
                  rounded
                ></BaseIcon>
              </div>
              <div class="pl-4">
                <h4 class="display-3 text-white">Modern Interface</h4>
                <p class="text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that
                  process will continue whatever happens.
                </p>
              </div>
            </div>
            <BaseCard shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <BaseIcon name="ni ni-satisfied" gradient="success" color="white" shadow rounded></BaseIcon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-success">Awesome Support</h5>
                  <p>
                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that
                    process will continue whatever happens.
                  </p>
                  <a href="#" class="text-success">Learn more</a>
                </div>
              </div>
            </BaseCard>
            <BaseCard shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <BaseIcon name="ni ni-active-40" gradient="warning" color="white" shadow rounded></BaseIcon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">Modular Components</h5>
                  <p>
                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that
                    process will continue whatever happens.
                  </p>
                  <a href="#" class="text-warning">Learn more</a>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>
    <section class="main" style="min-height: 100px"></section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      titleTemplate: `${this.$t('app_name')} - ${this.$t('global_title')}`,
    };
  },
});
</script>
