<template>
	<div class="container-fluid">
		<h2>{{ title }}</h2>

		<div class="pull-right">
			<slot name="buttons">
				Default Buttons.
			</slot>
		</div>
		<div class="form-group clearfix"></div>
		<div>
			<slot name="panels">
				Default Buttons.
			</slot>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['title']
	}
</script>