import { accessorType } from './index';

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType;
  }

  interface Context {
    $accessor: typeof accessorType;
  }
}
