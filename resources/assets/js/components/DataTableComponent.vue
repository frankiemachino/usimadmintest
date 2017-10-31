<template>
	<div>
		<div class="ui-data-table card">
			<div class="is-loading" v-if="isLoading">
				<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
				<span class="sr-only">Loading...</span>
			</div>

			<div class="card-body" v-if="results.length == 0">
				There are no results found.
			</div>
			
			<slot v-else v-for="result in results" :result="result">
				Default Result.
			</slot>
		</div>

		<div v-if="pagination" class="ui-paginator card">
			<div class="card-body">
				<div class="ui-paginator__showing-message">
					{{ showingMessage }}
				</div>
				<div class="ui-paginator__links">
					<div class="ui-paginator__link" v-for="n in pagination.total_pages">
						<a href="#" @click.prevent="loadPage(n)" v-if="n != pagination.current_page">
							{{ n }}
						</a>
						<div v-else>
							{{ n }}
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['uri'],
	mounted: function() {
		this.load()
	},
	data: function() {
		return {
			isLoading: false,
			results: [],
			pagination: null,
			query: null
		}
	},
	methods: {
		load() {
			this.isLoading = true

			var uri = this.uri;
			
			if(this.query) {
				uri = uri + "?page=" + this.query.page
			}

			console.log(uri);

			axios.get(uri)
				.then(response => {
					this.isLoading = false
					this.results = response.data.data
					this.pagination = response.data.pagination
				})
				.catch(e => {
				this.errors.push(e)
			})
		},
		loadPage(page) {
			this.query = { page }
			this.load()
			this.query = null
		}
	},
	computed: {
		showingMessage() {

			var maxForPage = this.pagination.current_page * this.pagination.limit

			if(this.pagination.current_page == this.pagination.total_pages) {
				var highest = this.pagination.total_count
			} else {
				var highest = maxForPage
			}

			var lowest = maxForPage - this.pagination.limit + 1
			var range = lowest + " - " + highest
			var total = this.pagination.total_count
			
			return range + " of " + total
		}
	}
}
</script>