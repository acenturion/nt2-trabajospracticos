import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueForm from 'vue-form'

import form from '../src/components/form.vue'
import users from '../src/components/users.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueForm);


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/form', component: form},
    { path: '/users', component: users},
    { path: '/', component: form}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
