<template>
<div>
  <section class="content-header"><h1>Suporte<small></small></h1></section>
  <section class="content">
  <div class="row">
    <div class="col-md-3">
      <menu-suporte></menu-suporte>
    </div>
  <div class="col-md-9">
              <div class="box box-danger"><div class="box-header with-border"><h3 class="box-title">Novo Ticket</h3><div class="box-tools pull-right">
              </div></div>
			    <!-- /.box-header -->
            <div class="box-body">
			              <blockquote style="font-size: 14px;">
                <p><strong>Sobre Pedidos de Restaure</strong></p>
<p align="justify"> <img src="view/imgs/setinha.gif" alt="" width="11" height="11"> Você está navegando na sessão suporte
ao char.<br><br>Para suporte a perca de item(ns) solicite o pedido de restaure
no local correto <b>(Painel / Suporte / Novo Pedido de
Restaure)</b>, essa opção encontra-se
disponível no menu ao lado esquerdo.
</p>
 </blockquote>
                   </div>	
                <form name="addnotice" method="post">
                  <div class="box-body">
					<div class="form-group">
            <div class="row">
                      <label for="inputEmail3" class="col-sm-2 control-label">Categoria</label>
                      <div class="col-sm-10">
                          <div style="margin-bottom:10px;">
                            <select name="category" class="form-control select2 select2-hidden-accessible" style="width: 100%;" tabindex="-1" aria-hidden="true">
                              <option value="0">Alteração de dados pessoais</option>
                              <option value="1">Bloqueio de conta</option>
                              <option value="2">Contas</option>
                              <option value="3">Denúncias</option>
                              <option value="4">Dúvidas</option>
                              <option value="5">Item Shop / Doações</option>
                              <option value="6">Sistema VIP</option>
                              <option value="7">Sugestão</option>
                              <option value="8">Suporte ao Char</option>
                            </select>
                          </div>
                      </div>
                </div>
              </div>
          <div class="row">
					<div class="form-group">
                      <label for="inputEmail3" class="col-sm-2 control-label">Assunto</label>
                      <div class="col-sm-10">
						<div style="margin-bottom:10px;" class="input-group col-sm-12">
						  <input name="title" id="text" type="text" class="form-control" maxlength="45">
						</div>
                      </div>
                    </div>
            </div>
          <div class="row">
					<div class="form-group">
                      
                      <div class="format-editor">
                      <vue-editor v-model="descricao" placeholder="Digite o que aconteceu aqui." useCustomImageHandler
      @imageAdded="handleImageAdded"></vue-editor>
                      </div>
                    </div>
          </div>
                  </div>
				  <div class="box-footer"><button type="submit" class="btn btn-success pull-right" v-on:click="click">Enviar</button></div>
                </form>
              </div>
		</div>
    </div>
  </section>
</div>
</template>
<script>
import Menu from 'pages/tickets/Menu.vue'
import axios from 'axios'
import { VueEditor } from 'vue2-editor'
export default {
  name: 'open-ticket',
  data () {
    return {
      descricao: '',
      customToolbar: [
          ['bold', 'italic', 'underline'],
          [{'list': 'ordered'}, {'list': 'bullet'}],
          ['image', 'code-block']
      ]
    }
  },
  mounted () {
  },
  methods: {
    click () {
      console.log(this.descricao)
    },
    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      var formData = new FormData()
      formData.append('image', file)

      axios({
        url: 'https://fakeapi.yoursite.com/images',
        method: 'POST',
        data: formData
      })
      .then((result) => {
        let url = result.data.url // Get url from response
        Editor.insertEmbed(cursorLocation, 'image', url)
        resetUploader()
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  components: {
    'menu-suporte': Menu,
    VueEditor
  }
}
</script>
<style>
.format-editor{
  padding-left: 10px;
  padding-right: 15px;
}
</style>
