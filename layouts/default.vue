<template>
	<div>
		<app-header />
		<nuxt />
		<app-footer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/header/Header.vue';
import Footer from '~/components/Footer.vue';
import Subscribe from '~/components/Subscribe.vue';

export default Vue.extend({
	components: {
		'app-header': Header,
		'app-footer': Footer,
		Subscribe
	}
});
</script>
