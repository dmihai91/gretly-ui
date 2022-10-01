<template>
  <component :is="tag" class="badge" :class="[`badge-${type}`, rounded ? `badge-pill` : '', circle && 'badge-circle']">
    <slot>
      <i v-if="icon" :class="icon"></i>
    </slot>
  </component>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Badge',
  props: {
    tag: {
      type: String,
      default: 'span',
      description: 'Html tag to use for the badge.',
    },
    rounded: {
      type: Boolean,
      default: false,
      description: 'Whether badge is of pill type',
    },
    circle: {
      type: Boolean,
      default: false,
      description: 'Whether badge is circle',
    },
    icon: {
      type: String,
      default: '',
      description: 'Icon name. Will be overwritten by slot if slot is used',
    },
    type: {
      type: String,
      default: 'default',
      validator: (type: string) => ['primary', 'info', 'danger', 'default', 'warning', 'success'].includes(type),
      description: 'Badge type (primary|info|danger|default|warning|success)',
    },
  },
});
</script>

<style></style>
