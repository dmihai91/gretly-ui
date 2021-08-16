<template>
  <div id="app" class="main">
    <Loader :active.sync="isLoading" :is-full-page="true" color="#5c00fa" />
    <Nuxt v-show="!isLoading" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { eventBus } from '~/utils/eventBus';
export default Vue.extend({
  computed: {
    isLoading() {
      return this.$accessor.isLoading;
    },
  },
  mounted() {
    eventBus.$on('global:show-error-toast', () =>
      this.$toasted.error(this.$t('server_error_message').toString(), {
        className: 'error-toast',
        action: {
          text: '',
          icon: 'fa-close',
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          },
        },
      })
    );
  },
});
</script>

<style lang="scss">
.toasted-container {
  @include media-breakpoint-up(md) {
    top: 0 !important;
    right: 10px !important;
  }
}

.error-toast {
  background: $danger !important;
  @include media-breakpoint-up(md) {
    min-width: 18vw !important;
  }
  a.action {
    i {
      color: #fff;
      font-size: 1.2rem;
    }
  }
}
</style>
