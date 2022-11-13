<template>
  <AuthForm :slogan="sloganMessage">
    <div class="d-flex">
      <a class="btn btn-link" @click="$router.go(-1)"><i class="fa fa-arrow-left mr-2"></i>{{ $t('back') }}</a>
    </div>
    <div class="card bg-secondary shadow border-0">
      <div class="card-body px-lg-5 py-lg-4">
        <div class="text-center mb-4">
          <BaseTitle heading="h4">{{ $t('forget_password_form.reset_password') }}</BaseTitle>
        </div>
        <form id="reset-password-form" role="form" class="mt-2 px-4" @submit.prevent="submitForm">
          <div class="mw-100 d-flex justify-content-center mb-2">
            <img src="/img/forgot-password-illu.svg" class="mw-100" />
          </div>
          <div class="form-group mb-3">
            <label for="inputEmail">{{ $t('email') }}</label>
            <input v-model="email" name="inputEmail" type="text" class="form-control" :class="{
              'is-valid': isValidEmail,
              'is-invalid': emailValidationField && emailValidationField.$dirty && !isValidEmail,
            }" @input="delayTouch(emailValidationField)" />
            <div v-if="emailValidationField && emailValidationField.$invalid" class="error">
              <span v-if="emailValidationField && emailValidationField.$dirty && !emailValidationField.required">
                <BaseFormInputError>{{ $t('messages.please_enter_email') }}</BaseFormInputError>
              </span>
              <span v-else-if="emailValidationField && emailValidationField.$dirty && !emailValidationField.valid">
                <BaseFormInputError>{{ $t('messages.invalid_email') }}</BaseFormInputError>
              </span>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary px-5 mt-3" :disabled="isBusy">
              {{ $t('send') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </AuthForm>
</template>

<script lang="ts">
import Vue from 'vue';
import { ApiError } from '@supabase/supabase-js';
import { required, email } from 'vuelidate/lib/validators';
import { delayTouch } from '@/utils/helpers';
import { IValidator } from 'vuelidate';
import { eventBus } from '@/utils/eventBus';
import { Events } from '@/const/events';
import AuthForm from '@/components/auth/AuthForm.vue';

export default Vue.extend({
  name: 'ForgetPasswordForm',
  components: { AuthForm },
  data() {
    return {
      email: '' as string,
      isBusy: false,
    };
  },
  head() {
    return {
      titleTemplate: `${this.$t('app_name')} - ${this.$t('forget_password_form.forget_password')}`,
    };
  },
  validations: {
    email: {
      required,
      valid: email,
    },
  },
  computed: {
    sloganMessage() {
      return this.$t('forget_password_form.slogan') as string;
    },
    emailValidationField() {
      return this.$v ? this.$v.email : null;
    },
    isValidEmail() {
      return this.$v ? this.$v.email.$dirty && !this.$v.email.$invalid : false;
    },
  },
  methods: {
    delayTouch($v: IValidator) {
      return delayTouch($v);
    },
    submitForm() {
      this.$v.$touch();

      if (this.$v.$invalid) return;

      this.$auth.sendResetPasswordEmail({ email }).catch((err: ApiError) => {
        eventBus.$emit(Events.GLOBAL_SHOW_ERROR, err.message);
      });
    },
  },
});
</script>
