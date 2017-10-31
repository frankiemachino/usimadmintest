<template>
	<div class="product-search-component container-fluid">
		<h1>Product Search</h1>
		<div class="product-search-runner">
			<div class="product-search-input">
				<input v-model="terms" @keyup.enter.stop.prevent="submitSearch" class="form-control" />
			</div>
			<div class="product-search-filter">
				<a @click="toggle" href="#" class="filters-toggle">
					<i v-if="open" class="fa fa-close fa-lg" aria-hidden="true"></i>
					<i v-else class="fa fa-filter fa-lg" aria-hidden="true"></i>
				</a>
				<transition name="slide-fade">
					<div v-show="open" class="filters-content card">
						<div class="card-body">
							<h5 class="card-title">Networks</h5>
							<div class="card-text">
								<div class="form-check form-check-inline">
									<label class="form-check-label">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="rakuten">Rakuten
									</label>
								</div>
								<div class="form-check form-check-inline">
									<label class="form-check-label">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="commission-junction">Commission Junction
									</label>
								</div>
								<div class="form-check form-check-inline">
									<label class="form-check-label">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="pepperjam">Pepperjam
									</label>
								</div>
							</div>
						</div>
					</div>
				</transition>
  
			</div>
		</div>

		<div class="product-search-body">
			<div class="product-results card">
				<div class="is-loading" v-if="isSearching">
					<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
					<span class="sr-only">Loading...</span>
				</div>

				<div class="card-body" v-if="results.length == 0">
					There are no results found.
				</div>
				<div v-else class="product-result" v-for="result in results">
					<div class="product-result-image-column">
						<img :src="result.imageurl" />
					</div>
					<div class="result-main-column">
						{{ result.name }}
					</div>
					<div>
						<div class="btn-group" role="group" aria-label="tools">
							<ui-button modal="add-product-modal" :modal-data="result" styling="primary">
								<i class="fa fa-plus" aria-hidden="true"></i>
								Add Product
							</ui-button>
						</div>
					</div>
				</div>
			</div>
		</div>



		<div class="product-search-footer">
			This is the footer...
		</div>

		<usim-add-product-modal></usim-add-product-modal>
	</div>
</template>

<script>

export default {
	data: function() {
		return {
			open: false,
			isSearching: false,
			results: [],
			terms: ""
		}
	},
	methods: {
		toggle() {
			this.open = ! this.open;
		},

		submitSearch() {
			this.isSearching = true
			axios.get(`http://api.usim.dev/v1/productReference/`+ this.terms)
				.then(response => {
					this.isSearching = false
				// JSON responses are automatically parsed.
					this.results = response.data
				})
				.catch(e => {
					this.errors.push(e)
				})
		}
	}
}

</script>