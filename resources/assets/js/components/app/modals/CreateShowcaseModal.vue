<template>
	<ui-modal :id="modal"
		v-on:submit="submit"
		v-on:reset="resetForm"
	>
		<template slot="title">Create Showcase</template>
		<template slot="body">
			<div class="form-group">
				<label for="title">Title:</label>
				<input v-model="form.title" class="form-control" type="text" name="title">
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
				modal: "create-showcase-modal",
				form: {
					title: '',
					description: ''
				},
			}
		},
		methods: {
			submit() {
				axios.post(`http://api.usim.dev/v1/showcase`, this.form)
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
					title: ''
				}
			}
		}
	}
</script>