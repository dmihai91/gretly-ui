import { Events } from '@/const/events';
import { eventBus } from '@/utils/eventBus';

const AUTO_HIDE_TIMEOUT = 5 * 1000;

export interface UnsubscribeToastsHandler {
  unsubscribeAll: Function;
}

export const useToast = (vm: Vue) => {
  const closeToastAction = {
    text: '',
    icon: 'fa-close',
    onClick: (_e: any, toastObject: { goAway: (arg0: number) => void }) => {
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
      duration: AUTO_HIDE_TIMEOUT,
    });
  });

  eventBus.$on(Events.GLOBAL_SHOW_WARNING, (message: string) => {
    vm.$toasted.show(message, {
      className: 'warning-toast',
      action: {
        ...closeToastAction,
      },
      duration: AUTO_HIDE_TIMEOUT,
    });
  });

  eventBus.$on(Events.GLOBAL_SHOW_SUCCESS, (message: string) => {
    vm.$toasted.success(message, {
      className: 'success-toast',
      action: {
        ...closeToastAction,
      },
      duration: AUTO_HIDE_TIMEOUT,
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
