<template>
	<div id="app" class="main">
		<loading :active.sync="isLoading" :is-full-page="true" color="#0e5b45" />
		<Nuxt v-show="!isLoading" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	computed: {
		isLoading() {
			return this.$accessor.isLoading;
		}
	}
});
</script>
