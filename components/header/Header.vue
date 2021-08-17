<template>
  <header class="header-global">
    <BaseNav class="navbar-main" transparent type="" effect="light" expand>
      <NuxtLink slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/white.png" alt="logo" />
      </NuxtLink>
      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
            <img src="img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <BaseCloseButton @click="closeMenu"></BaseCloseButton>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <NuxtLink to="/courses" class="nav-link d-lg-none">{{ $t('courses') }}</NuxtLink>
          <NuxtLink to="/courses" class="d-none nav-link d-lg-block">{{ $t('courses') }}</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/editor" class="nav-link d-lg-none">{{ $t('code_playground') }}</NuxtLink>
          <NuxtLink to="/editor" class="d-none nav-link d-lg-block">{{ $t('code_playground') }}</NuxtLink>
        </li>

        <BaseDropdown tag="li" class="nav-item" menu-classes="dropdown-menu-xl">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">{{ $t('resources') }}</span>
          </a>
          <div class="dropdown-menu-inner">
            <a
              href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
              class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Tutorials</h6>
                <p class="description d-none d-md-inline-block mb-0">
                  Get started with Bootstrap, the world's most popular framework for building responsive sites.
                </p>
              </div>
            </a>
            <a
              href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
              class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                <i class="ni ni-ui-04"></i>
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">Blog</h5>
                <p class="description d-none d-md-inline-block mb-0">
                  Learn how to use Argon compiling Scss, change brand colors and more.
                </p>
              </div>
            </a>
            <a
              href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
              class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">{{ $t('books') }}</h6>
                <p class="description d-none d-md-inline-block mb-0">
                  Get started with Bootstrap, the world's most popular framework for building responsive sites.
                </p>
              </div>
            </a>
          </div>
        </BaseDropdown>

        <li class="nav-item">
          <NuxtLink to="/contact" class="nav-link d-lg-none">{{ $t('contact_us') }}</NuxtLink>
          <NuxtLink to="/contact" class="d-none nav-link d-lg-block">{{ $t('contact_us') }}</NuxtLink>
        </li>

        <li class="nav-item">
          <NuxtLink to="/about" class="nav-link d-lg-none">{{ $t('about_us') }}</NuxtLink>
          <NuxtLink to="/about" class="d-none nav-link d-lg-block">{{ $t('about_us') }}</NuxtLink>
        </li>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto" v-if="!loggedIn">
        <li class="nav-item">
          <NuxtLink to="/login" class="nav-link d-lg-none font-weight-bold">{{ $t('sign_in') }}</NuxtLink>
          <NuxtLink to="/login" class="d-none btn btn-secondary text-dark nav-link d-lg-block font-weight-bold">{{
            $t('sign_in')
          }}</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/register" class="nav-link d-lg-none font-weight-bold">{{ $t('get_started') }}</NuxtLink>
          <NuxtLink to="/register" class="d-none btn btn-primary nav-link d-lg-block font-weight-bold">{{
            $t('get_started')
          }}</NuxtLink>
        </li>
      </ul>
    </BaseNav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  computed: {
    loggedIn() {
      return this.$auth ? this.$auth.loggedIn : false;
    },
  },
});
</script>

<style></style>
