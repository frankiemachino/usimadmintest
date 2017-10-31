<template>
	<div class="collection-index-component container-fluid">
		<div class="ui-screen-title-row">
			<h2>Product Manager</h2>
		</div>
		<usim-product-data-table></usim-product-data-table>
	</div>
</template>

<script>
export default {
	props: ['product'],
	methods: {
	}
}
</script>