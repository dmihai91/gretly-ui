<template>
	<div class="newsletter-subscribe my-md">
		<h5 class="mb-3">Join our newsletter</h5>
		<input type="email" placeholder="Enter your email" v-model="email" />
		<a class="btn btn-warning mx-3" @click="joinNewsletter">Join</a>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'Subscribe',
	data() {
		return {
			email: null
		};
	},
	methods: {
		joinNewsletter() {}
	}
});
</script>

<style lang="scss" scoped>
.newsletter-subscribe {
	margin: 20px 0;

	input {
		padding: 9px;
	}

	a.btn {
		padding: 12px 20px;
		color: #fff;
	}
}
</style>
