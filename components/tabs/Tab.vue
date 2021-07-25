<template>
	<div class="tab-pane" v-show="active" :id="id || title" :class="{ active: active }">
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
		title: {
			type: String,
			default: '',
			description: 'Tab pane title'
		},
		id: {
			type: String,
			default: null,
			description: 'Tab pane id'
		}
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
