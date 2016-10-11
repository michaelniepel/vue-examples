<template>
  <div id="app" class="container">
    <nav class="navbar navbar-light bg-faded">
      <router-link to="/" class="navbar-brand" exact><img class="logo" src="./assets/logo.png"></router-link>
      <ul class="nav navbar-nav">
        <router-link tag="li" to="/" exact activeClass="active" class="nav-item">
          <a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" to="/foo" activeClass="active" class="nav-item">
          <a class="nav-link">Foo</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'user', params: { id: 'John' }}" activeClass="active" class="nav-item">
          <a class="nav-link">John</a>
        </router-link>
        <router-link tag="li" to="/users/rafael" activeClass="active" class="nav-item">
          <a class="nav-link">Rafael's page</a>
        </router-link>
      </ul>
    </nav>
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

// export app component
export default {
  router
}
</script>

<style>
.logo {
  width: 30px;
  height: 30px
}
</style>
