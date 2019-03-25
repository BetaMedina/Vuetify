
require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'

import Vuetify from 'vuetify'
import Router from './routes.js'
import Navbar from './components/Navbar'


Vue.use(Vuetify,{
    theme: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        materialgrey:'#eceff1'
      }
})


const app = new Vue({
    components: { Navbar },
    el: '#app',
    router:Router,
});

