import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import App from './App.vue';
import Converter from './components/converter.vue';
import Wilks from './components/wilks.vue';

Vue.use(VueMaterial);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Wilks },
  { path: '/lbs-kgs-converter', component: Converter }

];

const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
