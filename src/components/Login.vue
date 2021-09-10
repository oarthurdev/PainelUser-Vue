<template>
<div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <form name="banaccount" method="post">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title" id="myModalLabel">Esqueci minha senha</h4>
        </div>
        <div class="modal-body">
          <div class="row" style=""><div class="col-sm-2">Conta</div><div class="col-sm-10"><input name="accountname" class="form-control input-sm col-sm-12" v-model="idGame" placeholder="Digite sua ID in-game" type="text"></div></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-success" v-on:click="forgotPassword">Confirm</button>
        </div>
      </form> 
    </div>
    <div class="callout callout-info alert-logando mgtp-5px" name="alert-recuperando" id="alert-recuperando" role="alert">
      <p class="color-black">Recuperando..</p>
    </div>
    <div class="callout callout-success alert-logando mgtp-5px" name="alert-envio" id="alert-envio" role="alert">
      <p class="color-black"><b>Success!</b> Dados enviados para o e-mail.</p>
    </div>
  </div>
</div>
  <div class="login-box">
    <div class="login-logo" style="margin-bottom: -50px;">
      <img src="/static/img/logo.png" />
    </div>
          <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
        <p class="color-black">Usuário ou senha incorretos.</p>
      </div>
      <div class="callout callout-danger alert-ban mgtp-5px" name="alert-ban" id="alert-ban" role="alert">
        <p class="color-black">Conta banida.</p>
      </div>
      <div class="callout callout-danger alert-ban mgtp-5px" name="alert-offline" id="alert-offline" role="alert">
        <p class="color-black">Você está offline, veja sua conexão com a internet.</p>
      </div>
    <!-- /.login-logo -->
    <div class="login-box-body" style="background: #35303d !important;">
        <p class="login-box-msg" style="color: #fff;">Faça o login para acessar o painel</p>
        <form name="loginpt" v-on:submit="clickBtn" method="post">
          <div class="form-group has-feedback">
            <input name="account" class="form-control" v-model="username" placeholder="Account">
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input name="password" type="password" v-model="password" class="form-control" placeholder="Password">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              
            </div><!-- /.col -->
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Entrar</button>
            </div><!-- /.col -->
          </div>
          
      
        </form>
        <a href="#" data-toggle="modal" data-target="#myModal">Esqueci minha senha</a><br>		
        <router-link to="/cadastrar">
          <a href="/cadastrar" class="text-center">Cadastrar uma nova conta</a><br>
        </router-link>
      </div>
    <!-- /.login-box-body -->
  </div>
  
</div>
              <!-- </div>            
          </div>
      </div>
  </div>   -->
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      'dados': [],
      'activated': 0,
      'idGame': '',
      'username': '',
      'password': '',
      'token': localStorage.getItem('token')
    }
  },
  mounted () {
    if (this.token != null) {
      window.location.href = '/home'
    }
    // this.$bus.$on('modal-open', (args) => {
    //   // TODO: args가 올바른지 확인해야함
    //   this.type = args.type
    //   this.title = args.title
    //   this.description = args.description
    //   this.confirmText = args.confirmText || '저장 후 닫기'
    //   this.cancelText = args.cancelText || '닫기'
    //   this.confirmBeforeHook = args.confirmBefore
    //   this.confirmAfterHook = args.confirmAfter
    //   this.cancelBeforeHook = args.cancelBefore
    //   this.cancelAfterHook = args.cancelAfter
    // })
    // $('#bsModal').modal('show')
    // $('#bsModal').on('show.bs.modal', (e) => {
    // })

    // $('#bsModal').on('hidden.bs.modal', (e) => {
    //   this.confirmAfterHook()
    //   this.cancelAfterHook()
    //   this.resetProperties()
    // })
  },
  methods: {
    forgotPassword (e) {
      $('#alert-recuperando').show()
      e.preventDefault()
      this.$http.post('forgot-password', {username: this.idGame})
      .then(function (result) {
        if (result.data) {
          $('#alert-recuperando').hide()
          $('#alert-envio').show()
          setTimeout(function () {
            $('#alert-envio').hide()
          }, 5000)
        } else {
          console.log('Não enviou o e-mail')
        }
      })
    },
    clickBtn (e) {
      e.preventDefault()
      try {
        this.$http.post('login', {username: this.username, password: this.password})
        .then(function (result) {
          if (result.data.block === 1) {
            $('#alert-carregando').hide()
            $('#alert-ban').show()
            setTimeout(function () {
              $('#alert-ban').hide()
            }, 5000)
            return false
          } else if (result.data.dados) {
            console.log(result.data)
            localStorage.setItem('username', result.data.dados.username)
            localStorage.setItem('coins', result.data.coins)
            localStorage.setItem('dataCadastro', result.data.dados.created_at)
            localStorage.setItem('email', result.data.dados.email)
            localStorage.setItem('token', result.data.dados.token)
            localStorage.setItem('nome', result.data.dados.name)
            localStorage.setItem('dataNasc', result.data.dados.birth_date)
            localStorage.setItem('bloqueado', result.data.block)
            window.location.href = '/home'
          } else {
            $('#alert-carregando').hide()
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 5000)
            return false
          }
        })
      } catch (e) {
        $('#alert-carregando').hide()
        $('#alert-offline').show()
        setTimeout(function () {
          $('#alert-offline').hide()
        }, 5000)
        return false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body{
  background-image: url("/static/img/bg.jpg") !important;
}
</style>
<style scoped>
h1, h2 {
  font-weight: normal;
}

#alert-offline{
  display: none;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#alert-wrong{
  display: none;
}

#alert-existe{
  display: none;
}

#alert-desativado{
  display: none;
}


#alert-success{
  display: none;
}

#alert-carregando{
  display: none;
}

#alert-recuperando{
  display: none;
}

#alert-envio{
  display: none;
}

.logoLogin{
  margin-left: 100px;
}

.mgtp-5px{
  margin-top: 5px;
}

.form-login-class{
  width: 510px;
  margin: 0 auto;
  margin-top: 130px;
}

.alert-ban{
  display: none;
}

.div-alert-envia-email{
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 1px;
  height: 55px;
  margin-top: -10px;
  display: none;
}
</style>
