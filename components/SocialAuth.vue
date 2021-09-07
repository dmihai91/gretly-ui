<template>
  <div class="btn-wrapper text-center">
    <a @click="authWithFacebook" class="btn social-btn btn-icon mr-3 fb-text"
      ><span class="btn-inner--icon"><i class="fa fa-facebook mr-2"></i></span
      ><span class="btn-inner--text text-uppercase">{{ $t('facebook') }}</span></a
    ><GoogleLogin :params="params" :onSuccess="authWithGoogle" class="btn social-btn btn-icon google-text"
      ><span class="btn-inner--icon mr-2"><i class="fa fa-google"></i></span
      ><span class="btn-inner--text text-uppercase">{{ $t('google') }}</span>
    </GoogleLogin>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Events } from '~/const/events';
import { ApiError } from '~/utils/apiError';
import { ErrorReasons } from '~/enums/ErrorReasons';
import { eventBus } from '~/utils/eventBus';
import { loginRedirect } from '~/utils/loginRedirect';
import GoogleLogin from 'vue-google-login';
import { GoogleUser } from '~/utils/googleOAuth';

export default Vue.extend({
  name: 'SocialLogin',
  props: {
    action: {
      type: String,
      validator: (val: string) => ['sign_in', 'sign_up'].includes(val),
    },
  },
  components: {
    GoogleLogin,
  },
  data() {
    return {
      params: {
        clientId: process.env.GOOGLE_CLIENT_ID,
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  methods: {
    showWelcomeMessage() {
      setTimeout(
        () => eventBus.$emit(Events.GLOBAL_SHOW_SUCCESS, this.$t('welcome', { appName: this.$t('app_name') })),
        100
      );
    },
    successCallback() {
      loginRedirect(this);
      this.$nextTick(() => {
        this.showWelcomeMessage();
      });
    },
    errorCallback(err: ApiError) {
      const details = err.details;
      if (details && details.reason === ErrorReasons.USER_ALREADY_EXISTS) {
        eventBus.$emit(Events.GLOBAL_SHOW_ERROR, this.$t('user_from_social_already_exists'));
      }
      console.error(err);
      this.$accessor.setIsLoading(false);
    },
    async authWithFacebook(evt: Event) {
      if (typeof FB === 'undefined') {
        eventBus.$emit(Events.GLOBAL_SHOW_WARNING, this.$t('disable_adblocker'));
        return;
      }
      this.$emit(Events.AUTH_ACTION, evt);
      const authCb = async (accessToken: string) => {
        try {
          this.$accessor.setIsLoading(true);
          await this.$auth.authWithFb({ token: accessToken, action: this.action });
          this.successCallback();
        } catch (_err) {
          this.errorCallback(_err);
        }
      };
      return FB.getLoginStatus(async (response) => {
        try {
          if (!response.authResponse) this.$accessor.toggleIsLoading();
          if (response.status === 'connected') {
            await authCb(response.authResponse.accessToken);
          } else {
            FB.login(async (response) => await authCb(response.authResponse.accessToken));
          }
        } catch (_err) {
          const err: ApiError = _err;
          console.error(err);
          this.$accessor.setIsLoading(false);
        }
      });
    },
    async authWithGoogle(user: GoogleUser) {
      this.$emit(Events.AUTH_ACTION);
      try {
        this.$accessor.setIsLoading(true);
        await this.$auth.authWithGoogle({ token: user.getAuthResponse().access_token, action: this.action });
        this.successCallback();
      } catch (_err) {
        this.errorCallback(_err);
      }
    },
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
