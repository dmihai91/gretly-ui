<template>
  <!-- Sign In Form -->
  <AuthForm :slogan="sloganMessage">
    <div class="text-center mb-3">
      <h2>{{ $t('sign_in_label', { appName: $t('app_name') }) }}</h2>
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

        <form id="login-form" role="form" class="mt-4 px-4" @submit.prevent="submitForm">
          <!-- username or email field -->
          <div class="form-group mb-3">
            <label for="inputUsername">{{ $t('username_or_email') }}</label>
            <input
              v-model="form.username"
              name="inputUsername"
              type="text"
              class="form-control"
              :class="{
                'is-valid': isValidUsername,
                'is-invalid': usernameValidationField.$dirty && !isValidUsername,
              }"
              @input="delayTouch(usernameValidationField)"
            />
            <div v-if="usernameValidationField.$invalid" class="error">
              <span v-if="usernameValidationField.$dirty && !usernameValidationField.required">
                <BaseFormInputError>{{ $t('messages.please_enter_username_or_email') }}</BaseFormInputError>
              </span>
              <span v-else-if="usernameValidationField.$dirty && !usernameValidationField.valid">
                <BaseFormInputError>{{ $t('messages.invalid_username_or_email') }}</BaseFormInputError>
              </span>
            </div>
          </div>

          <!-- password field -->
          <div class="form-group">
            <label for="inputPassword">{{ $t('password') }}</label>
            <input
              v-model="form.password"
              name="inputPassword"
              type="password"
              class="form-control"
              :class="{
                'is-valid': isValidPassword,
                'is-invalid': passwordValidationField.$dirty && !isValidPassword,
              }"
              @input="delayTouch(passwordValidationField)"
            />
            <div v-if="passwordValidationField.$invalid" class="error">
              <span v-if="passwordValidationField.$dirty && !passwordValidationField.required">
                <BaseFormInputError>{{ $t('messages.please_enter_password') }}</BaseFormInputError>
              </span>
            </div>
          </div>

          <!-- aici vine mesajul de eroare !-->
          <BaseFormInputError v-if="error" />

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
  </AuthForm>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { IValidator } from 'vuelidate';
import { required, or, email, sameAs } from 'vuelidate/lib/validators';

import { LoginInfo } from '~/interfaces/LoginInfo';
import { delayTouch } from '~/utils/helpers';
import { Validations } from '~/utils/validations';
import { usernameValidator } from '~/utils/validators';

import AuthForm from '~/components/AuthForm.vue';
import SocialLogin from '~/components/SocialLogin.vue';
import { ApiError } from '~/interfaces/ApiError';

const formData: LoginInfo = {
  username: '',
  password: '',
  rememberMe: false,
};

@Component({
  components: {
    SocialLogin,
    AuthForm,
  },
  layout: 'simple',
})
export default class Login extends Vue {
  // data
  form = {
    ...formData,
  };

  isBusy = false;
  error: string = null;

  // validations
  @Validations({
    form: {
      username: {
        required,
        valid: or(usernameValidator, email),
      },
      password: {
        required,
      },
      confirmPassword: {
        required,
        sameAs: sameAs('form.password'),
      },
    },
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

  get sloganMessage(): string {
    return this.$t('login_slogan') as string;
  }

  // methods
  delayTouch($v: IValidator) {
    return delayTouch($v);
  }

  async submitForm(_evt: Event) {
    try {
      this.$v.$touch();
      if(!this.$v.$invalid) {
        await this.$auth.login(this.form);
        this.$router.push('/');
      }
    } catch (_err) {
      // handle error
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const apiError: ApiError = _err;
      console.log(apiError);
    }
  }

  resetForm() {
    this.form = {
      ...formData,
    };
    this.error = '';
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
