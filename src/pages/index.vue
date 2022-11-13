<template>
  <div>
    <Landing v-show="!$auth?.loggedIn" />
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
});
</script>
