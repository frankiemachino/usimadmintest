<template>
	<div class="collection-index-component container-fluid">
		<div class="ui-screen-title-row">
			<h2>Collection Manager</h2>
			<ui-button modal="create-collection-modal" styling="primary">Create Collection</ui-button>
		</div>
		<usim-collection-data-table></usim-collection-data-table>
		<usim-create-collection-modal></usim-create-collection-modal>
	</div>
</template>

<script>
export default {
	methods: {
	}
}
</script>