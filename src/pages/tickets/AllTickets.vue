<template>
<div>
  <section class="content-header"><h1>Suporte<small></small></h1></section>
  <section class="content"><div class="row"><div class="col-md-3">
            <menu-suporte></menu-suporte>
            </div><div class="col-md-9">
              <div class="box box-primary">
                <div class="box-header with-border"><h3 class="box-title">Todos Tickets</h3></div>
                <div class="box-body">
					<div id="dataTables_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer"><div class="row"><div class="col-sm-6"><div class="dataTables_length" id="dataTables_length"><label>Show <select name="dataTables_length" aria-controls="dataTables" class="form-control input-sm select2-hidden-accessible" tabindex="-1" aria-hidden="true"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select><span class="select2 select2-container select2-container--default" dir="ltr" style="width: 62px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-dataTables_length-dy-container"><span class="select2-selection__rendered" id="select2-dataTables_length-dy-container" title="10">10</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span> entries</label></div></div><div class="col-sm-6"><div id="dataTables_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="dataTables"></label></div></div></div><div class="row"><div class="col-sm-12"><table id="dataTables" class="table table-hover table-striped dataTable no-footer" role="grid" aria-describedby="dataTables_info">
						<thead>
							<tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="dataTables" rowspan="1" colspan="1" aria-sort="ascending" aria-label="#: activate to sort column descending" style="width: 70px;">#</th><th class="sorting" tabindex="0" aria-controls="dataTables" rowspan="1" colspan="1" aria-label="Autor: activate to sort column ascending" style="width: 134px;">Autor</th><th class="sorting" tabindex="0" aria-controls="dataTables" rowspan="1" colspan="1" aria-label="Título: activate to sort column ascending" style="width: 139px;">Título</th><th class="sorting" tabindex="0" aria-controls="dataTables" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 147px;">Status</th><th class="sorting" tabindex="0" aria-controls="dataTables" rowspan="1" colspan="1" aria-label="Data: activate to sort column ascending" style="width: 121px;">Data</th></tr>
						</thead>
						<tbody><tr class="odd"><td valign="top" colspan="5" class="dataTables_empty">No data available in table</td></tr></tbody></table></div></div><div class="row"><div class="col-sm-5"><div class="dataTables_info" id="dataTables_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div><div class="col-sm-7"><div class="dataTables_paginate paging_simple_numbers" id="dataTables_paginate"><ul class="pagination"><li class="paginate_button previous disabled" id="dataTables_previous"><a href="#" aria-controls="dataTables" data-dt-idx="0" tabindex="0">Previous</a></li><li class="paginate_button next disabled" id="dataTables_next"><a href="#" aria-controls="dataTables" data-dt-idx="1" tabindex="0">Next</a></li></ul></div></div></div></div>
				</div>
			</div>
		</div></div>
  </section>
</div>
</template>
<script>
import Menu from 'pages/tickets/Menu.vue'
export default {
  name: 'all-tickets',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    'menu-suporte': Menu
  }
}
</script>
