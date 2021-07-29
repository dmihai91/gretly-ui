<template>
  <div
    class="custom-control custom-radio"
    :class="[inlineClass, { disabled: disabled }]"
  >
    <input
      :id="cbId"
      v-model="model"
      class="custom-control-input"
      type="radio"
      :disabled="disabled"
      :value="name"
    >
    <label :for="cbId" class="custom-control-label">
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { randomString } from '~/utils/stringUtils';

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
      default: '',
    },
    disabled: {
      type: Boolean,
      description: 'Whether radio is disabled',
    },
    value: {
      type: [String, Boolean],
      description: 'Radio value',
      default: '',
    },
    inline: {
      type: Boolean,
      description: 'Whether radio is inline',
    },
  },
  data () {
    return {
      cbId: '',
    };
  },
  computed: {
    model: {
      get () {
        return this.value;
      },
      set (value: string) {
        this.$emit('input', value);
      },
    } as Model,
    inlineClass () {
      if (this.inline) {
        return 'form-check-inline';
      }
      return '';
    },
  },
  mounted () {
    this.cbId = randomString();
  },
});
</script>
