import Vue from 'vue';

// vuelidate plugin
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

// vue loader plugin
import 'vue-loading-overlay/dist/vue-loading.css';
import Loading from 'vue-loading-overlay';
Vue.use(Loading);
Vue.component('Loader', Loading);

// Vue tooltip plugin
import VTooltip from 'v-tooltip';
Vue.use(VTooltip);

// smooth scroll plugin
import VueSmoothScroll from 'vue2-smooth-scroll';
Vue.use(VueSmoothScroll);

// vue slick carousel
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import VueSlickCarousel from 'vue-slick-carousel';
Vue.component('VueSlickCarousel', VueSlickCarousel);

// init fb sdk
import { initFacebookSdk } from '../utils/fbSdk';
initFacebookSdk();

// init google sdk
import GoogleAuth from '../utils/googleOAuth';
const gauthOption = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  scope: 'profile email',
  prompt: 'select_account',
};
Vue.use(GoogleAuth, gauthOption);

// global mixins
import GlobalMixin from '@/mixins/global';

Vue.mixin({
  ...GlobalMixin,
});

// register global filters
import '@/filters';

// global directives
import VueClickOutside from 'vue-click-outside';
Vue.directive('click-outside', VueClickOutside);

// global components
import FormInputError from '@/components/base/FormInputError.vue';
Vue.component(FormInputError.name, FormInputError);

// argon kit
import ArgonKit from './argon-kit';
Vue.use(ArgonKit);
