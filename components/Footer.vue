<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-4">
        <div class="col-lg-8">
          <Logo path="img/brand/blue.png" />
          <h4 class="mt-2 mb-0 font-weight-light xl-mw-50 lh-2">
            {{ $t('footer_upper_text') }}
          </h4>
        </div>
        <div class="col-lg-4 text-lg-center btn-wrapper">
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/creativetim"
            class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Like us"
          >
            <i class="fa fa-facebook-square"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/creativetim"
            class="btn btn-neutral btn-icon-only btn-instagram btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Like us"
          >
            <i class="fa fa-instagram"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://twitter.com/creativetim"
            class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <i class="fa fa-twitter"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/creativetim"
            class="btn btn-neutral btn-icon-only btn-pinterest btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Like us"
          >
            <i class="fa fa-pinterest"></i>
          </a>
        </div>
      </div>
      <Subscribe />
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            <span v-html="$t('footer_bottom_text')"></span>
            <NuxtLink to="/" target="_blank" rel="noopener">{{ $t('app_name') }}</NuxtLink
            ><br />
            <div style="height: 5px"></div>
            {{ $t('all_rights_reserved') }} &copy; {{ year }}
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link">{{ $t('home') }}</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/editor" class="nav-link">{{ $t('code_playground') }}</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/blog" class="nav-link">{{ $t('blog') }}</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link">{{ $t('contact') }}</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" class="nav-link">{{ $t('about_us') }}</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/privacy-policy" class="nav-link">{{ $t('privacy_policy') }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Subscribe from '~/components/Subscribe.vue';

export default Vue.extend({
  name: 'Footer',
  components: {
    Subscribe,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
});
</script>

<style></style>
