import Vue from 'vue';
import App from './App.vue';
import {
  MdButton,
  MdContent,
  MdTabs,
  MdList,
  MdIcon,
  MdDivider,
  MdField,
  MdCheckbox,
  MdMenu
} from 'vue-material/dist/components'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueScrollTo from 'vue-scrollto';
import VueCarousel from 'vue-carousel';

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "#container",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(MdMenu)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdList)
Vue.use(MdIcon)
Vue.use(MdField)
Vue.use(MdCheckbox)
Vue.use(MdDivider)
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
