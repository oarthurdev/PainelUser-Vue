<template>
<div>
<section class="content-header">
    <h1>
    User Profile
    </h1>
    <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
    <li class="active">User profile</li>
    </ol>
</section>
<section class="content">

      <div class="row">
        <div class="col-md-3">

          <!-- Profile Image -->
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-9">
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#activity" data-toggle="tab">Activity</a></li>
              <li><a href="#settings" data-toggle="tab">Settings</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="activity">
                <p>Activity</p>
              </div>
              <div class="tab-pane" id="settings">
                <form class="form-horizontal" v-on:submit="clickBtn" enctype="multipart/form-data">
                  <div class="form-group">
                    <label for="inputAccName" class="col-sm-2 control-label">Account Name</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputAccName" v-model="username" v-bind:placeholder="idGM" disabled>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword" class="col-sm-2 control-label">Password</label>

                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword" v-model="passwordNew" placeholder="Insira sua nova senha">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputName" class="col-sm-2 control-label">Name</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="name" id="inputName" v-bind:placeholder="nome">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputNick" class="col-sm-2 control-label">Nick</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="nickNew" id="inputNick" v-bind:placeholder="nick">
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
                      <button type="submit" v-on:click="submitFile()" class="btn btn-primary">Salvar</button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /.tab-pane -->
            </div>
            <!-- /.tab-content -->
          </div>
            <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
                <p class="color-black">Ooops, algo deu errado no cadastro, tente novamente.</p>
            </div>
            <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
                <p class="color-black">Dados atualizados com sucesso.</p>
            </div>
            <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
                <p class="color-black">Carregando, espere um pouco....</p>
            </div>
          <!-- /.nav-tabs-custom -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
</section>
</div>
</template>
<script>
/* eslint-disable no-unused-vars */
export default {
  name: 'login',
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      idGM: '',
      cargoGM: '',
      permissaoGM: 0,
      selectedFile: null,
      // file: '',
      token: '0',
      username: '',
      photo: '',
      nick: '',
      nome: ''
    }
  },
  mounted () {
    this.idGM = localStorage.getItem('username')
    this.cargoGM = localStorage.getItem('cargo')
    this.permissaoGM = localStorage.getItem('permissao')
    this.nick = localStorage.getItem('nick')
    this.nome = localStorage.getItem('nome')

    let vm = this
    this.token = localStorage.getItem('token')
    this.username = localStorage.getItem('username')
    this.$http
        .post('get-photo', {username: this.username})
        .then(function (result) {
          if (result.data) {
            console.log(result.data)
            vm.photo = result.data.photo
          } else {
            console.log('Error')
          }
        })
  },
  methods: {
    // handleFileUpload () {
    //   this.file = this.$refs.file.files[0]
    // },
    // submitFile () {
    //   let formData = new FormData()
    //   formData.append('username', this.idGM)
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
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      let vm = this
      console.log('submit')
      this.$http
        .post('profile', {username: this.idGM, passwordNew: this.passwordNew, name: this.name, nickNew: this.nickNew})
        .then(function (result) {
          console.log(result)
          if (result.data) {
            console.log(result.data)
            $('#alert-carregando').hide()
            $('#alert-success').show()
            setTimeout(function () {
              $('#alert-success').hide()
            }, 5000)
          } else {
            $('#alert-carregando').hide()
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 5000)
            return false
          }
        })
    },
    // onFileChanged (event) {
    //   const file = event.target.files[0]
    // },
    // onUpload () {
    //   const formData = new FormData()
    //   formData.append('myFile', this.selectedFile, this.selectedFile.name)
    //   this.$http.post('uplolad-image', this.selectedFile)
    // }
  }
}
</script>
<style>
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
