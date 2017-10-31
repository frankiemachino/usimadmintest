<template>
	<ui-modal :id="modal"
		v-on:submit="submit"
		v-on:reset="resetForm"
	>
		<template slot="title">Create Collection</template>
		<template slot="body">
			<div class="form-group">
				<label for="title">Title:</label>
				<input v-model="form.title" class="form-control" type="text" name="title">
			</div>
			<div class="form-group">
				<label for="description\">Description:</label>
				<textarea  v-model="form.description" class="form-control" type="text" name="description"></textarea>
			</div>
		</template>
		<template slot="footer">
			<ui-button :modal="modal" styling="secondary">Close</ui-button>
			<ui-button :modal="modal" modal-submit="true" styling="primary">Create</ui-button>
		</template>
	</ui-modal>
</template>
<script>
	export default {
		data: function() {
			return {
				modal: "create-collection-modal",
				form: {
					title: '',
					description: ''
				},
			}
		},
		methods: {
			submit() {
				axios.post(`http://api.usim.dev/v1/collection`, this.form)
				.then(response => {
					Bus.$emit('succeed', this.modal)
				})
				.catch(e => {
					this.errors.push(e)
				})
			},
			resetForm() {
				this.form = this.defaultForm
			}
		},
		computed: {
			defaultForm: function() {
				return {
					title: '',
					description: ''
				}
			}
		}
	}
</script>