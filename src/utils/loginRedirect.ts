export function loginRedirect({ $router, $route, $accessor }: Vue) {
  const lastRoutePath = $accessor.lastPath;
  const redirectPath = ($route.query['redirectPath'] ?? lastRoutePath) as string | null;
  if (redirectPath) {
    $router.push(redirectPath);
  } else {
    $router.push('/');
  }
}
