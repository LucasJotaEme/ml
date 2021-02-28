import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueRouter from 'vue-router';

// Instancia de components

import Results from './components/Results'
import Detail from './components/Detail'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter);

//Configuración de las rutas

const routes = [
  {path: '/', component: Results},
  {path: '/api/items/:q?', component: Results},
  {path: '/api/items/:id', name: 'detail', component: Detail},
]

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
