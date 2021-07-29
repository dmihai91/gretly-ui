import Vue from 'vue';

export function injectProps(vm: Vue, propsToBeInjected: Object[]) {
	let injectedProps: any = {};
	for (const k in propsToBeInjected) {
		if (!vm[k]) {
			throw Error(`props ${k} doesn't exist on the component ${vm.$vnode}`);
		}
		injectProps[k] = vm[k];
	}
	return injectedProps;
}
