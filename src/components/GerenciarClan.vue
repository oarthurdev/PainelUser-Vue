<template>
<!-- <div v-if="semClan == true">
  <h3><center>Você não possui nenhum clan.</center></h3>
</div> -->
<div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            Gerenciar Clan
            <small>Configurações do Clan</small>
          </h1>
        </section>

        <!-- Main content -->
        <section class="content">

          <div class="row">
            <div class="col-md-3">

              <!-- Profile Image -->
              <div class="box box-primary">
                <div class="box-body">
                  
                  <div class="col-sm-12" style="margin-top:10px">
                    <div class="col-sm-3" style="text-align:right"><img style="margin-top:4px" v-bind:src="'https://omniapk.com.br/ClanContent/' + clan.tag + '.bmp'"></div>
                    <div class="col-sm-9"><b>{{clan.nome}}</b><br>{{clan.frase}}<br></div>

                  <ul class="list-group list-group-unbordered" style="margin-top: 70px;">
                    <li class="list-group-item">
                      <b>Líder do Clan</b> <a class="pull-right">{{clan.nomeLider}}</a>
                    </li>
                    <li class="list-group-item">
                      <b>Total de Membros</b> <a class="pull-right">{{clan.totalMembers}}</a>
                    </li>
                    <li class="list-group-item">
                      <b>Data de criação</b> <a class="pull-right">{{moment(clan.dataCriacao).format('DD/MM/YYYY')}}</a>
                    </li>
                  </ul>
                  </div>
                 
                </div><!-- /.box-body -->
              </div><!-- /.box -->

            </div><!-- /.col -->
            <div class="col-md-9">
              <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#mlist" data-toggle="tab">Lista de Membros</a></li>
                  <li v-if="sameLeader == true"><a href="#settings" data-toggle="tab">Configurações</a></li>
                </ul>
                <div class="tab-content">

                  <div class="active tab-pane" id="mlist" style="margin-top: 20px">
                    <table class="table table-hover">
                      <tbody><tr>
                        <th style="border: 0px none;">#</th>
                        <th style="border: 0px none;">Nick</th>
                        <th style="border: 0px none;"></th>
                        <th style="border: 0px none;">Data que ingressou no clan</th>
						<th style="border: 0px none;">Status</th>
						<th style="border: 0px none;">Última vez online</th>
                      </tr>
                      <tr v-for="clanInfo in clan.membros" :key="clanInfo.ChName">
                        <td>{{clanInfo.MIDX}}</td>
                        <td><img v-bind:src="'/static/img/classes/' + clanInfo.ChType + '.bmp'"> {{clanInfo.ChName}}</td>
                        <td v-if="clan.nomeLider == clanInfo.ChName"><b>Líder</b></td>
                        <td v-else>Membro</td>
                        <td>{{moment(clanInfo.JoinDate).format('DD/MM/YYYY HH:mm:ss')}}</td>
                        <td><font color="##FF0000">OFFLINE</font></td>
                        <td>Desconhecido</td>
                        </tr>
                    </tbody></table>
                  </div><!-- /.tab-pane -->

                  <div class="tab-pane" id="settings" style="margin-top: 20px">
                    <form enctype="multipart/form-data" class="form-horizontal" v-on:submit="salvarAlteracoes">
                      <div class="form-group">
                        <label for="inputName" class="col-sm-2 control-label">Nome do Clan</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputName" v-model="clan.nome" disabled="">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputPw" class="col-sm-2 control-label">Frase</label>
                        <div class="col-sm-10">
                          <input name="cnote" type="text" class="form-control" id="inputPw" v-model="clan.fraseNova" v-bind:placeholder="clan.frase">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputPw" class="col-sm-2 control-label">Icone</label>
                        <div class="col-sm-10">
                          <input type="hidden" name="MAX_FILE_SIZE" value="30000">
                          <input name="cicon" type="file" accept="image/bmp">
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <button type="submit" class="btn btn-danger">Salvar Alterações</button>
                        </div>
                      </div>
                    </form>
                  </div><!-- /.tab-pane -->

                </div><!-- /.tab-content -->
              </div><!-- /.nav-tabs-custom -->
            </div><!-- /.col -->
          </div><!-- /.row -->

        </section><!-- /.content -->
      </div>

</template>
<script>
import moment from 'moment'
moment.locale('pt-br')
/* eslint-disable no-unused-vars */
export default {
  name: 'login',
  data () {
    return {
      semClan: true,
      userid: '',
      clan: {
        nome: '',
        tag: 1000000,
        nomeLider: '',
        frase: '',
        fraseNova: '',
        dataCriacao: 0,
        totalMembers: 0,
        membros: []
      },
      username: localStorage.getItem('username'),
      sameLeader: null
    }
  },
  methods: {
    salvarAlteracoes (e) {
      let vm = this
      vm.$http.post('salvar-info-clan', {cTag: vm.clan.tag, cFrase: vm.clan.frase})
      .then(function (result) {
        console.log(result)
      })
    },
    moment (...args) {
      return moment(...args)
    }
  },
  mounted () {
    let vm = this
    this.userid = localStorage.getItem('username')
    this.$http.post('get-clan', {username: vm.username})
    .then(function (result) {
      vm.semClan = result.data.semClan
      vm.clan.nome = result.data.cName
      vm.clan.nomeLider = result.data.cLeader
      vm.clan.tag = result.data.cTag
      vm.clan.totalMembers = result.data.cTotalMembers
      vm.clan.dataCriacao = result.data.cCreationDate
      vm.clan.frase = result.data.cFrase
      vm.sameLeader = result.data.sameLeader
    })

    this.$http.post('get-member', {username: this.username})
    .then(function (result) {
      console.log(result)
      vm.clan.membros = result.data
    })
  }
}
</script>
