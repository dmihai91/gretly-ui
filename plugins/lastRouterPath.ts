// plugins/after-each.js:
import { Context } from '@nuxt/types';
import { LS_ROUTE_KEY } from '../const/const';

export default async ({ app }: Context) => {
  app.router.afterEach((to) => {
    if (process.client) {
      localStorage.setItem(LS_ROUTE_KEY, to.path);
    }
  });
};
