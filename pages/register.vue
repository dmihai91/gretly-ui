<template>
  <!-- Register Layout -->
  <auth-form :slogan="sloganMessage" ilustration-path="images/register-illustration.jpg">
    <div class="text-center mb-3">
      <h2>{{ $t('register_label') }}</h2>
    </div>
    <div class="card bg-secondary shadow border-0">
      <div class="card-header bg-white pb-4">
        <div class="text-muted text-center mb-3">
          <h6>{{ $t('register_with') }}</h6>
        </div>
        <social-login />
      </div>

      <div class="card-body px-lg-5 py-lg-4">
        <div class="text-center text-muted mb-3">
          <div class="divider">
            <span>{{ $t('or') }}</span>
          </div>
        </div>

        <form id="register-form" role="form" class="mt-4 px-4" @submit.prevent="submitForm">
          <!-- username field -->
          <div class="form-group mb-3">
            <label for="inputusername">{{ $t('username') }}</label>
            <input
              v-model="form.username"
              name="inputusername"
              class="form-control"
              :class="{ 'is-valid': isValidUsername, 'is-invalid': usernameValidationField.$dirty && !isValidUsername }"
              @input="delayTouch(usernameValidationField)"
            >
            <div v-if="usernameValidationField.$invalid" class="error">
              <span v-if="usernameValidationField.$dirty && !usernameValidationField.required">
                <form-input-error>{{ $t('messages.please_enter_username') }}</form-input-error>
              </span>
              <span v-else-if="usernameValidationField.$dirty && !usernameValidationField.minLength">
                <form-input-error>{{
                  $t('messages.username_minlength_error', { minLength: usernameMinLength })
                }}</form-input-error>
              </span>
              <span v-else-if="usernameValidationField.$dirty && !usernameValidationField.valid">
                <form-input-error>{{ $t('messages.invalid_username') }}</form-input-error>
              </span>
            </div>
          </div>

          <!-- email field -->
          <div class="form-group mb-3">
            <label for="inputEmail">{{ $t('email') }}</label>
            <input
              v-model="form.email"
              name="inputEmail"
              class="form-control"
              :class="{ 'is-valid': isValidEmail, 'is-invalid': emailValidationField.$dirty && !isValidEmail }"
              @input="delayTouch(emailValidationField)"
            >
            <div v-if="emailValidationField.$invalid" class="error">
              <span v-if="emailValidationField.$dirty && !emailValidationField.required">
                <form-input-error>{{ $t('messages.please_enter_email') }}</form-input-error>
              </span>
              <span v-else-if="emailValidationField.$dirty && !emailValidationField.valid">
                <form-input-error>{{ $t('messages.invalid_email') }}</form-input-error>
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
              :class="{ 'is-valid': isValidPassword, 'is-invalid': passwordValidationField.$dirty && !isValidPassword }"
              @input="delayTouch(passwordValidationField)"
            >
            <div v-if="passwordValidationField.$invalid" class="error">
              <span v-if="passwordValidationField.$dirty && !passwordValidationField.required">
                <form-input-error>{{ $t('messages.please_enter_password') }}</form-input-error>
              </span>
              <span v-else-if="passwordValidationField.$dirty && !passwordValidationField.goodPassword">
                <form-input-error>{{
                  $t('messages.not_good_password', { minLength: passwordMinLength })
                }}</form-input-error>
              </span>
            </div>
          </div>

          <!-- name field -->
          <div class="form-group mb-3">
            <label for="inputName">{{ $t('name') }}</label>
            <input
              v-model="form.name"
              name="inputName"
              class="form-control"
              :class="{ 'is-valid': isValidName, 'is-invalid': nameValidationField.$dirty && !isValidName }"
              @input="delayTouch(nameValidationField)"
            >
            <div v-if="nameValidationField.$invalid" class="error">
              <span v-if="nameValidationField.$dirty && !nameValidationField.required">
                <form-input-error>{{ $t('messages.please_enter_name') }}</form-input-error>
              </span>
              <span v-else-if="nameValidationField.$dirty && !nameValidationField.minLength">
                <form-input-error>{{
                  $t('messages.name_minlength_error', { minLength: nameMinLength })
                }}</form-input-error>
              </span>
              <span v-else-if="nameValidationField.$dirty && !nameValidationField.valid">
                <form-input-error>{{ $t('messages.invalid_name') }}</form-input-error>
              </span>
            </div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary px-5 mt-1">
              {{ $t('register') }}
            </button>
          </div>
          <hr class="mt-6">
          <div class="flex justify-center pt-2">
            <span>
              {{ $t('already_registered') }}
              <a class="link" @click="showLogin">{{ $t('sign_in') }}</a>
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
import { required, email, minLength } from 'vuelidate/lib/validators';

