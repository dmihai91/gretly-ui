<template>
  <div class="position-relative hero-section">
    <!-- shape Hero -->
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
              <div class="btn-wrapper">
                <BaseButton
                  tag="a"
                  href="/register"
                  class="mb-3 mb-sm-0"
                  type="primary"
                  icon="fa fa-arrow-right"
                  :iconAfterText="true"
                >
                  {{ $t('get_started') }}
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
