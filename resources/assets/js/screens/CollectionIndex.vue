<template>
	<div>
		<!-- Button trigger modal -->
		<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#createCollectionModal">
		  Launch demo modal
		</button>

		<ui-screen title="Collection">
			<div slot="buttons">
				
				<ui-button :didClick="didClickCreateCollectionButton">Create Collection</ui-button>
			</div>

			<div slot="panels">
				<ui-table
					:rows="rows"
					:fields="fields"
				></ui-table>
			</div>
		</ui-screen>

		<ui-modal id="createCollectionModal"></ui-modal>
	</div>

</template>
<script>

	export default {
		methods: {
			didClickCreateCollectionButton() {
				console.log('did click create collection button');
			}
		},
		data: function() {
			return {
				rows: [
					{
						name: 'Example',
						id: 1
					},
					{
						name: 'Whatever',
						id: 2
					}
				],
				fields: [
					{
						label: "Name",
						key: "name"
					},
					{
						label: "another",
						key: "id"
					}
				]
			}
		}
	}
</script>