<template>
  <div id="app">
    <alert type="success">
      <span class="icon-ok-circled alert-icon-float-left"></span>
      <strong>Well Done!</strong>
      <p>You successfully read this important alert message.</p>
    </alert>
    <router-link to="/" exact><img class="logo" src="./assets/logo.png"></router-link>
    <h1>Vue examples</h1>
    <router-link to="/foo" activeClass="active">Foo</router-link>
    <router-link :to="{ name: 'user', params: { id: 'John' }}" activeClass="active">John's page</router-link>
    <router-link to="/users/rafael" activeClass="active">Rafael's page</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// vue stuff
import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Hello from './components/Hello'
import Foo from './components/Foo'
import User from './components/User'

// use the router
Vue.use(VueRouter)

// setup paths
const routes = [
  { path: '/', component: Hello },
  { path: '/foo', component: Foo },
  { path: '/users/:id', name: 'user', component: User }
]

// setup router
const router = new VueRouter({
  mode: 'history',
  routes
})

// import vue-strap
import { alert } from 'vue-strap'

// export app component
export default {
  router,
  components: {
    alert
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
.active {
  text-decoration: underline !important;
}
</style>
