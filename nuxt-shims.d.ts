import 'vue';
import 'nuxt-i18n';
import 'vuelidate';
import '@nuxt/types';
import '@types/facebook-js-sdk';
import 'vue-toasted/types/index';

import firebase from 'firebase/app';

import { IGlobalMixin } from './mixins/global';
import { accessorType } from './store';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue extends IGlobalMixin {
    /**
     * Method like the setState in React
     * it alters the state by updating the properties with the new values specified using the props object
     * @param {Object} props - the new props we want to set
     */
    setState(props: object): void;

    /**
     * Check if an object is empty
     */
    isEmpty(obj: object): boolean;

    $db: typeof firebase['database'];
    $persistance: string;
    // the store helper
    $accessor: typeof accessorType;
    popupItem: Element | undefined;
  }
}

declare module 'vue/types/options' {
  interface PropOptions<T = any> {
    description?: string;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType;
  }
}
