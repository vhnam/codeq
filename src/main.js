// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Posts from './pages/Posts'

import store from './store';

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/posts', component: Posts }
]

const router = new VueRouter({
    routes, // short for routes: routes
    mode: 'history'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
}).$mount('#app')
