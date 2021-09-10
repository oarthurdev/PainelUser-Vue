<template>
  <header class="main-header">
    <!-- Logo -->
      <a class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>O</b>PK</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Omnia</b>PK</span>
      </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="/static/img/default.jpg"  class="user-image" alt="User Image">
              <span class="hidden-xs">{{ currentUser.name }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="/static/img/default.jpg"  class="img-circle" alt="User Image">

                <p>
                  {{ currentUser.name }}<br>
                  <small>{{moment(currentUser.position).format('LL')}}</small>
                </p>
              </li>
              <!-- Menu Body -->
              
              <!-- Menu Footer-->
              <li class="user-footer">
                <!-- <div class="pull-left">
                  <a href="/profile" class="btn btn-default btn-flat">Profile</a>
                </div> -->
                <div class="pull-right">
                  <a v-on:click="clickBtn" class="btn btn-default btn-flat">Sair</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
moment.locale('pt-br')

export default {
  name: 'va-navibar',
  data () {
    return {
      token: '0',
      username: '',
      photo: ''
    }
  },
  mounted () {
    let vm = this
    this.token = localStorage.getItem('token')
    this.username = localStorage.getItem('username')
    this.$http
        .post('get-photo', {username: this.username})
        .then(function (result) {
          if (result.data) {
            vm.photo = result.data.photo
          } else {
            console.log('Error')
          }
        })
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      this.$http
        .post('remove-token', {token: this.token})
        .then(function (result) {
          if (result.data) {
            localStorage.clear()
            window.location.href = '/login'
          } else {
            console.log('Error')
          }
        })
    },
    moment (...args) {
      return moment(...args)
    }
  },
  computed: {
    ...mapGetters([
      'unreadMessagesCount',
      'unreadNotificationsCount',
      'remainTasksCount',
      'currentUser'
    ])
  }
}

</script>
