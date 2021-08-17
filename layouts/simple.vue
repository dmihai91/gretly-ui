<template>
  <div id="app" class="main">
    <Loader :active.sync="isLoading" :is-full-page="true" color="#5c00fa" />
    <Nuxt v-show="!isLoading" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { UnsubscribeToastsHandler, useToast } from '~/utils/useToast';

export default Vue.extend({
  data() {
    return {
      unsubscribeToastsHandler: null as UnsubscribeToastsHandler,
    };
  },
  computed: {
    isLoading() {
      return this.$accessor.isLoading;
    },
  },
  mounted() {
    this.unsubscribeToastsHandler = useToast(this);
  },
  beforeDestroy() {
    // unsubscribe all toast handler events
    this.unsubscribeToastsHandler.unsubscribeAll();
  },
});
</script>

<style lang="scss"></style>
