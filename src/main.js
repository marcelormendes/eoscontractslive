import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import VueGoodTable from 'vue-good-table';


Vue.use(VueGoodTable);
Vue.use(Buefy);

Vue.filter('currency', function (value) {
  if(!value) return '$ 0.00';
  return '$ ' + value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
});
