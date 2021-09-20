<template>
  <component :is="heading" class="font-weight-bold"><slot></slot></component>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Title',
  props: {
    title: String,
    heading: {
      type: String,
      default: 'h1',
      validator: (val) => ['h1', 'h2'].includes(val),
    },
  },
});
</script>
