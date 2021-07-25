<template>
	<div
		class="tab-pane fade"
		:id="id || label"
		:class="{ 'active show': active }"
		v-show="active"
		:aria-expanded="active"
	>
		<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Tab } from '~/interfaces/Tab';
import { ProvidedProps } from './Tabs.vue';
import { injectProps } from '~/utils/injectProps';

const propsToBeInjected = ['addTab', 'removeTab'];

export default Vue.extend({
	name: 'tab-pane',
	props: {
		label: String,
		id: String,
		title: String
	},
	inject: propsToBeInjected,
	computed: {
		tab(): Tab {
			return {
				id: this.id,
				title: this.title,
				active: this.active
			};
		},
		injectedProps(): ProvidedProps {
			return injectProps(this, propsToBeInjected);
		}
	},
	data() {
		return {
			active: false
		};
	},
	mounted() {
		this.injectedProps.addTab(this.tab);
	},
	destroyed() {
		if (this.$el && this.$el.parentNode) {
			this.$el.parentNode.removeChild(this.$el);
		}
		this.injectedProps.removeTab(this.tab);
	}
});
</script>

<style></style>
