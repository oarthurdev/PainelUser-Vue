<template>
<div>
    <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
</div>
</div>
</div>
<div class="login-box">
    <center><a href="#" class="logo">      
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b><font size="10">OmniaPK</font></b></span>
    </a></center><br>
    <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong-cad" id="alert-wrong-cad" role="alert">
      <p class="color-black"><b>Error!</b> Algo deu errado, tente novamente.</p>
    </div>
    <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-user-existe" id="alert-user-existe" role="alert">
      <p class="color-black"><b>Error!</b> Este username já está cadastrado, tente outro.</p>
    </div>
    <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-email-existe" id="alert-email-existe" role="alert">
      <p class="color-black"><b>Error!</b> Este email já está cadastrado, tente outro.</p>
    </div>
    <div class="callout callout-info alert-logando mgtp-5px" name="alert-cadastrando" id="alert-cadastrando" role="alert">
      <p class="color-black">Cadastrando conta...</p>
    </div>
    <div class="callout callout-success alert-logando mgtp-5px" name="alert-criado-acc" id="alert-criado-acc" role="alert">
      <p class="color-black"><b>Success!</b> Conta cadastrada.</p>
      </div>
  <div class="login-box-body">
    <p class="login-box-msg">Cadastre sua nova conta</p>
    <form v-on:submit="cadastrarConta" method="post">
      <div class="form-group has-feedback">
        <input type="text" required class="form-control" v-model="username" placeholder="Login" maxlength="10">
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="text" required class="form-control" v-model="nome" placeholder="Nome">
		<span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="email" required class="form-control" v-model="email" placeholder="E-mail">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" required v-model="password" class="form-control" placeholder="Password" maxlength="15">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <label for="txtNasc" class="control-label">Data de Nascimento:</label>
        <input type="tel" required v-model="dataNasc" class="form-control" v-mask="'##/##/####'" placeholder="dd/mm/yyyy">
      </div>
      <div class="form-group has-feedback">
        <select v-model="perguntaS" required class="form-control" placeholder="Pergunta secreta"><option value="">Selecione uma pergunta secreta</option><option value="7">Onde seus pais se conheceram?</option><option value="8">Quais são os 3 primeiros dígitos do seu CPF?</option><option value="9">Qual o nome do seu animal de estimação?</option></select>
      </div>
      <div class="form-group has-feedback">
        <input type="text" required v-model="respostaS" class="form-control" placeholder="Resposta secreta" maxlength="50">
      </div>        
      <div class="row">
        <div class="col-xs-8"></div>
        <div class="col-xs-4">
          <button class="btn btn-warning btn-block btn-flat">Cadastrar</button>
        </div>
      </div>
      </form>

      <div class="row" style="margin: 0; padding:0; margin-top:10px;">
        <span id="SPRequeridos" class="col-sm-12" style="margin:0; padding:0;"></span>
      </div>      
      <router-link to="/login">
        <a href="/login">Página inicial</a>
      </router-link>
  </div>
  <!-- /.login-box-body -->
</div>
</div>
</template>
<script>
import VueTheMask from 'vue-the-mask'
import Vue from 'vue'
Vue.use(VueTheMask)

export default {
  name: 'cadastrar',
  data () {
    return {
      msgHello: 'Hello',
      username: '',
      password: '',
      email: '',
      nome: '',
      dataNasc: '',
      perguntaS: '',
      respostaS: ''
    }
  },
  mounted () {
  },
  methods: {
    cadastrarConta (e) {
      e.preventDefault()
      $('#alert-cadastrando').show()
      this.$http.post('cadastrar-conta', {username: this.username, password: this.password, email: this.email, nome: this.nome, dataNasc: this.dataNasc, perguntaS: this.perguntaS, respostaS: this.respostaS})
      .then(function (result) {
        console.log(result.data)
        if (result.data.existe === true) {
          $('#alert-criado-acc').hide()
          $('#alert-cadastrando').hide()
          $('#alert-user-existe').show()
          setTimeout(function () {
            $('#alert-user-existe').hide()
          }, 5000)
          return false
        }
        if (result.data.existe2 === true) {
          $('#alert-criado-acc').hide()
          $('#alert-cadastrando').hide()
          $('#alert-email-existe').show()
          setTimeout(function () {
            $('#alert-email-existe').hide()
          }, 5000)
          return false
        }
        if (result.data) {
          $('#alert-cadastrando').hide()
          $('#alert-criado-acc').show()
          setTimeout(function () {
            $('#alert-criado-acc').hide()
          }, 5000)
        } else {
          $('#alert-cadastrando').hide()
          $('#alert-criado-acc').hide()
          $('#alert-wrong-cad').show()
          setTimeout(function () {
            $('#alert-wrong-cad').hide()
          }, 5000)
        }
      })
    }
  }
}
</script>
<style scoped>
.login-box{
  margin-top: 20px;
}

#alert-wrong-cad{
  display: none;
}

#alert-cadastrando{
  display: none;
}

#alert-criado-acc{
  display: none;
}

#alert-user-existe{
  display: none;
}

#alert-email-existe{
  display: none;
}
</style>
