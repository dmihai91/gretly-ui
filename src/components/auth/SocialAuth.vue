<template>
  <div class="btn-wrapper text-center">
    <button class="fa fa-facebook" @click="signInWithFacebook"></button>
    <button class="fa fa-google" @click="signInWithGoogle"></button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Events } from '@/const/events';
import { eventBus } from '@/utils/eventBus';
import { ApiError } from '@supabase/supabase-js';

export default Vue.extend({
  name: 'SocialAuth',
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
    signInWithFacebook() {
      this.$auth
        .signInWithFacebook()
        .then(() => this.showWelcomeMessage())
        .catch((err: ApiError) => {
          eventBus.$emit(Events.GLOBAL_SHOW_ERROR, err.message);
        });
    },
    signInWithGoogle() {
      this.$auth
        .signInWithGoogle()
        // .then(() => this.showWelcomeMessage())
        .catch((err: ApiError) => {
          console.error(err);
          // eventBus.$emit(Events.GLOBAL_SHOW_ERROR, err.message);
        });
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
