<template>
	<ui-modal :id="modal"
		v-on:submit="submit"
		v-on:reset="resetForm"
		v-on:populate="populate"
	>
		<template slot="title">Add Product</template>
		<template slot="body">
			<div class="form-group">
				<label for="name">Name:</label>
				<input class="form-control" type="text" name="name" v-model="form.name">
			</div>
			<div class="form-group">
				<label for="description\">Description:</label>
				<textarea class="form-control" type="text" name="description"></textarea>
			</div>
			<div class="form-group disabled">
				<label for="linkurl">Link URL:</label>
				<input class="form-control" type="text" name="linkurl" v-model="form.linkurl" disabled>
			</div>
			<div class="form-group disabled">
				<label for="imageurl">Image URL:</label>
				<input class="form-control" type="text" name="imageurl" v-model="form.imageurl" disabled>
			</div>
			<div class="form-group disabled">
				<label for="price">Price:</label>
				<input class="form-control" type="text" name="price" v-model="form.price" disabled>
			</div>
			<div class="form-group disabled">
				<label for="network">Network:</label>
				<input class="form-control" type="text" name="network" v-model="form.network" disabled>
			</div>
			<div class="form-group disabled">
				<label for="uuid">UUID:</label>
				<input class="form-control" type="text" name="uuid" v-model="form.uuid" disabled>
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
				modal: 'add-product-modal',
				form: {
					name: '',
					linkurl: '',
					imageurl: '',
					price: '',
					network: '',
					uuid: ''
				}
			}
		},
		watch: {
			product: function (newProduct) {
				// console.log('proof')
				this.form = this.product
    		}
		},
		methods: {
			submit() {
				axios.post(`http://api.usim.dev/v1/product`, this.form)
				.then(response => {
					Bus.$emit('succeed', this.modal)
				})
				.catch(e => {
					this.errors.push(e)
				})
			},
			populate(product) {
				this.form = product
			},
			resetForm() {
				this.form = this.defaultForm
			}
		},
		computed: {
			defaultForm: function() {
				return {
					name: '',
					linkurl: '',
					imageurl: '',
					price: '',
					network: '',
					uuid: ''
				}
			}
		}
	}
</script>