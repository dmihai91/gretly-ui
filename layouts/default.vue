<template>
  <div>
    <Loader :active.sync="isLoading" :is-full-page="true" color="#5c00fa" />
    <div v-show="!isLoading">
      <AppHeader />
      <Nuxt />
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/header/Header.vue';
import Footer from '~/components/Footer.vue';
import { UnsubscribeToastsHandler, useToast } from '~/utils/useToast';
import { SessionService } from '~/services/SessionService';
import { eventBus } from '~/utils/eventBus';
import { Events } from '~/const/events';

export default Vue.extend({
  data() {
    return {
      isLoading: false,
      unsubscribeToastsHandler: null as UnsubscribeToastsHandler,
    };
  },
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  },
  created() {
    this.isLoading = true;
    SessionService.loadSession();
  },
  async mounted() {
    this.unsubscribeToastsHandler = useToast(this);

    eventBus.$on(Events.GLOBAL_REFRESH_TOKEN, () => {
      this.$auth.refreshToken();
      console.log('inside refresh token');
    });

    // refresh the token if user already logged in from old session
    try {
      if (!this.$auth.accessToken) {
        await this.$auth.refreshToken();
        await this.$auth.fetchUserData();
        if (!this.$auth.user.verified) {
          eventBus.$emit(Events.GLOBAL_SHOW_WARNING, this.$t('verify_email_address'));
        }
      }
    } catch (err) {}

    this.isLoading = false;
  },
  beforeDestroy() {
    // unsubscribe all toast handler events
    this.unsubscribeToastsHandler.unsubscribeAll();
  },
});
</script>
