import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueRouter from 'vue-router';

// Instancia de components
import SearchBox from './components/SearchBox'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter);

const routes = [
  
  {path: '/', component: SearchBox}
]

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
