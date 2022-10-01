<template>
  <div class="btn-wrapper text-center"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Events } from '@/const/events';
import { eventBus } from '@/utils/eventBus';

export default Vue.extend({
  name: 'SocialAuth',
  props: {
    action: {
      type: String,
      validator: (val: string) => ['sign_in', 'sign_up'].includes(val),
    },
  },
  data() {
    return {};
  },
  methods: {
    showWelcomeMessage() {
      setTimeout(
        () => eventBus.$emit(Events.GLOBAL_SHOW_SUCCESS, this.$t('welcome', { appName: this.$t('app_name') })),
        100
      );
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
