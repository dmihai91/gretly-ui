<template>
  <header class="header-global">
    <BaseNav class="navbar-main" type="" :effect="headerBackground" expand>
      <Logo class="d-none d-lg-block" path="img/brand/blue.png" />
      <!-- mobile menu -->
      <div class="row" slot="content-header" slot-scope="slotProps">
        <div class="col-6 collapse-brand"><Logo path="img/brand/blue.png" /></div>
        <div class="col-6 collapse-close">
          <BaseCloseButton @click="slotProps.closeMenu"></BaseCloseButton>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <NuxtLink to="/learning" class="nav-link">{{ $t('learning') }}</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/apps-builder" class="nav-link">{{ $t('apps_builder') }}</NuxtLink>
        </li>
        <BaseDropdown tag="li" class="nav-item">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">{{ $t('resources') }}</span>
          </a>
          <li class="dropdown-item">
            <NuxtLink to="/blog" class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-info rounded-circle text-white">
                <i class="ni ni-planet"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">{{ $t('blog') }}</h6>
                <p class="description d-none d-md-inline-block mb-0">Read some cool articles about technology</p>
              </div>
            </NuxtLink>
          </li>
          <li class="dropdown-item">
            <NuxtLink to="/tutorials" class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-button-play"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">{{ $t('tutorials') }}</h6>
                <p class="description d-none d-md-inline-block mb-0">Learn to do some advanced programming stuff</p>
              </div>
            </NuxtLink>
          </li>
          <li class="dropdown-item">
            <NuxtLink to="/contact" class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                <i class="ni ni-square-pin"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">{{ $t('contact') }}</h6>
                <p>Do you have a suggestion for us?</p>
              </div>
            </NuxtLink>
          </li>
        </BaseDropdown>
        <li class="nav-item">
          <NuxtLink to="/pricing" class="nav-link">{{ $t('pricing') }}</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about" class="nav-link">{{ $t('about_us') }}</NuxtLink>
        </li>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto" v-if="!$auth?.loggedIn">
        <li class="nav-item mb-3 mb-md-0">
          <NuxtLink
            :to="`/login?redirectPath=${redirectPath}`"
            class="btn btn-outline-primary font-weight-bold col-sm-12"
            >{{ $t('sign_in') }}</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink to="/register" class="btn btn-primary font-weight-bold text-white col-sm-12">{{
            $t('get_started')
          }}</NuxtLink>
        </li>
      </ul>
      <ul class="navbar-nav align-items-center ml-lg-auto cursor-pointer" v-else>
        <li class="nav-item dropdown">
          <BaseDropdown class="nav-link pr-0">
            <template v-slot:title>
              <div class="media align-items-center" style="margin-bottom: 0">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" :src="user && user.profileImage" />
                </span>
                <div class="media-body ml-2 d-none d-lg-block">
                  <span class="mb-0 text-sm font-weight-bold">{{ user && user.name }}</span>
                </div>
              </div>
            </template>
            <NuxtLink to="/profile" class="dropdown-item">
              <span>My profile</span>
            </NuxtLink>
            <div class="dropdown-divider"></div>
            <BaseButton tag="a" type="link" @click="logout" class="dropdown-item text-capitalize">
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

type SlotProps = {
  closeMenu(event: Event): void;
};

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      slotProps: {} as SlotProps,
    };
  },
  computed: {
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
      this.$auth.signOut();
    },
  },
});
</script>

<style></style>
