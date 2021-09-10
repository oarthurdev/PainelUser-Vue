<template>
<div>
  <section class="content-header">
    <h1>
      Editar Status do Personagem
      <small>{{nick}}</small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="active">Editar Status</li>
    </ol>
  </section>
  <section class="content">
  <div class="box box-primary" data-widget="box-widget">
      <div class="box-body">
        <form id="form-edit-status" name="form-edit-status" v-on:submit="clickBtn">
        <div class="form-group">
          <p><label>Força</label></p>                        
          <p><input type="text" pattern="\d*" v-model="status.forca" name="StatusForca" id="StatusForca" class="form-control" maxlength="4"/></p>
        </div>
        <div class="form-group">
          <p><label>Inteligência</label></p>                        
          <p><input type="text" pattern="\d*" v-model="status.inteligencia" name="StatusInteligencia" id="StatusInteligencia" class="form-control" maxlength="4"/></p>
        </div>
        <div class="form-group">
          <p><label>Talento</label></p>                        
          <p><input type="text" pattern="\d*" v-model="status.talento" name="StatusTalento" id="StatusTalento" class="form-control" maxlength="4"/></p>
        </div>
        <div class="form-group">
          <p><label>Agilidade</label></p>                        
          <p><input type="text" pattern="\d*" v-model="status.agilidade" name="StatusAgilidade" id="StatusAgilidade" class="form-control" maxlength="4"/></p>
        </div>
        <div class="form-group">
          <p><label>Vitalidade</label></p>                        
          <p><input type="text" pattern="\d*" v-model="status.vitalidade" name="StatusVitalidade" id="StatusVitalidade" class="form-control" maxlength="4"/></p>
        </div>
        <div class="form-group">
          <p><label>Pontos Restantes</label></p>                        
          <p><input type="text" pattern="\d*" v-model="status.total" name="total" id="total" class="form-control" maxlength="4" disabled/></p>
        </div>
        <div class="form-group">
          <button type="submit" id="btnAtualizarStatus" name="btnAtualizarStatus" class="btn btn-primary pull-left">Atualizar</button>
        </div>
      </form>
    </div>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px alert" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">Ooops, algo deu errado, tente novamente.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px alert" name="alert-success" id="alert-success" role="alert">
  <p class="color-black">Status atualizados com sucesso</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px alert" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Carregando, espere um pouco....</p>
  </div>
  </section>
</div>
</template>
<script>
export default {
  name: 'edit-status',
  data () {
    return {
      nick: '',
      status: {
        forca: 0,
        inteligencia: 0,
        talento: 0,
        agilidade: 0,
        vitalidade: 0,
        total: 0
      },
      nome: '',
      level: 0
    }
  },
  methods: {
    clickBtn (e) {
      console.log(status)
      console.log(status.forca)
      e.preventDefault()
      let vm = this
      this.$http.post('edit-status', {nome: vm.nome, level: vm.level, forca: vm.status.forca, inteligencia: vm.status.inteligencia, talento: vm.status.talento, agilidade: vm.status.agilidade, vitalidade: vm.status.vitalidade, total: vm.status.total})
      .then(function (result) {
        console.log('Entrou no then')
        if (result) {
          console.log('Entrou no if result')
        }
      })
    }
  },
  mounted () {
    let vm = this
    vm.nick = vm.$route.params.nick
  }
}
</script>

<style>
.alert{
  display: none;
}
</style>
