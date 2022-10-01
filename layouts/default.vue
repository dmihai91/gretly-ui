<template>
  <div>
    <Loader :active.sync="isLoading" :is-full-page="true" color="#5c00fa" />
    <div v-show="!isLoading">
      <AppHeader v-if="!isLoading" />
      <Nuxt />
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import { UnsubscribeToastsHandler, useToast } from '@/hooks/useToast';
import { eventBus } from '@/utils/eventBus';
import { Events } from '@/const/events';

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
  },
  watch: {
    $route(to, from) {
      this.setHeaderBackground('light');
      eventBus.$emit(Events.GLOBAL_CLOSE_MENU);
    },
  },
  async mounted() {
    this.unsubscribeToastsHandler = useToast(this);
    this.isLoading = false;
  },
  beforeDestroy() {
    // unsubscribe all toast handler events
    this.unsubscribeToastsHandler.unsubscribeAll();
  },
});
</script>
