<template>
  <div class="btn-wrapper text-center">
    <a
      class="btn social-btn btn-icon mr-3 fb-text"
      @click="loginWithFb"
    ><span class="btn-inner--icon"><i class="fa fa-facebook mr-2" /></span><span class="btn-inner--text text-uppercase">{{ $t('facebook') }}</span></a><a
      class="btn social-btn btn-icon google-text"
      @click="loginWithGoogle"
    ><span class="btn-inner--icon mr-2"><i class="fa fa-google" /></span><span class="btn-inner--text text-uppercase">{{ $t('google') }}</span></a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { loginRedirect } from '~/utils/loginRedirect';

export default Vue.extend({
  name: 'SocialLogin',
  methods: {
    async loginWithFb () {
      this.$accessor.toggleIsLoading();
      const loginCb = async (accessToken: string) => {
        await this.$auth.authWithFb(accessToken);
        this.$accessor.toggleIsLoading();
        return loginRedirect(this);
      };

      return await FB.getLoginStatus(async (response) => {
        if (response.status === 'connected') {
          await loginCb(response.authResponse.accessToken);
        } else {
          FB.login(async response => await loginCb(response.authResponse.accessToken));
        }
      });
    },
    async loginWithGoogle (_evt: Event) {},
  },
});
</script>

<style lang="scss">
.social-btn {
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
  &.fb-text {
    color: #0213ad !important;
  }
  &.google-text {
    color: #b60202 !important;
  }
}
</style>
