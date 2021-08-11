// import styles
import '~/assets/vendor/nucleo/css/nucleo.css';
import '~/assets/vendor/font-awesome/css/font-awesome.css';

import VueLazyload from 'vue-lazyload';
import globalComponents from './globalComponents';

export default {
  install: (Vue) => {
    Vue.use(globalComponents);
    Vue.use(VueLazyload);
  },
};
