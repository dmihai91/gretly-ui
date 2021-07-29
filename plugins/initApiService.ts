import '@nuxtjs/axios';

import { ApiService } from '../services/ApiService';
import { Context } from '@nuxt/types';

export default async ({ app }: Context) => {
	ApiService.init(app.$axios);
};
