import { accessorType } from '~/store';

type Accesor = typeof accessorType;

export interface GlobalMixin {
  /**
   * Convert string to uppercase
   */
  toUpper(s: string): string;
  /**
   * Capitalize the first character of the string
   */
  ucFirst(s: string): string;
  /**
   * Set the background color for the header either light or dark
   */
  setHeaderBackground(val: 'light' | 'dark'): void;
  /**
   * Global object for handling authentication
   */
  $auth: Accesor['auth'];
  /**
   * Check if user is logged in or not
   */
  loggedIn: boolean;
  /**
   * The name of the application
   */
  appName: string;
}

export default {
  methods: {
    ucFirst(s: string) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
    toUpper(s: string) {
      return s.toUpperCase();
    },
    setHeaderBackground(val: string) {
      this['$accessor'].setHeaderBackground(val);
    },
  },
  computed: {
    $auth(): Accesor['auth'] {
      return this['$accessor'].auth;
    },
    appName() {
      return this['$t']('app_name');
    },
    loggedIn() {
      return this.$auth ? this.$auth['loggedIn'] : false;
    },
  },
};
