<template>
  <footer class="footer has-cards">
    <div class="container py-4">
      <div class="content">
        <div class="row">
          <div class="col-12 col-md-3 my-3">
            <Logo path="img/brand/blue.png" />
            <p class="my-3 font-weight-normal">{{ $t('footer_upper_text') }}</p>
          </div>
          <div class="col-4 col-md-3">
            <div class="column">
              <h4 class="mt-3">Company</h4>
              <ul>
                <li>
                  <NuxtLink to="/about"> {{ $t('about_us') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact"> {{ $t('contact') }} </NuxtLink>
                </li>
                <li><NuxtLink to="/cariers"> Cariers </NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="col-4 col-md-3">
            <div class="column">
              <h4 class="mt-3">Product</h4>
              <ul>
                <li>
                  <NuxtLink to="/apps-builder"> {{ $t('apps_builder') }} </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/marketplace">{{ $t('marketplace') }} </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/pricing"> {{ $t('pricing') }} </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-4 col-md-3">
            <div class="column">
              <h4 class="mt-3">Resources</h4>
              <ul>
                <li>
                  <NuxtLink to="/blog"> {{ $t('blog') }} </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/tutorials"> {{ $t('tutorials') }} </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <Subscribe class="my-4 col-md-6" />
        </div>
        <div class="row justify-content-center">
          <SocialButtons />
        </div>
        <hr />
        <div class="row">
          <div class="col-md-9">
            <div class="column">
              <nav>
                <ul class="d-flex flex">
                  <li class="d-inline-flex mr-5">
                    <div class="copyright">
                      <p>
                        &copy; {{ year }} <span v-html="$t('footer_bottom_text')"></span>
                        <NuxtLink to="/about" target="_blank" rel="noopener"
                          >{{ $t('app_name') }} {{ $t('team') }} </NuxtLink
                        ><br />
                        <span class="all-rights-reserved-text">{{ $t('all_rights_reserved') }}</span>
                      </p>
                    </div>
                  </li>
                  <li class="d-inline-flex mr-5">
                    <NuxtLink to="/terms-and-conditions"> {{ $t('terms_and_conditions') }}</NuxtLink>
                  </li>
                  <li class="d-inline-flex mr-5">
                    <NuxtLink to="/privacy-policy"> {{ $t('privacy_policy') }} </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Subscribe from '~/components/Subscribe.vue';
import SocialButtons from '~/components/SocialButtons.vue';

export default Vue.extend({
  name: 'Footer',
  components: {
    Subscribe,
    SocialButtons,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
});
</script>

<style lang="scss" scoped>
.all-rights-reserved-text {
  @include media-breakpoint-up(lg) {
    margin-left: 4rem;
  }
}
</style>
