<template>
  <footer class="footer has-cards">
    <div class="container py-3">
      <div class="content">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="column my-3">
              <Logo path="img/brand/blue.png" />
              <p class="my-3 font-weight-normal">{{ $t('footer_upper_text') }}</p>
            </div>
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
                <li>
                  <NuxtLink to="/privacy-policy"> {{ $t('privacy_policy') }} </NuxtLink>
                </li>
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
        <div class="row justify-content-center mt-3">
          <SocialButtons />
        </div>
        <hr />
        <div class="row footer-bottom-offset">
          <div class="col-12">
            <div class="column">
              <nav>
                <ul class="d-flex justify-content-md-center">
                  <li class="d-inline-flex">
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
import SocialButtons from '@/components/SocialButtons.vue';

export default Vue.extend({
  name: 'Footer',
  components: {
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
  text-align: center;
}

.footer-bottom-offset {
  margin-bottom: -3rem;
}
</style>
