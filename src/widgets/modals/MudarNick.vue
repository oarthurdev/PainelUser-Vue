<template>
 <!-- modal -> mudar nick -->
<div>
<div class="modal fade" id="modalNick" style="display: none;">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span></button>
        <h4 class="modal-title">Mudar Nick</h4>
        </div>
        <div class="modal-body">
        <p><label>Antigo nick</label></p>                      
        <p><input type="text" name="txtNickAntigo" v-bind:value="item.cName" class="form-control nickantigo" readonly="readonly" disabled="disabled" maxlength="10" /></p>
        <p><label>Novo nick</label></p>
        <p><input type="text" name="txtNickNovo" class="form-control nicknovo" maxlength="10" /></p>
        <p><div id="dvModalMudarNIck"></div></p>              
        </div>
        <div class="modal-footer">
        <button type="button" id="btnMudarNick" name="btnMudarNick" class="btn btn-primary pull-left">Mudar</button>
        </div>
    </div>
    <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
</div>
</template>
<script>
export default {
  name: 'mudar-nick',
  data () {
    return {
    }
  }
}
</script>
