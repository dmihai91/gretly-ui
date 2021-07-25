<template>
	<!-- Sign In Form -->
	<auth-form :slogan="$t('login_slogan')" ilustration-path="images/login-illustration.jpg">
		<div class="text-center mb-3">
			<h2>{{ $t('sign_in_label') }}</h2>
		</div>
		<div class="card bg-secondary shadow border-0">
			<div class="card-header bg-white pb-4">
				<div class="text-muted text-center mb-3">
					<h6>{{ $t('sign_in_with') }}</h6>
				</div>
				<SocialLogin />
			</div>

			<div class="card-body px-lg-5 py-lg-4">
				<div class="text-center text-muted mb-3">
					<div class="divider">
						<span>{{ $t('or') }}</span>
					</div>
				</div>

				<form role="form" id="login-form" class="mt-4 px-4" @submit.prevent="submitForm">
					<!-- username or email field -->
					<div class="form-group mb-3">
						<label for="inputUsername">{{ $t('username_or_email') }}</label>
						<input
							name="inputUsername"
							type="text"
							class="form-control"
							v-model="form.username"
							:class="{ 'is-valid': isValidUsername, 'is-invalid': usernameValidationField.$dirty && !isValidUsername }"
							@input="delayTouch(usernameValidationField)"
						/>
						<div class="error" v-if="usernameValidationField.$invalid">
							<span v-if="usernameValidationField.$dirty && !usernameValidationField.required">
								<form-input-error>{{ $t('messages.please_enter_username_or_email') }}</form-input-error>
							</span>
							<span v-else-if="usernameValidationField.$dirty && !usernameValidationField.valid">
								<form-input-error>{{ $t('messages.invalid_username_or_email') }}</form-input-error>
							</span>
						</div>
					</div>

					<!-- password field -->
					<div class="form-group">
						<label for="inputPassword">{{ $t('password') }}</label>
						<input
							name="inputPassword"
							type="password"
							class="form-control"
							v-model="form.password"
							:class="{ 'is-valid': isValidPassword, 'is-invalid': passwordValidationField.$dirty && !isValidPassword }"
							@input="delayTouch(passwordValidationField)"
						/>
						<div class="error" v-if="passwordValidationField.$invalid">
							<span v-if="passwordValidationField.$dirty && !passwordValidationField.required">
								<form-input-error>{{ $t('messages.please_enter_password') }}</form-input-error>
							</span>
						</div>
					</div>
					<div class="form-group d-flex justify-content-between">
						<div class="custom-control custom-control-alternative custom-checkbox">
							<input id="remember-me" type="checkbox" class="custom-control-input" />
							<label for="remember-me" class="custom-control-label">
								<span>{{ $t('remember_me') }}</span>
							</label>
						</div>
						<div class="forgot-password">
							<a class="font-bold text-sm align-right" href="#">{{ $t('forgot_password') }}</a>
						</div>
					</div>
					<div class="text-center">
						<button type="submit" class="btn btn-primary px-5 mt-3">
							{{ $t('sign_in') }}
						</button>
					</div>
					<hr class="mt-6" />
					<div class="flex justify-center">
						<span>
							{{ $t('not_registered_yet') }}
							<a class="link" @click="showRegister">{{ $t('join_us') }}</a>
						</span>
					</div>
				</form>
			</div>
		</div>
	</auth-form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { IValidator } from 'vuelidate';
import { required, or, email } from 'vuelidate/lib/validators';

import { LoginInfo } from '~/interfaces/LoginInfo';
import { delayTouch } from '~/utils/helpers';
import { Validations } from '~/utils/validations';
import { usernameValidator } from '~/utils/validators';

import AuthForm from '~/components/AuthForm.vue';
import SocialLogin from '~/components/SocialLogin.vue';

const formData: LoginInfo = {
	username: '',
	password: '',
	rememberMe: false
};

@Component({
	components: {
		SocialLogin,
		AuthForm
	},
	layout: 'simple'
})
export default class Login extends Vue {
	// data
	form = {
		...formData
	};
	isBusy = false;

	// validations
	@Validations({
		form: {
			username: {
				required,
				valid: or(usernameValidator, email)
			},
			password: {
				required
			}
		}
	})

	// computed props
	get usernameValidationField() {
		return this.$v.form.username;
	}

	get passwordValidationField() {
		return this.$v.form.password;
	}

	get isValidUsername() {
		return this.$v.form.username.$dirty && !this.$v.form.username.$invalid;
	}

	get isValidPassword() {
		return this.$v.form.password.$dirty && !this.$v.form.password.$invalid;
	}

	// methods
	delayTouch($v: IValidator) {
		return delayTouch($v);
	}

	submitForm(evt: Event) {
		this.$auth.login(this.form);
		this.$v.$touch();
	}

	resetForm() {
		this.form = {
			...formData
		};
		this.$nextTick(() => this.$v.$reset());
	}

	showRegister() {
		this.$router.push('/register');
	}
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

.login-form {
	@media only screen and (min-width: 960px) {
		position: relative;
		top: -1.5rem;
		min-width: 550px;
	}
}
</style>
