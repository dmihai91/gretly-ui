import { accessorType } from '../store';

type Accessor = typeof accessorType;

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
  $auth: Accessor['auth'];
  /**
   * The name of the application
   */
  appName: string;
  isClient: boolean;
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
    $auth(): Accessor['auth'] {
      const { auth } = this['$accessor'].auth;
      return auth ?? auth;
    },
    appName(): string {
      return this['$t']('app_name');
    },
    isClient() {
      return process.client;
    },
  },
};
