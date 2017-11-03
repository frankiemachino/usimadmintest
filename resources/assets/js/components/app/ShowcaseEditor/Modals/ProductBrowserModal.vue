<template>
	<ui-modal :id="modal"
		v-on:submit="submit"
		v-on:reset="resetForm"
	>
		<template slot="title">Product Browser</template>
		<template slot="body">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="form-group">
							<input v-model="form.title" class="form-control" type="text" name="title">
						</div>
					</div>
					<div class="col-md-4">
					</div>

					<div class="col-md-8">
						<div class="se-product-browser-products">
							<div class="se-product-browser-products-cell" v-for="product in products">
								<div class="se-product-browser-products-cell-content">
									
								</div>
								<!-- {{ product.name }} -->
							</div>
						</div>
					</div>
				</div>
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
		mounted: function() {
			this.fetchProducts()
		},
		data: function() {
			return {
				modal: "product-browser-modal",
				form: {
					title: '',
					description: ''
				},
				products: []
			}
		},
		methods: {
			fetchProducts() {
				axios.get(`http://api.usim.dev/v1/product`)
				.then(response => {
					console.log(response.data)
					this.products = response.data.data
				})
				.catch(e => {
					this.errors.push(e)
				})
			},
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