import { RegisterInfo } from '~/interfaces/RegisterInfo';
import { delayTouch } from '~/utils/helpers';
import { Validations } from '~/utils/validations';
import { usernameValidator } from '~/utils/validators';
import { AuthService } from '~/services/AuthService';

import AuthForm from '~/components/AuthForm.vue';
import SocialLogin from '~/components/SocialLogin.vue';

const usernameMinLength = 5;
const passwordMinLength = 8;
const nameMinLength = 5;

const formData: RegisterInfo = {
  username: '',
  email: '',
  password: '',
  name: '',
};

@Component({
  components: {
    AuthForm,
    SocialLogin,
  },
  layout: 'simple',
})
export default class Register extends Vue {
  // data
  form = {
    ...formData,
  };

  isBusy = false;
  usernameMinLength = usernameMinLength;
  passwordMinLength = passwordMinLength;
  nameMinLength = nameMinLength;

  // validations
  @Validations({
    form: {
      username: {
        required,
        minLength: minLength(usernameMinLength),
        valid: usernameValidator,
      },
      email: {
        required,
        valid: email,
      },
      password: {
        required,
        goodPassword: (password: string) => {
          // password validator
          return (
            password.length >= passwordMinLength &&
            /[a-z]/.test(password) &&
            /[A-Z]/.test(password) &&
            /[0-9]/.test(password)
          );
        },
      },
      name: {
        required,
        minLength: minLength(nameMinLength),
        valid: (value: string) => {
          return /^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\\.\s])){1,})(['’\-,\\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\\.\s])){2,})?)*)$/.test(
            value
          );
        },
      },
    },
  })

  // computed props
  get usernameValidationField () {
    return this.$v.form.username;
  }

  get emailValidationField () {
    return this.$v.form.email;
  }

  get passwordValidationField () {
    return this.$v.form.password;
  }

  get nameValidationField () {
    return this.$v.form.name;
  }

  get isValidUsername () {
    return this.$v.form.username.$dirty && !this.$v.form.username.$invalid;
  }

  get isValidEmail () {
    return this.$v.form.email.$dirty && !this.$v.form.email.$invalid;
  }

  get isValidPassword () {
    return this.$v.form.password.$dirty && !this.$v.form.password.$invalid;
  }

  get isValidName () {
    return this.$v.form.name.$dirty && !this.$v.form.name.$invalid;
  }

  get sloganMessage (): string {
    return this.$t('register_slogan') as string;
  }

  // methods
  delayTouch ($v: IValidator): void {
    return delayTouch($v);
  }

  async submitForm (_evt: Event) {
    this.$v.$touch();
    try {
      if (!this.$v.$invalid) {
        await AuthService.register(this.form);
      }
    } catch (err) {
      console.log(err);
    }
  }

  resetForm () {
    this.form = {
      ...formData,
    };
    this.$nextTick(() => this.$v.$reset());
  }

  showLogin () {
    this.$router.push('/login');
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
.register-form {
  @media only screen and (min-width: 960px) {
    position: relative;
    top: -1.5rem;
    min-width: 550px;
  }
}
</style>
