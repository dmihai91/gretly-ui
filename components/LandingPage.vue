<template>
  <div class="position-relative hero-section page-container">
    <!-- shape Hero -->
    <section class="hero-section-content">
      <div class="container d-flex">
        <div class="col px-0">
          <div class="row">
            <div class="col-lg-7 py-5">
              <h1 class="display-3">
                {{ $t('banner_title') }}
              </h1>
              <p class="lead" v-html="$t('banner_text', { appName: $t('app_name') })"></p>
              <div class="btn-wrapper">
                <BaseButton
                  tag="a"
                  href="/register"
                  class="mb-5"
                  type="primary"
                  icon="fa fa-arrow-right"
                  :iconAfterText="true"
                >
                  {{ $t('get_started') }}
                </BaseButton>
              </div>
            </div>
            <div class="col-lg-5">
              <img src="img/landing-page-hero-section-illu.svg" style="max-width: 100%; margin-top: -10%" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main" style="min-height: 100px"></section>
  </div>
</template>
