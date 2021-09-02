<template>
  <NuxtLink slot="brand" class="navbar-brand mr-lg-5" to="/">
    <img :src="path" alt="logo" />
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Logo',
  props: {
    path: {
      type: String,
    },
  },
});
</script>
