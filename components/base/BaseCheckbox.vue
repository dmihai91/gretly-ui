<template>
  <div class="custom-control custom-checkbox" :class="[{ disabled: disabled }, inlineClass]">
    <input :id="cbId" class="custom-control-input" type="checkbox" :disabled="disabled" v-model="model" />
    <label :for="cbId" class="custom-control-label">
      <slot>
        <span v-if="inline">&nbsp;</span>
      </slot>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { randomString } from '~/utils/stringUtils';

interface Model extends Vue {
  checked: boolean;
  touched: boolean;
  get(): boolean;
  set(check: boolean): void;
}

export default Vue.extend({
  name: 'BaseCheckbox',
  model: {
    prop: 'checked',
  },
  props: {
    checked: {
      type: [Array, Boolean],
      description: 'Whether checkbox is checked',
    },
    disabled: {
      type: Boolean,
      description: 'Whether checkbox is disabled',
    },
    inline: {
      type: Boolean,
      description: 'Whether checkbox is inline',
    },
  },
  data() {
    return {
      cbId: '',
      touched: false,
    };
  },
  computed: {
    model: {
      get() {
        return this.checked;
      },
      set(check: boolean) {
        if (!this.touched) {
          this.touched = true;
        }
        this.$emit('input', check);
      },
    } as Model,
    inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }
    },
  },
  mounted() {
    this.cbId = randomString();
  },
});
</script>
