<template>
	<div class="btn-wrapper text-center">
		<a @click="loginWithFb" class="btn social-btn btn-icon mr-3 fb-text"
			><span class="btn-inner--icon"><i class="fa fa-facebook mr-2"></i></span
			><span class="btn-inner--text text-uppercase">{{ $t('facebook') }}</span></a
		><a @click="loginWithGoogle" class="btn social-btn btn-icon google-text"
			><span class="btn-inner--icon mr-2"><i class="fa fa-google"></i></span
			><span class="btn-inner--text text-uppercase">{{ $t('google') }}</span></a
		>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { loginRedirect } from '~/utils/loginRedirect';

export default Vue.extend({
	name: 'SocialLogin',
	methods: {
		async loginWithFb() {
			this.$accessor.toggleIsLoading();
			const loginCb = async (accessToken: string) => {
				await this.$auth.authWithFb(accessToken);
				this.$accessor.toggleIsLoading();
				loginRedirect(this);
			};

			return FB.getLoginStatus(async (response) => {
				if(!response.authResponse) this.$accessor.toggleIsLoading();
				if (response.status === 'connected') {
					await loginCb(response.authResponse.accessToken);
				} else {
					FB.login(async (response) => await loginCb(response.authResponse.accessToken));
				}
			});
		},
		async loginWithGoogle(evt: Event) {}
	}
});
</script>

<style lang="scss">
.social-btn {
	cursor: pointer;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	&:hover {
		box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
		transform: translateY(-1px);
	}
	&.fb-text {
		color: #0213ad !important;
	}
	&.google-text {
		color: #b60202 !important;
	}
}
</style>
