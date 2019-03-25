 import Vue from 'vue'
 import VueRouter from 'vue-router'
 import Projects from './components/Projects'
 import Team from './components/Team'
 import Dashboard from './components/Dashboard'


window.Vue = require('vue');

 Vue.use(VueRouter);

 const Router = new VueRouter({
     routes:[
         {
             path:'/',
             component:Dashboard
         },
         {
             path:'/projects',
             component:Projects
         },
         {
             path:'/team',
             component:Team
         }
     ]
 })

 export default Router;