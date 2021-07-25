<template>
	<label class="custom-toggle">
		<input type="checkbox" v-model="model" v-bind="$attrs" v-on="$listeners" />
		<span class="custom-toggle-slider rounded-circle"></span>
	</label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'base-switch',
	inheritAttrs: false,
	props: {
		value: {
			type: Boolean,
			default: false,
			description: 'Switch value'
		}
	},
	computed: {
		model: {
			get(): boolean {
				return this.value;
			},
			set(value: boolean) {
				this.$emit('input', value);
			}
		}
	}
});
</script>

<style></style>
