// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Foo from './components/Foo'
import User from './components/User'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/foo', component: Foo },
  { path: '/users/:id', name: 'user', component: User }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
