<template>
  <div>
    <Loader :active.sync="isLoading" :is-full-page="true" color="#5c00fa" />
    <div v-if="!isLoading">
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
import { UnsubscribeToastsHandler, useToast } from '~/utils/hooks/useToast';
import { SessionService } from '~/services/SessionService';
import { handleUserAuth } from '~/utils/hooks/handleUserAuth';

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
    await handleUserAuth(this);
    this.isLoading = false;
  },
  beforeDestroy() {
    // unsubscribe all toast handler events
    this.unsubscribeToastsHandler.unsubscribeAll();
  },
});
</script>
