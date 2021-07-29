import Vue from 'vue';

// Vuelidate plugin
import Vuelidate from 'vuelidate';

// Vue loader plugin
import 'vue-loading-overlay/dist/vue-loading.css';
import Loading from 'vue-loading-overlay';

// Vue tooltip plugin
import VTooltip from 'v-tooltip';

import VueSmoothScroll from 'vue2-smooth-scroll';

// vue slick carousel
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import VueSlickCarousel from 'vue-slick-carousel';

// argon kit

// init fb sdk

// global mixins
import GlobalMixin from '@/mixins/global';

// global directives
import VueClickOutside from 'vue-click-outside';
import { initFacebookSdk } from '../utils/fbSdk';
import ArgonKit from './argon-kit';

// global components
import PageTitle from '~/components/global/PageTitle.vue';
import FormInputError from '~/components/base/FormInputError.vue';
Vue.use(Vuelidate);
Vue.use(Loading);
Vue.component('Loading', Loading);
Vue.use(VTooltip);
Vue.use(VueSmoothScroll);
Vue.component('VueSlickCarousel', VueSlickCarousel);
Vue.use(ArgonKit);
initFacebookSdk();

Vue.mixin({
  ...GlobalMixin,
});
Vue.directive('click-outside', VueClickOutside);
Vue.component(PageTitle.name, PageTitle);
Vue.component(FormInputError.name, FormInputError);
