<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!-- search form -->
      <!-- <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form> -->
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul data-widget="tree" class="sidebar-menu">
        <va-slide-item
          v-for="(item,index) in slideMenuItems"
          :data="item"
          :key="index"
          :type="item.type"
          :isHeader="item.isHeader"
          :icon="item.icon"
          :name="item.name"
          :badge="item.badge"
          :items="item.items"
          :router="item.router"
          :link="item.link"
        >
        </va-slide-item>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import VASlideItem from './components/VASlideItem'

export default {
  name: 'va-slider',
  data () {
    return {
      token: '0',
      username: '',
      photo: ''
    }
  },
  props: {
    slideMenuItems: {
      type: Array,
      default: []
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
  created () {

  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  components: {
    'va-slide-item': VASlideItem
  }
}
</script>
