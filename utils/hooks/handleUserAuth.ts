/// <reference path="../../nuxt-shims.d.ts"/>
import { Events } from '../../const/events';
import { eventBus } from '../eventBus';
import { SessionService } from '../../services/SessionService';
import { AxiosResponse } from 'axios';

export const handleUserAuth = async (vm: Vue) => {
  eventBus.$on(Events.GLOBAL_REFRESH_TOKEN, () => {
    vm.$auth.refreshToken();
  });

  // refresh the token if user already logged in from old session
  try {
    if (!vm.$auth.accessToken && SessionService.getSessionId()) {
      await vm.$auth.refreshToken();
      await vm.$auth.fetchUserData();
      if (!vm.$auth.user.verified) {
        eventBus.$emit(Events.GLOBAL_SHOW_WARNING, vm.$t('verify_email_address'));
      }
    }
  } catch (_err) {
    const err: AxiosResponse = _err;
    if (err.status === 401) {
      eventBus.$emit(Events.GLOBAL_SHOW_ERROR, vm.$t('user_logged_out'));
      vm.$auth.silentLogout();
    }
  }
};
