import '../store/types';

import { Context } from '@nuxt/types';

export default function ({ app, redirect, $accessor, route }: Context) {
  if (!app.$accessor.auth.session) {
    $accessor.setLastPath(route.path);
    return redirect('/login');
  }
}
