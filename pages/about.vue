<template>
  <PageContent
    title="About"
    headerTitle="About Gretly"
    headerBanner="Our mission is to help developers and people passionate about technology to learn and build beautiful web and mobile apps fast using
        the latest web technologies and easily share their work to the world."
    gradient="third"
  >
    <section class="section">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">Our amazing Team</h2>
            <p class="lead text-muted">
              We are small team of passionate web developer based in Bucharest, Romania who wants to create beautiful
              and useful things for the community.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-1-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Ryan Tompson</span>
                  <small class="h6 text-muted">Web Developer</small>
                </h5>
                <div class="mt-3">
                  <BaseButton tag="a" href="#" type="warning" icon="fa fa-twitter" rounded icon-only></BaseButton>
                  <BaseButton tag="a" href="#" type="warning" icon="fa fa-facebook" rounded icon-only></BaseButton>
                  <BaseButton tag="a" href="#" type="warning" icon="fa fa-dribbble" rounded icon-only></BaseButton>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-2-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Romina Hadid</span>
                  <small class="h6 text-muted">Marketing Strategist</small>
                </h5>
                <div class="mt-3">
                  <BaseButton tag="a" href="#" type="primary" icon="fa fa-twitter" rounded icon-only></BaseButton>
                  <BaseButton tag="a" href="#" type="primary" icon="fa fa-facebook" rounded icon-only></BaseButton>
                  <BaseButton tag="a" href="#" type="primary" icon="fa fa-dribbble" rounded icon-only></BaseButton>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-3-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Alexander Smith</span>
                  <small class="h6 text-muted">UI/UX Designer</small>
                </h5>
                <div class="mt-3">
                  <BaseButton tag="a" href="#" type="info" icon="fa fa-twitter" rounded icon-only></BaseButton>
                  <BaseButton tag="a" href="#" type="info" icon="fa fa-facebook" rounded icon-only></BaseButton>
                  <BaseButton tag="a" href="#" type="info" icon="fa fa-dribbble" rounded icon-only></BaseButton>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-4-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">John Doe</span>
                  <small class="h6 text-muted">Founder and CEO</small>
                </h5>
                <div class="mt-3">
                  <BaseButton tag="a" href="#" type="success" icon="fa fa-twitter" rounded icon-only></BaseButton>
                  <BaseButton tag="a" href="#" type="success" icon="fa fa-facebook" rounded icon-only></BaseButton>
                  <BaseButton tag="a" href="#" type="success" icon="fa fa-dribbble" rounded icon-only></BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-0">
      <div class="container">
        <BaseCard gradient="warning" no-body shadow-size="lg" class="border-0">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 class="text-white">We made website building easier for you.</h3>
                <p class="lead text-white mt-3">
                  I will be the leader of a company that ends up being worth billions of dollars, because I got the
                  answers. I understand culture.
                </p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <BaseButton
                  tag="a"
                  href="https://www.creative-tim.com/product/vue-argon-design-system"
                  type="white"
                  block
                  size="lg"
                >
                  Download Vue
                </BaseButton>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </section>
  </PageContent>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
