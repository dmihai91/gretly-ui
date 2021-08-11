<template>
	<nav
		class="navbar"
		:class="[
			{ 'navbar-transparent': transparent },
			{ 'navbar-expand-lg': expand },
			{ [`navbar-${effect}`]: effect },
			{ 'navbar-semi-transparent': semiTransparent },
			{ [`bg-${type}`]: type },
			{ rounded: round }
		]"
	>
		<div class="container">
			<slot name="container-pre"></slot>
			<slot name="brand">
				<a class="navbar-brand" href="#" @click.prevent="onTitleClick">
					{{ title }}
				</a>
			</slot>
			<navbar-toggle-button :toggled="toggled" :target="contentId" @click.native.stop="toggled = !toggled">
			</navbar-toggle-button>

			<slot name="container-after"></slot>

			<div class="collapse navbar-collapse" :class="{ show: toggled }" :id="contentId" v-click-outside="closeMenu">
				<div class="navbar-collapse-header">
					<slot name="content-header" :close-menu="closeMenu"></slot>
				</div>
				<slot :close-menu="closeMenu"></slot>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { FadeTransition } from 'vue2-transitions';
import NavbarToggleButton from './NavbarToggleButton.vue';

export default Vue.extend({
	name: 'BaseNav',
	components: {
		FadeTransition,
		NavbarToggleButton
	},
	props: {
		type: {
			type: String,
			default: 'primary',
			description: 'Navbar type (e.g default, primary etc)'
		},
		title: {
			type: String,
			default: '',
			description: 'Title of navbar'
		},
		contentId: {
			type: [String, Number],
			default: Math.random().toString(),
			description: "Explicit id for the menu. By default it's a generated random number"
		},
		effect: {
			type: String,
			default: 'dark',
			description: 'Effect of the navbar (light|dark)'
		},
		round: {
			type: Boolean,
			default: false,
			description: 'Whether nav has rounded corners'
		},
		transparent: {
			type: Boolean,
			default: false,
			description: 'Whether navbar is semi transparent'
		},
		expand: {
			type: Boolean,
			default: false,
			description: 'Whether navbar should contain `navbar-expand-lg` class'
		}
	},
	data() {
		return {
			toggled: false,
			semiTransparent: false,
		};
	},
	mounted() {
		window.addEventListener('scroll', () => {
			if(window.scrollY > 400) {
				setTimeout(() => this.semiTransparent = true, 100);
			} else {
				setTimeout(() => this.semiTransparent = false, 100);
			}
		});
	},
	methods: {
		onTitleClick(evt: Event) {
			this.$emit('title-click', evt);
		},
		closeMenu() {
			this.toggled = false;
		}
	}
});
</script>

<style></style>
