import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login.vue'
import EditStatus from 'components/EditStatus.vue'
import GerenciarClan from 'components/GerenciarClan.vue'
import Cadastrar from 'components/Cadastrar.vue'
// import AllTickets from 'pages/tickets/AllTickets.vue'
// import OpenTicket from 'pages/tickets/OpenTicket.vue'
// import Hello from 'components/Hello.vue'
import Home from 'components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/edit-status/:nick',
      name: 'EditStatus',
      component: EditStatus
    },
    {
      path: '/gerenciar-clan',
      name: 'GerenciarClan',
      component: GerenciarClan
    },
    // {
    //   path: '/tickets',
    //   name: 'AllTickets',
    //   component: AllTickets
    // },
    // {
    //   path: '/tickets/open',
    //   name: 'OpenTicket',
    //   component: OpenTicket
    // },
    {
      path: '/cadastrar',
      name: 'Cadastrar',
      component: Cadastrar
    },
    {
      path: '/',
      name: 'Hello',
      component: Home
      // redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ],
  linkActiveClass: 'active'
})
