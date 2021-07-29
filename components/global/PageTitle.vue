<template>
  <div class="section-heading section-gap">
    <div class="bg-after" />
    <div class="text-center section-title-content">
      <div class="container">
        <h1 class="mb-3 text-white">
          {{ headerTitle }}
        </h1>
        <p class="lead text-white">
          {{ headerSubTitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PageTitle',
  props: {
    headerTitle: {
      type: String,
    },
    headerSubTitle: {
      type: String,
    },
  },
});
</script>
