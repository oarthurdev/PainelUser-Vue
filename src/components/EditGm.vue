<template>
<div class="modal fade" id="editGm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel3" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel3"><b>Editar cadastro</b></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
            <form id="form-editar-gm" name="form-editar-gm">
                <div class="form-group">
                    <label for="idGM">Account</label>
                    <input type="text" class="form-control" id="idGM" v-model="idGM" aria-describedby="idGMHelp" disabled>
                </div>
                <div class="form-group">
                    <label for="nickGM">Nick</label>
                    <input type="text" class="form-control" v-model="nickGM" id="nickGM" placeholder="Digite um nick" required>
                </div>
                <div class="form-group">
                    <label for="nickGM">Nome</label>
                    <input type="text" class="form-control" v-model="nomeGM" id="nomeGM" placeholder="Digite um nome" required>
                </div>
                <div class="form-group">
                    <label for="cargoGM">Cargo</label>
                    <select class="form-control" v-model="cargoGM" id="cargoGM" required>
                        <option value="Gestor">Gestor</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Game Master">Game Master</option>
                    </select>
                </div>
                <div class="form-group" id="hidePermission">
                    <label for="permissaoGM">Permissao</label>
                    <select class="form-control" v-model="permissaoGM" id="permissaoGM" required>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="cargoGM">Ativar conta?</label>
                    <select class="form-control" v-model="activated" id="activated" required>
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>
                </div>
            </form>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" id="confirm2" name="confirm2">Salvar</button>
        </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'edit-gm',
  data () {
    return {
      activated: 'true',
      cargoGM: 'Gestor',
      permissaoGM: '3'
    }
  }
}
</script>
