<template>
  <div>
    <LandingPage v-if="!loggedIn" />
    <Dashboard v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      titleTemplate: `${this.$t('app_name')} - ${this.$t('global_title')}`,
    };
  },
  computed: {
    loggedIn() {
      return this.$auth ? this.$auth.loggedIn : false;
    },
  },
  watch: {
    loggedIn(val: boolean) {
      this.setHeaderBackground(!val ? 'light' : 'dark');
    },
  },
  mounted() {
    this.setHeaderBackground(!this.loggedIn ? 'light' : 'dark');
  },
});
</script>
