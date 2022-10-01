<template>
  <!-- Sign In Form -->
  <AuthForm :slogan="sloganMessage">
    <div class="text-center mb-3">
      <Title heading="h2">
        {{ $t('login_form.sign_in_label', { appName: $t('app_name') }) }}
      </Title>
    </div>
    <div class="card bg-secondary shadow border-0">
      <div class="card-header bg-white pb-4">
        <div class="text-muted text-center mb-3">
          <h6>{{ $t('login_form.sign_in_with') }}</h6>
        </div>
        <SocialAuth :action="'sign_up'" @auth:action="resetForm" />
      </div>

      <div class="card-body px-lg-5 py-lg-4">
        <div class="text-center text-muted mb-3">
          <div class="divider">
            <span>{{ $t('or') }}</span>
          </div>
        </div>

        <form id="login-form" role="form" class="mt-4 px-4" @submit.prevent="submitForm">
          <!-- Email field -->
          <div class="form-group mb-3">
            <label for="inputEmail">{{ $t('email') }}</label>
            <input
              v-model="form.email"
              name="inputEmail"
              type="text"
              class="form-control"
              :class="{
                'is-valid': isValidEmail,
                'is-invalid': emailValidationField?.$dirty && !isValidEmail,
              }"
              @input="delayTouch(emailValidationField)"
            />
            <div v-if="emailValidationField?.$invalid" class="error">
              <span v-if="emailValidationField.$dirty && !emailValidationField.required">
                <BaseFormInputError>{{ $t('messages.please_enter_email') }}</BaseFormInputError>
              </span>
              <span v-else-if="emailValidationField.$dirty && !emailValidationField.valid">
                <BaseFormInputError>{{ $t('messages.invalid_email') }}</BaseFormInputError>
              </span>
            </div>
          </div>

          <!-- password field -->
          <div class="form-group position-relative">
            <label for="inputPassword">{{ $t('password') }}</label>
            <input
              v-model="form.password"
              name="inputPassword"
              :type="passwordViewIsToggled ? 'text' : 'password'"
              class="form-control"
              :class="{
                'is-valid': isValidPassword,
                'is-invalid': passwordValidationField?.$dirty && !isValidPassword,
              }"
              @input="delayTouch(passwordValidationField)"
            />
            <i
              class="fa password-eye"
              :class="!passwordViewIsToggled ? 'fa-eye' : 'fa-eye-slash'"
              v-show="form.password.length > 0 && !isIeOrEdge"
              @click="togglePassword"
            ></i>
            <div v-if="passwordValidationField?.$invalid" class="error">
              <span v-if="passwordValidationField.$dirty && !passwordValidationField.required">
                <BaseFormInputError>{{ $t('messages.please_enter_password') }}</BaseFormInputError>
              </span>
            </div>
          </div>

          <!-- the error from server will be displayed here !-->
          <BaseFormInputError v-if="error">{{ error }}</BaseFormInputError>

          <div class="form-group d-flex justify-content-between">
            <div class="custom-control custom-control-alternative custom-checkbox">
              <input id="remember-me" type="checkbox" class="custom-control-input" v-model="form.rememberMe" />
              <label for="remember-me" class="custom-control-label">
                <span>{{ $t('login_form.remember_me') }}</span>
              </label>
            </div>
            <div class="forgot-password">
              <BaseButton tag="a" type="link" class="font-bold text-sm align-right" href="/reset-password">{{
                $t('login_form.forgot_password')
              }}</BaseButton>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary px-5 mt-3" :disabled="isBusy">
              {{ $t('login_form.sign_in') }}
            </button>
          </div>
          <hr class="mt-6" />
          <div class="flex justify-center pt-0">
            <span>
              {{ $t('login_form.not_registered_yet') }}
              <a class="link" @click="showRegister">{{ $t('login_form.join_us') }}</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  </AuthForm>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator';
import { IValidator } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import { ApiError } from '@supabase/supabase-js';

import { LoginInfo } from '@/store/auth/interfaces/LoginInfo';
import { delayTouch, getBrowserAgent } from '@/utils/helpers';
import { Validations } from '@/utils/validations';
import { PASSWORD_VISIBLE_TIMEOUT } from '@/const/const';
import { LayoutType } from '@/enums/LayoutType';
import { eventBus } from '@/utils/eventBus';
import { Events } from '@/const/events';
import { loginRedirect } from '@/utils/loginRedirect';

import AuthForm from '@/components/auth/AuthForm.vue';
import SocialAuth from '@/components/auth/SocialAuth.vue';

const formData: LoginInfo = {
  email: '',
  password: '',
  rememberMe: false,
};

@Component({
  components: {
    AuthForm,
    SocialAuth,
  },
  layout: LayoutType.SIMPLE,
  head() {
    return {
      titleTemplate: `${this.$t('app_name')} - ${this.$t('sign_in')}`,
    };
  },
})
export default class Login extends Vue {
  form = {
    ...formData,
  };

  isBusy = false;
  passwordViewIsToggled = false;
  error: string | null | undefined;

  @Validations({
    form: {
      email: {
        required,
        valid: email,
      },
      password: {
        required,
      },
    },
  })
  get emailValidationField() {
    return this.$v.form?.email;
  }

  get passwordValidationField() {
    return this.$v.form?.password;
  }

  get isValidEmail() {
    return this.$v.form?.email?.$dirty && !this.$v.form?.email?.$invalid;
  }

  get isValidPassword() {
    return this.$v.form?.password?.$dirty && !this.$v.form?.password?.$invalid;
  }

  get sloganMessage() {
    return this.$t('auth_slogan') as string;
  }

  get isIeOrEdge() {
    const agent = getBrowserAgent();
    return agent === 'edge' || agent === 'chromium based edge (dev or canary)' || agent === 'ie';
  }

  // methods
  delayTouch($v: IValidator | undefined) {
    return $v && delayTouch($v);
  }

  async submitForm(_evt: Event) {
    this.$v.$touch();
    this.error = '';
    this.isBusy = true;

    if (!this.$v.$invalid) {
      this.$auth
        .signIn(this.form)
        .then(() => {
          this.isBusy = false;

          loginRedirect(this);
          setTimeout(
            () => eventBus.$emit(Events.GLOBAL_SHOW_SUCCESS, this.$t('welcome', { appName: this.$t('app_name') })),
            200
          );
        })
        .catch((err: ApiError) => {
          if (err.status === 400 && err.message) {
            this.error = this.$t('messages.invalid_credentials').toString();
          }
          this.isBusy = false;
        });
    } else {
      this.isBusy = false;
    }
  }

  resetForm() {
    this.error = '';
    this.form = {
      ...formData,
    };
    this.$nextTick(() => this.$v.$reset());
  }

  showRegister() {
    this.$router.push('/register');
  }

  togglePassword() {
    this.passwordViewIsToggled = !this.passwordViewIsToggled;
  }

  @Watch('passwordViewIsToggled')
  onPasswordViewIsToggled(val: boolean) {
    // make the password visible for 3s only
    if (val) {
      setTimeout(() => {
        this.passwordViewIsToggled = false;
      }, PASSWORD_VISIBLE_TIMEOUT);
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
