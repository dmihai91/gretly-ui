// import styles
import '~/assets/vendor/nucleo/css/nucleo.css';
import '~/assets/vendor/font-awesome/css/font-awesome.css';

import Vue, { VueConstructor } from 'vue';
import VueLazyload from 'vue-lazyload';
import globalComponents from './globalComponents';

export default {
  install: (Vue: VueConstructor<Vue>, _options?: Vue['$options']) => {
    Vue.use(globalComponents);
    Vue.use(VueLazyload);
  },
};
