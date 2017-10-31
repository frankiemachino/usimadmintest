<template>
	<ui-data-table uri="http://api.usim.dev/v1/product">
		<div slot-scope="props" class="ui-data-table-results">
			<div class="checkbox-column">
				<div class="card-body">
					<input type="checkbox">
				</div>
			</div>
			<div class="thumbnail-column">
				<div class="card-body">
					<img :src="props.result.image_url" />
				</div>
			</div>
			<div class="main-column">
				<div class="card-body">
					{{ props.result.name }}
				</div>
			</div>
			<div class="status-column">
				<div class="card-body btn-toolbar">
					<div class="btn-group" role="group" aria-label="Basic example">
						<button type="button" class="btn btn-secondary">
							<i class="fa fa-check-circle-o" aria-hidden="true"></i>
						</button>
					</div>
				</div>
			</div>
			<div class="toolbar-column">
				<div class="card-body btn-toolbar">
					<div class="btn-group" role="group" aria-label="Basic example">
						<button type="button" class="btn btn-secondary">
							<i class="fa fa-pencil" aria-hidden="true"></i>
						</button>
						<button type="button" class="btn btn-secondary">
							<i class="fa fa-trash" aria-hidden="true"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</ui-data-table>
</template>