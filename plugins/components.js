import Vue from 'vue';

import richText from '~/components/utils/rich-text.vue';
import scrollLink from  '~/components/utils/scroll-link.vue';
import SVGLoader from '~/components/svg-icons/SVG-Loader.vue';


Vue.component('scroll-link', scrollLink);
Vue.component('rich-text', richText);
Vue.component('SVG-Loader', SVGLoader);