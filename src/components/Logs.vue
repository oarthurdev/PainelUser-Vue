<template>
<div>
<section class="content-header">
    <h1>
    Search Logs
    </h1>
    <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
    <li class="active">Search Logs</li>
    </ol>
</section>
<section class="content">
<div class="box box-primary" data-widget="box-widget">
        <div class="box-header">
            <h3 class="box-title">Procurar</h3>
        </div>
        <form name="formProcurarLogs" id="formProcurarLogs" v-on:submit="clickBtn">
        <div class="box-body">
            <div class="form-group">
                <label for="procurarPor">Categoria</label>
                <select class="form-control" id="procurarPor" v-model="logType" required>
                <option value="LogAdmin">Log Admin</option>
                <option value="LogFile">Log File</option>
                </select>
            </div>
            <div class="form-group" v-if="logType=='LogFile'" >
                <label for="procurarPor">Sub-Categoria</label>
                <select class="form-control" id="procurarPor" v-model="logTypeSub" required>
                <option value="LogAging">Log Aging</option>
                <option value="LogDeath">Log Death</option>
                <option value="LogItem">Log Item</option>
                </select>
            </div>
            <div class="form-group">
                <label for="procurarPor2">Procurar por</label>
                <select class="form-control" id="procurarPor2" v-model="procurarPor" required>
                <option>Account Name</option>
                <option>Char Name</option>
                <option>IP Address</option>
                </select>
            </div>
            <div class="form-group">
                <input type="text" id="SearchFor1" name="SearchFor1" class="form-control" v-model="procurarPor2" placeholder="Ex: gothicpt"/>
            </div>
            <div class="form-group">
            <label>Date</label>

            <div class="input-group date">
                <div class="input-group-addon">
                <i class="fa fa-calendar"></i>
                </div>
                <input type="date" class="form-control pull-right" v-model="dataProcurar" required id="datepicker">
            </div>
            
            <!-- /.input group -->
            </div>
            <div class="form-group">
                <button type="submit" class="form-control btn-primary"><font size="3px" style="padding-right: 3px;">Search</font>&nbsp;<i class="fa fa-search" style="font-size:20px"></i></button>
            </div>
          </div>
         </form>
         <div class="alert alert-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
            <p class="color-black">Nenhum resultado.</p>
        </div>
      </div>
      <div class="box box-warning" data-widget="box-widget">
            <div class="box-header">
                <h3 class="box-title">Resultados</h3>
            </div>
            <div class="box-body">
            <div class="table-responsive">
            <table class="table table-striped table-bordered table-hover" v-if="logType == 'LogAdmin'">
            <thead>
            <tr>
                <th>Account</th>
                <th>CharacterName</th>
                <th>IP</th>
                <th>Log</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in logAdmin" :key="item.accountname">
                    <th class="name">{{item.accountname}}</th>
                    <td class="nick">{{item.nickname}}</td>
                    <td class="ip">{{item.ipaddress}}</td>
                    <td class="log">{{item.log}}</td>
                    <td class="date">{{item.data}}</td>
                </tr>
            </tbody>
            </table>
            <table class="table table-striped table-bordered table-hover" v-if="logTypeSub == 'LogAging' && logType != 'LogAdmin'">
            <thead>
            <tr>
                <th>Account</th>
                <th>CharacterName</th>
                <th>IP</th>
                <th>ItemChecksum1</th>
                <th>ItemChecksum2</th>
                <th>Log</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <th class="name"></th>
                <td class="nick"></td>
                <td class="ip"></td>
                <td class="itemc1"></td>
                <td class="itemc2"></td>
                <td class="log"></td>
                <td class="date"></td>
                </tr>
            </tbody>
            </table>
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
      logAdmin: [],
      logType: 'LogAdmin',
      logTypeSub: 'LogAging',
      procurarPor: 'Account Name'
    }
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      let vm = this
      console.log('submit')
      this.$http
        .post('logs', { logType: this.logType, logTypeSub: this.logTypeSub, procurarPor: this.procurarPor, procurarPor2: this.procurarPor2, dataProcurar: this.dataProcurar })
        .then(function (result) {
          console.log(result)
          if (result.data) {
            $('#alert-carregando').hide()
            vm.logAdmin = result.data
          } else {
            $('#alert-carregando').hide()
            vm.logAdmin = []
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
