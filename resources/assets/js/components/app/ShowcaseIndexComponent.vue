<template>
	<div class="showcase-index-component container-fluid">
		<div class="ui-screen-title-row">
			<h2>Showcase Manager</h2>
			<ui-button modal="create-showcase-modal" styling="primary">Create Showcase</ui-button>
		</div>
		<usim-showcase-data-table></usim-showcase-data-table>
		<usim-create-showcase-modal></usim-create-showcase-modal>
	</div>
</template>

<script>
export default {
	methods: {
	}
}
</script>