<template>
  <ForgetPasswordForm />
</template>

<script lang="ts">
import Vue from 'vue';
import { LayoutType } from '~/enums/LayoutType';
export default Vue.extend({
  layout: LayoutType.SIMPLE,
  head() {
    return {
      titleTemplate: `${this.$t('app_name')} - ${this.$t('reset_password')}`,
    };
  },
});
</script>
