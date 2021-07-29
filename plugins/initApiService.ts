import '@nuxtjs/axios';

import { Context } from '@nuxt/types';
import { ApiService } from '../services/ApiService';

export default async ({ app }: Context) => {
  await ApiService.init(app.$axios);
};
