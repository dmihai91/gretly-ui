/// <reference path="../nuxt-shims.d.ts"/>
import { Events } from '../const/events';
import { eventBus } from './eventBus';

export interface UnsubscribeToastsHandler {
  unsubscribeAll: Function;
}

export const useToast = (vm: Vue) => {
  const closeToastAction = {
    text: '',
    icon: 'fa-close',
    onClick: (_e, toastObject) => {
      toastObject.goAway(0);
    },
  };

  eventBus.$on(Events.GLOBAL_SHOW_ERROR, (message?: string) => {
    const errMessage = message || vm.$t('server_error_message').toString();
    vm.$toasted.error(errMessage, {
      className: 'error-toast',
      action: {
        ...closeToastAction,
      },
    });
  });

  eventBus.$on(Events.GLOBAL_SHOW_WARNING, (message: string) => {
    vm.$toasted.show(message, {
      className: 'warning-toast',
      action: {
        ...closeToastAction,
      },
    });
  });

  eventBus.$on(Events.GLOBAL_SHOW_SUCCESS, (message: string) => {
    vm.$toasted.success(message, {
      className: 'success-toast',
      action: {
        ...closeToastAction,
      },
    });
  });

  return {
    unsubscribeAll() {
      eventBus.$off(Events.GLOBAL_SHOW_ERROR);
      eventBus.$off(Events.GLOBAL_SHOW_WARNING);
      eventBus.$off(Events.GLOBAL_SHOW_SUCCESS);
    },
  } as UnsubscribeToastsHandler;
};
