<template>
<div>
  <div id="app" v-if="!token && this.$route.path == '/cadastrar'">
    <cadastrar></cadastrar>
  </div>
  <div id="app" v-else-if="!token || token == '0'">
    <login></login>
  </div>
  
  <div id="app" v-else>
    <div class="wrapper">
      <va-navibar></va-navibar>
      <va-slider :slideMenuItems="slideMenuItems"></va-slider>
      <va-content-wrap></va-content-wrap>
      <Modal></Modal>
    </div>
  </div>
</div>
</template>

<script>
import VANaviBar from 'NaviBar.vue'
import VASlider from 'Slider.vue'
import VAContentWrap from 'ContentWrap.vue'
import Modal from './components/Modal.vue'
import store from './vuex/store.js'
import slideMenuItems from './lib/slideMenuItems.js'
import Login from './components/Login.vue'
import Cadastrar from './components/Cadastrar.vue'

export default {
  name: 'app',
  data () {
    return {
      slideMenuItems: slideMenuItems,
      loginType: localStorage.getItem('username'),
      token: localStorage.getItem('token')
    }
  },
  watch: {
    $route (to, from) {
      this.loginType = localStorage.getItem('username')
      this.token = localStorage.getItem('token')
    }
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap,
    'login': Login,
    'cadastrar': Cadastrar,
    Modal
  },
  store
}
</script>

<style>

</style>
