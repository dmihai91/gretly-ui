import '@nuxtjs/axios';

import { ApiService } from '@/services/api/ApiService';
import { Context } from '@nuxt/types';

export default async ({ app }: Context) => {
  ApiService.init(app.$axios);
};
