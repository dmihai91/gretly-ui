<template>
	<div class="welcome" v-if="user">
		<h2>{{ $t('welcome', { appName: $t('app_name'), user: firstName }) }}!</h2>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'Welcome',
	computed: {
		user() {
			return this.$auth.user;
		},
		firstName() {
			return this.$auth.firstName;
		}
	}
});
</script>

<style lang="scss" scoped></style>
