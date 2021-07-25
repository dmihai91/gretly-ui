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
