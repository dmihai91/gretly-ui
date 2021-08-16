<template>
  <button
    type="button"
    class="navbar-toggler"
    data-toggle="collapse"
    @click="handleClick"
    :data-target="`#${target}`"
    :aria-controls="target"
    :aria-expanded="expanded"
    aria-label="Toggle navigation"
  >
    <span></span>
    <span></span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'CloseButton',
  props: {
    target: {
      type: [String, Number],
      description: 'Close button target element',
    },
    expanded: {
      type: Boolean,
      description: 'Whether button is expanded (aria-expanded attribute)',
    },
  },
  methods: {
    handleClick(evt: Event) {
      this.$emit('click', evt);
    },
  },
});
</script>

<style></style>
