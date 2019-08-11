import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import store from './store';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.use(Buefy);
Vue.use(mavonEditor);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
