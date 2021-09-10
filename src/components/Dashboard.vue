<template v-on:onload="onLoadGetData">
<div>
<section class="content-header">
  <h1>
    Perfil do Jogador
  </h1>
</section>
<section class="content">

          <div class="row">
            <div class="col-md-3">

              <!-- Profile Image -->
              <div class="box box-primary box-profile">
                <div class="box-body box-profile">
                  <img class="profile-user-img img-responsive img-circle" src="/static/img/default.jpg" alt="User profile picture">
                  <h3 class="profile-username text-center">{{currentUser.name}}</h3>
                  <p class="text-muted text-center">Jogador desde {{moment(dataCadastro).format('LL')}} </p>				
                  <ul class="list-group list-group-unbordered">
				
				                      <li class="list-group-item">
                      <b>Coins</b> <a class="pull-right">{{ (coins != '0' || coins != null) ? coins : '0'}}</a>
                    </li>
                  </ul>
                  <button type="button" class="col-sm-12 btn btn-danger btn-small" v-if="bloqueado == 1">Banido</button>
                  <button type="button" class="col-sm-12 btn btn-success btn-small" v-else>Normal</button>
                </div><!-- /.box-body -->
              </div><!-- /.box -->

            </div><!-- /.col -->
            <div class="col-md-9">
              <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                  <li id="listchrs" class="active"><a href="#chrlist" data-toggle="tab">Lista de Personagens</a></li>
                  <li id="alertas checkalertas"><a href="#timeline" data-toggle="tab">Alertas</a></li>
                  <li><a href="#settings" data-toggle="tab">Configurações da Conta</a></li>
                </ul>
                <div class="tab-content">
                  <div class="active tab-pane" id="chrlist">
				  <table id="TbLPersonagens" class="table table-hover" style="margin-bottom: 0px;">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Nick</th>
                      <th>Clan</th>
                      <th>Classe</th>
                      <th>Level</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <!-- <tbody v-if="dev == true"><tr><td colspan="7"><center><b>Página em desenvolvimento.</b></center></td></tr></tbody> -->
                  <tbody v-if="semChar == true"><tr><td colspan="7"><center>Nenhum personagem foi encontrado.</center></td></tr></tbody>
                  <tbody v-else-if="characters == ''"><tr><td colspan="7"><center>Nenhum personagem foi encontrado.</center></td></tr></tbody>
                  <tbody v-else>
                    <tr v-for="item in characters" :key="item.cName">
                      <td v-if="chName == item.cName"><label class="label label-success">Online</label> </td>
                      <td v-else><label class="label label-danger">Offline</label> </td>
                      <td>
                      {{item.cName}}</td>
                      <td v-for="clan in infoClan" v-bind:key="clan.ClanName">
                        <div v-if="item.cName == clan.ChName">
                          <img data-toggle="tooltip" title="" width="20px" v-bind:src="'https://omniapk.com.br/ClanContent/'+clan.MIconCnt+'.bmp'" data-original-title="1"> 
                          {{clan.ClanName}}
                        </div>
                        <div v-else>
                          <td>Sem Clan</td>
                        </div>
                        </td>
                      <td><img v-bind:src="'static/img/classes/'+item.numClass+'.bmp'"> {{item.cClass}}
                      </td>
                      <td>{{item.cLevel}}</td>
                      <td>
                        <div class="btn-group">
                          <button type="button" class="btn btn-success btn-xs">Opções</button>
                  <button type="button" class="btn btn-success btn-xs dropdown-toggle" data-toggle="dropdown">
                    <span class="caret"></span>
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <!-- <li><router-link v-bind:to="'/edit-status/' + item.cName">Status</router-link></li>
                    <li><a href="#">Magias</a></li>
                    <li><a href="#">Mudar Nick</a></li>
                    <li><a href="#">Mudar classe</a></li> -->
                    <li><a href="#" v-on:click="excluirDat(item.cName, username)" data-toggle="modal" data-target="#exampleModal">Excluir personagem</a></li>
                  </ul>
                </div>
                
                      </td>
                    </tr>
                  </tbody>
                      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><b>Are you sure?</b></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                            Deseja realmente excluir esse personagem?
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Não</button>
                            <button type="button" class="btn btn-danger" id="confirm" name="confirm">Sim</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </table>
                    <!-- <form method="post" v-on:submit="criarChar">
                      <div class="form-group col-sm-12">
                        <label for="txtNickname" class="col-sm-2 control-label">Novo Personagem</label>
                        <div class="col-sm-4">
                          <input type="text" name="txtNickname" id="txtNickname" v-model="newNick" class="form-control" placeholder="Insira o nick do personagem">
                        </div>
                        <div class="col-sm-4">
                          <select name="classe" id="classe" v-model="classe" class="form-control select2 select2-hidden-accessible" style="width: 100%;" tabindex="-1" aria-hidden="true">
                            <option value="Fighter">Lutador</option>
                            <option value="Mechanician">Mecânico</option>
                            <option value="Archer">Arqueira</option>
                            <option value="Pikeman">Pikeman</option>
                            <option value="Atalanta">Atalanta</option>
                            <option value="Knight">Cavaleiro</option>
                            <option value="Magician">Mago</option>
                            <option value="Priestess">Sacerdotiza</option>>
                          </select>
                        </div>
                        <div class="col-sm-2">
                          <button type="submit" class="btn btn-success col-sm-12">Criar</button>
                        </div>
                      </div>
                    </form> -->

                  </div><!-- /.tab-pane -->
                  
                  <div class="tab-pane" id="timeline">
                    
                <!-- The timeline -->
                  <div v-if="alerts == ''">
                    <h4><center>Você não tem nenhum alerta, continue assim.</center></h4>
                  </div>
                <ul class="timeline timeline-inverse" v-else>
                <li class="alert-list" v-for="item in alerts" :key="item.idplayer">
                            <i class="fa fa-envelope bg-blue"></i>
                            <div class="timeline-item">
                              <span class="time"><i class="fa fa-clock-o"></i>  {{moment(item.created_at).format('l H:mm:ss')}}</span>
                              <h3 class="timeline-header"><a href="#">OmniaPK</a> enviou uma mensagem</h3>
                              <div class="timeline-body" v-if="item.punicao == 'Alerta'">
                                Você foi alertado no servidor pelo seguinte motivo: {{item.motivo}}
                              </div>
                              <div class="timeline-body" v-else>
                                Você foi {{item.punicao.toLowerCase()}} do servidor pelo seguinte motivo: {{item.motivo}}
                              </div>
                            </div>
                          </li>
                        </ul>
              </div>
              <div class="tab-pane" id="mensagens">
                <!-- The timeline -->
                <ul class="timeline timeline-inverse">
                  <li class="alert-list" v-for="item in mensagens" :key="item.mensagem">
                      <i class="fa fa-envelope bg-blue"></i>
                      <div class="timeline-item">
                        <span class="time"><i class="fa fa-clock-o"></i>  {{moment(item.data).format('l')}}</span>
                        <h3 class="timeline-header"><a href="#">{{item.postado_por}}</a> enviou uma mensagem</h3>
                        <div class="timeline-header">
                          <small><font size="2pt">Sent to all users</font></small>
                        </div>
                        <div class="timeline-body">
                          {{item.mensagem}}
                        </div>
                      </div>
                    </li>
                  </ul>
              </div>

                  <div class="tab-pane" id="settings">
                    <form class="form-horizontal" v-on:submit="alterarInformacoes" method="post">
					 <div class="form-group">
                        <label for="inputName" class="col-sm-2 control-label">ID</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputName" v-bind:value="username" disabled="">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputName" class="col-sm-2 control-label">Nome</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputName" v-bind:value="nome" disabled="">
                        </div>
                      </div>       
                     <div class="form-group">
                        <label for="inputEmail" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                          <input type="email" class="form-control" id="inputEmail" v-bind:value="email" disabled="">
                        </div>
                      </div>					  
                      <div class="form-group">
                        <label for="inputName" class="col-sm-2 control-label">Data de Nascimento</label>
                        <div class="col-sm-10">
                          <input type="datanascimento" class="form-control" id="inputName" v-bind:value="moment(dataNasc).format('DD/MM/YYYY')" disabled="">
                        </div>
                      </div>					  
                      <div class="form-group">
                        <label for="inputPw" class="col-sm-2 control-label">Senha</label>
                        <div class="col-sm-10">
                          <input name="cpw" type="password" class="form-control" id="inputPw" v-model="senhaAtual" placeholder="Insira sua senha atual">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputExperience" class="col-sm-2 control-label">Nova Senha</label>
                        <div class="col-sm-10">
                          <input name="pw" type="password" class="form-control" id="inputPw" v-model="novaSenha1" placeholder="Insira uma nova senha">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputSkills" class="col-sm-2 control-label">Repetir Nova Senha</label>
                        <div class="col-sm-10">
                          <input name="rpw" type="password" class="form-control" id="inputSkills" v-model="novaSenha2" placeholder="Repita a nova senha">
                        </div>
                      </div>
                      <!-- <div class="form-group">
                      <label for="imagemPerfil" class="col-sm-2 control-label">Imagem de perfil</label>

                      <div class="col-sm-10">
                        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" accept="image/*">
                      </div>
                      </div> -->
                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <button type="submit" class="btn btn-danger" v-on:click="submitFile()">Salvar Alterações</button>
                        </div>
                      </div>
                    </form>
                  </div><!-- /.tab-pane -->
              </div><!-- /.nav-tabs-custom -->
            </div><!-- /.col -->
            <div class="callout callout-success alert-none mgtp-5px" name="alert-success" id="alert-success" role="alert">
                <p class="color-black">Perfil alterado com sucesso.</p>
              </div>
              <div class="callout callout-danger alert-none mgtp-5px" name="alert-success-p" id="alert-success-p" role="alert">
                <p class="color-black">Personagem excluido com sucesso.</p>
              </div>
              <div class="callout callout-danger alert-none mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
                <p class="color-black">Ooops, algo deu errado, tente novamente.</p>
              </div>
              <div class="callout callout-danger alert-none mgtp-5px" name="alert-wrong-char" id="alert-wrong-char" role="alert">
                <p class="color-black"><b>Error!</b> Não foi possível criar o char, tente novamente.</p>
              </div>
              <div class="callout callout-danger alert-none mgtp-5px" name="alert-wrong-senhaat" id="alert-wrong-senhaat" role="alert">
                <p class="color-black"><b>Error!</b> Digite sua senha atual novamente.</p>
              </div>
              <div class="callout callout-danger alert-none mgtp-5px" name="alert-wrong-senhanova" id="alert-wrong-senhanova" role="alert">
                <p class="color-black"><b>Error!</b> Digite novamente sua nova senha.</p>
              </div>
              <div class="callout callout-info alert-none mgtp-5px" name="alert-criando" id="alert-criando" role="alert">
                <p class="color-black">Criando personagem...</p>
              </div>
              <div class="callout callout-success alert-none mgtp-5px" name="alert-criado" id="alert-criado" role="alert">
                <p class="color-black"><b>Success!</b> Personagem criado.</p>
              </div>
              <div class="callout callout-danger alert-none mgtp-5px" name="alert-char-existe" id="alert-char-existe" role="alert">
                <p class="color-black">Nome do personagem já existe, tente outro.</p>
              </div>
              <div class="callout callout-danger alert-none mgtp-5px" name="alert-limite-char" id="alert-limite-char" role="alert">
                <p class="color-black">Sua conta atingiu o número máximo de personagens.</p>
              </div>
          </div><!-- /.row -->
        </div></section>
        <!-- <edit-status v-bind:characters="cLevel"></edit-status> -->
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import MudarNick from '../widgets/modals/MudarNick.vue'
import moment from 'moment'
import axios from 'axios'

moment.locale('pt-br')

export default {
  name: 'dashboard',
  data () {
    return {
      username: '',
      infoClan: {},
      coins: '',
      dataCadastro: '',
      nome: '',
      email: '',
      dataNasc: '',
      senhaAtual: '',
      novaSenha1: '',
      novaSenha2: '',
      classe: 'Fighter',
      newNick: '',
      idGame: '',
      alerts: [],
      characters: [],
      mensagens: [],
      bloqueado: 0,
      selectedFile: null,
      // file: '',
      semChar: true,
      chName: '',
      clan: {
        nome: '',
        tag: 0
      },
      photo: null,
      cLevel: null,
      dev: false
    }
  },

  mounted () {
    let vm = this
    vm.username = localStorage.getItem('username')
    vm.coins = localStorage.getItem('coins')
    vm.dataCadastro = localStorage.getItem('dataCadastro')
    vm.email = localStorage.getItem('email')
    vm.nome = localStorage.getItem('nome')
    vm.dataNasc = localStorage.getItem('dataNasc')
    vm.bloqueado = localStorage.getItem('bloqueado')
    vm.carregarDat()
    vm.checkStatus()
    this.$http.post('get-clan-dashboard', {username: vm.username})
    .then(function (result) {
      if (result.data) {
        vm.infoClan = result.data
      }
    })
    this.$http
        .post('get-photo', {username: this.username})
        .then(function (result) {
          if (result.data) {
            vm.photo = result.data.photo
          } else {
            console.log('Error')
          }
        })
    this.$http.post('home', {username: vm.username})
        .then(function (result) {
          vm.bloqueado = result.data.block
        })
    this.$http.get('get-alerts')
      .then(function (result) {
        vm.alerts = result.data
      })
  },
  methods: {
    excluirDat (charName, usernameExcluir) {
      let vm = this
      $('#confirm').on('click', function () {
        event.preventDefault()
        axios.post('/delete-char', {charname: charName, username: usernameExcluir}
        ).then(function (result) {
          $('#exampleModal').modal('hide')
          if (result.data) {
            $('#alert-success-p').show()
            vm.carregarDat()
            setTimeout(function () {
              $('#alert-success-p').hide()
            }, 5000)
          } else {
            $('#alert-success-p').hide()
          }
        })
      })
    },
    checkStatus (username) {
      let vm = this
      vm.$http.post('check-status', {username: vm.username}
      ).then(function (result) {
        if (result.data) {
          vm.chName = result.data.ChName
        } else {
          console.log('Entrou no else')
        }
      })
    },
    // handleFileUpload () {
    //   this.file = this.$refs.file.files[0]
    // },
    // submitFile () {
    //   let formData = new FormData()
    //   formData.append('username', this.username)
    //   formData.append('file', this.file)
    //   this.$http.post('/upload-image', formData
    //       ).then(function (result) {
    //         if (result.data) {
    //           console.log(result)
    //           console.log('SUCCESS!!')
    //         } else {
    //           $('#alert-success').hide()
    //           $('#alert-wrong').show()
    //           setTimeout(function () {
    //             $('#alert-wrong').hide()
    //           }, 5000)
    //           return false
    //         }
    //       })
    // },
    // onUpload () {
    //   const formData = new FormData()
    //   formData.append('myFile', this.selectedFile, this.selectedFile.name)
    //   this.$http.post('uplolad-image', this.selectedFile)
    // },
    alterarInformacoes (e) {
      $('#alert-carregando').show()
      e.preventDefault()
      this.$http.post('alterar-dados', {username: this.username, senhaAtual: this.senhaAtual, novaSenha1: this.novaSenha1, novaSenha2: this.novaSenha2})
      .then(function (result) {
        if (result.data) {
          $('#alert-success').show()
          setTimeout(function () {
            $('#alert-success').hide()
          }, 5000)
        } else {
          $('#alert-wrong').show()
          setTimeout(function () {
            $('#alert-wrong').hide()
          }, 5000)
          return false
        }
      })
    },
    // criarChar (e) {
    //   let vm = this
    //   $('#alert-criando').show()
    //   e.preventDefault()
    //   this.$http.post('criar-char', {idGame: this.username, classe: this.classe, newNick: this.newNick})
    //   .then(function (result) {
    //     if (result.data.limite === true) {
    //       $('#alert-criando').hide()
    //       $('#alert-limite-char').show()
    //       setTimeout(function () {
    //         $('#alert-limite-char').hide()
    //       }, 5000)
    //       return false
    //     }
    //     if (result.data.existe === true) {
    //       $('#alert-criando').hide()
    //       $('#alert-char-existe').show()
    //       setTimeout(function () {
    //         $('#alert-char-existe').hide()
    //       }, 5000)
    //     } else if (result.data) {
    //       $('#alert-criando').hide()
    //       $('#alert-criado').show()
    //       setTimeout(function () {
    //         $('#alert-criado').hide()
    //         vm.carregarDat()
    //       }, 5000)
    //     } else {
    //       $('#alert-criando').hide()
    //       $('#alert-wrong-char').show()
    //       setTimeout(function () {
    //         $('#alert-wrong-char').hide()
    //       }, 5000)
    //       return false
    //     }
    //   })
    // },
    carregarDat () {
      let vm = this
      this.$http.post('get-characters', {username: vm.username})
      .then(function (result) {
        vm.characters = result.data
        vm.semChar = result.data.semChar
        vm.dev = result.data.dev
      })
    },
    moment (...args) {
      return moment(...args)
    }
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  components: {
    'mudar-nick': MudarNick
  }
}
</script>
<style>
.mgtp-5px{
  margin-top: 5px;
}

.content{
  min-height: 250px;
  padding: 5px;
  margin-right: auto;
  margin-left: -3px;
  padding-left: 15px;
  padding-right: 15px;
}

.content-header{
  margin-left: -10px;
  margin-top: -5px;
  margin-bottom: 5px;
}

.alert-none{
  display: none;
}
</style>
