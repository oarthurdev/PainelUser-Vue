<template>
<div>
<section class="content-header">
    <h1>
    Maintenance
    </h1>
    <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
    <li class="active">Manutenção</li>
    </ol>
</section>
<section class="content">
<div class="row">
    <div class="col-sm-4">
        <div class="box box-primary" data-widget="box-widget">
            <div class="box-header">
            <h3 class="box-title">Menu</h3>
                <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                </div>
            </div>
            <div class="box-body no-padding">
                <ul class="sidebar-menu" id="no-bg">
                    <li class="treeview active">
                        <router-link to="maintenance">
                            <a href="/maintenance" style="color: black">
                            <i class="fa fa-gear">
                            </i> 
                            <span>General</span>
                            </a> 
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-8">
        <div class="box box-primary" data-widget="box-widget">
            <div class="box-header">
            <h3 class="box-title">Server Geral</h3>
                <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                </div>
            </div>
            <div class="box-body">
                <div class="row">
                    <div class="col-sm-12">
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="#"><b>Total Accounts</b>
                            <span class="pull-right text-black"> 2487</span></a></li>
                            <li><a href="#"><b>Total Banned Accounts</b> <span class="pull-right text-black">16</span></a>
                            </li>
                            <li><a href="#"><b>Total Characters</b>
                            <span class="pull-right text-black">6245</span></a><br>
                            </li>
                            <li><a href="#"><b>Account Logs</b>
                            <span class="pull-right text-black">10000</span></a><br>
                            </li>
                            <li><a href="#"><b>Launcher Status</b>
                            <span class="pull-right text-green">Online</span></a><br><br>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
</div>
</template>
<script>
export default {
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      searchFor: 0,
      players: [],
      logType: 'LogAdmin',
      logTypeSub: 'LogAging'
    }
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      let vm = this
      console.log(vm.logType)
      console.log('submit')
      this.$http
        .post('logs', { searchFor: this.searchFor, textSearchFor: this.textSearchFor })
        .then(function (result) {
          console.log(result)
          if (result.data && result.data.length > 0) {
            $('#alert-carregando').hide()
            vm.players = result.data
          } else {
            $('#alert-carregando').hide()
            vm.players = []
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 3000)
            return false
          }
        })
    }
  }
}
</script>
<style scoped>
.center{
    margin-left: 150px;
}

.no-padding{
    padding: 0px;
}

.skin-blue .sidebar-menu>li.active>a{
    background-color: inherit;
}

.sidebar-menu > .treeview > a:hover{
    background-color: inherit;
}
</style>
