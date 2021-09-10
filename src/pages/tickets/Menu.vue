<template>
<div>
  <div class="box box-solid">
    <div class="box-header with-border">
      <h3 class="box-title">Menu</h3>
      <div class="box-tools">
        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
      </div>
    </div>
    <div class="box-body no-padding">
      <ul class="nav nav-pills nav-stacked">
        <li id="alltct"><a href="?page=support"><i class="fa fa-inbox"></i> Todos Tickets</a></li>
        <li id="opentct"><a href="?page=support&amp;open"><i class="fa fa-envelope-o"></i> Abertos <span class="label label-success pull-right"></span></a></li>
        <li id="closetct"><a href="?page=support&amp;closed"><i class="fa fa-file-text-o"></i> Tickets Fechados</a></li>
        <li id="closetct"><a href="?page=support&amp;restaure"><i class="fa fa-inbox"></i> Listar Pedidos de Restaure</a></li>
        <li id="closetct">
          <router-link to="/tickets/open">
          <i class="fa fa-plus"></i> Novo Ticket</router-link></li>
        <li id="closetct"><a href="?page=support&amp;newrestaure"><i class="fa fa-plus"></i> Novo Pedido Restaure</a></li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'menu',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
