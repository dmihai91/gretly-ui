import { IValidator } from 'vuelidate';

const touchMap = new WeakMap();

export function delayTouch($v: IValidator) {
  $v.$reset();
  if (touchMap.has($v)) {
    clearTimeout(touchMap.get($v));
  }
  touchMap.set($v, setTimeout($v.$touch, 1000));
}

/**
 * Converts the given enum to a map of the keys to the values.
 * @param enumeration The enum to convert to a map.
 */
export function enumToMap(enumeration: any): Map<string, string | number> {
  const map = new Map<string, string | number>();
  for (let key in enumeration) {
    //TypeScript does not allow enum keys to be numeric
    if (!isNaN(Number(key))) continue;

    const val = enumeration[key] as string | number;

    //TypeScript does not allow enum value to be null or undefined
    if (val !== undefined && val !== null) map.set(key, val);
  }

  return map;
}

export function isEmptyObject(obj: Object) {
  return Object.keys(obj).length === 0;
}

export function getBrowserAgent() {
  const agent = window.navigator.userAgent.toLowerCase();
  switch (true) {
    case agent.indexOf('edge') > -1:
      return 'edge';
    case agent.indexOf('edg') > -1:
      return 'chromium based edge (dev or canary)';
    case agent.indexOf('opr') > -1 && !!window['opr']:
      return 'opera';
    case agent.indexOf('chrome') > -1 && !!window['crome']:
      return 'chrome';
    case agent.indexOf('trident') > -1:
      return 'ie';
    case agent.indexOf('firefox') > -1:
      return 'firefox';
    case agent.indexOf('safari') > -1:
      return 'safari';
    default:
      return 'other';
  }
}
