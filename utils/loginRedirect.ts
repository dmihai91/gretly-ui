/// <reference path="../nuxt-shims.d.ts" />
export function loginRedirect({ $router, $route, $accessor }: Vue) {
  const lastRoutePath = $accessor.lastPath;
  const redirectPath = $route.query['redirectPath'] ?? lastRoutePath;
  console.log(redirectPath);
  if (redirectPath) {
    $router.push(redirectPath);
  } else {
    $router.push('/');
  }
}
