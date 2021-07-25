import '../store/types';

import { Context } from '@nuxt/types';

export default function({ app, redirect }: Context) {
	if (app.$accessor.auth.loggedIn) {
		return redirect('/editor');
	}
}
