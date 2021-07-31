/// <reference path="../nuxt-shims.d.ts" />
export function loginRedirect({ $router, $accessor }: Vue) {
	const lastRoutePath = $accessor.lastPath;
	if (lastRoutePath) {
		$router.push(lastRoutePath);
	} else {
		$router.push('/');
	}
}
