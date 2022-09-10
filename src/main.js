import Vue from 'vue';
import App from './App.vue';
import Pannel from './components/02.Pannel';
Vue.config.productionTip = false;
// 这里的component是单数
Vue.component('pannelGlobal', Pannel);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
