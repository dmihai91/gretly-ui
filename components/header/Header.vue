<template>
  <header class="header-global">
    <BaseNav class="navbar-main" type="" :effect="headerBackground" expand>
      <Logo class="d-none d-lg-block" path="img/brand/blue.png" />
      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <Logo path="img/brand/white.png" />
        </div>
        <div class="col-6 collapse-close">
          <BaseCloseButton @click="closeMenu"></BaseCloseButton>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <NuxtLink to="/courses" class="nav-link d-lg-none">{{ $t('courses') }}</NuxtLink>
          <NuxtLink to="/courses" class="d-none nav-link d-lg-block text-dark">{{ $t('courses') }}</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/editor" class="nav-link d-lg-none text-dark">{{ $t('code_playground') }}</NuxtLink>
          <NuxtLink to="/editor" class="d-none nav-link d-lg-block text-dark">{{ $t('code_playground') }}</NuxtLink>
        </li>

        <BaseDropdown tag="li" class="nav-item" menu-classes="dropdown-menu-xl">
          <a slot="title" href="#" class="nav-link text-dark" data-toggle="dropdown" role="button">
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">{{ $t('resources') }}</span>
          </a>
          <div class="dropdown-menu-inner">
            <NuxtLink to="/tutorials" class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-button-play"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Tutorials</h6>
                <p class="description d-none d-md-inline-block mb-0">Find some tutorials</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/books" class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
                <i class="ni ni-books"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">{{ $t('books') }}</h6>
                <p class="description d-none d-md-inline-block mb-0">Find some books to read</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/contact" class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                <i class="ni ni-square-pin"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">{{ $t('contact') }}</h6>
                <p>Do you have a suggestion for us?</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/about" class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-info rounded-circle text-white">
                <i class="ni ni-planet"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">{{ $t('about_us') }}</h6>
                <p class="description d-none d-md-inline-block mb-0">More informations about the platform</p>
              </div>
            </NuxtLink>
          </div>
        </BaseDropdown>

        <li class="nav-item">
          <NuxtLink to="/blog" class="nav-link d-lg-none text-dark">{{ $t('blog') }}</NuxtLink>
          <NuxtLink to="/blog" class="d-none nav-link d-lg-block text-dark">{{ $t('blog') }}</NuxtLink>
        </li>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto" v-if="!loggedIn">
        <li class="nav-item">
          <NuxtLink
            :to="`/login?redirectPath=${redirectPath}`"
            class="nav-link d-lg-none font-weight-bold text-uppercase"
            >{{ $t('sign_in') }}</NuxtLink
          >
          <NuxtLink
            :to="`/login?redirectPath=${redirectPath}`"
            class="d-none btn btn-secondary text-dark nav-link d-lg-block font-weight-bold not-change"
            >{{ $t('sign_in') }}</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink to="/register" class="nav-link d-lg-none font-weight-bold text-uppercase">{{
            $t('sign_up')
          }}</NuxtLink>
          <NuxtLink to="/register" class="d-none btn btn-primary nav-link d-lg-block font-weight-bold text-white">{{
            $t('sign_up')
          }}</NuxtLink>
        </li>
      </ul>
      <ul class="navbar-nav align-items-center ml-lg-auto cursor-pointer" v-else>
        <li class="nav-item dropdown">
          <BaseDropdown class="nav-link pr-0">
            <template v-slot:title>
              <div class="media align-items-center" style="margin-bottom: 0">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" :src="user && user.profilePicture" />
                </span>
                <div class="media-body ml-2 d-none d-lg-block">
                  <span class="mb-0 text-sm font-weight-bold">{{ user && user.name }}</span>
                </div>
              </div>
            </template>
            <NuxtLink to="/profile" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>My profile</span>
            </NuxtLink>
            <NuxtLink to="/profile" class="dropdown-item">
              <i class="ni ni-settings-gear-65"></i>
              <span>Settings</span>
            </NuxtLink>
            <NuxtLink to="/profile" class="dropdown-item">
              <i class="ni ni-calendar-grid-58"></i>
              <span>Activity</span>
            </NuxtLink>
            <NuxtLink to="/profile" class="dropdown-item">
              <i class="ni ni-support-16"></i>
              <span>Support</span>
            </NuxtLink>
            <div class="dropdown-divider"></div>
            <BaseButton tag="a" type="link" @click="logout" class="dropdown-item text-capitalize">
              <i class="ni ni-user-run"></i>
              <span>Logout</span>
            </BaseButton>
          </BaseDropdown>
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
    user() {
      return this.$auth ? this.$auth.user : null;
    },
    redirectPath() {
      return this.$route.path;
    },
    headerBackground() {
      return this.$accessor.headerBackground;
    },
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
});
</script>

<style></style>
