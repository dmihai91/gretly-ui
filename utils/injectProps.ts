import Vue from 'vue';

export function injectProps (vm: Vue, propsToBeInjected: Object[]) {
  const injectedProps: any = {};
  for (const k in propsToBeInjected) {
    if (!vm[k]) {
      throw new Error(`props ${k} doesn't exist on the component ${vm.$vnode}`);
    }
    injectProps[k] = vm[k];
  }
  return injectedProps;
}
