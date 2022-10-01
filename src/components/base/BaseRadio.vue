<template>
  <div class="custom-control custom-radio" :class="[inlineClass, { disabled: disabled }]">
    <input :id="cbId" class="custom-control-input" type="radio" :disabled="disabled" :value="name" v-model="model" />
    <label :for="cbId" class="custom-control-label">
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { randomString } from '@/utils/stringUtils';

interface Model extends Vue {
  value: string | boolean;
  get(): this['value'];
  set(value: this['value']): void;
}

export default Vue.extend({
  name: 'BaseRadio',
  props: {
    name: {
      type: [String, Number],
      description: 'Radio label',
    },
    disabled: {
      type: Boolean,
      description: 'Whether radio is disabled',
    },
    value: {
      type: [String, Boolean],
      description: 'Radio value',
    },
    inline: {
      type: Boolean,
      description: 'Whether radio is inline',
    },
  },
  data() {
    return {
      cbId: '',
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value: string) {
        this.$emit('input', value);
      },
    } as Model,
    inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }
      return '';
    },
  },
  mounted() {
    this.cbId = randomString();
  },
});
</script>
