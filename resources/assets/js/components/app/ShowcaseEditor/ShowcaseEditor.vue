<template>
	<div id="showcase-editor">
		<se-toolbar></se-toolbar>
		<div class="se-workspace">
			<se-canvas v-if="showcase" :layout="showcase.layout"></se-canvas>
			<se-panels></se-panels>
		</div>
		<se-console :json="showcase"></se-console>
	</div>
</template>
<script>

Vue.component('se-toolbar', require('./Toolbar.vue'));
Vue.component('se-canvas', require('./Canvas.vue'));
Vue.component('se-panels', require('./Panels.vue'));
Vue.component('se-console', require('./Console.vue'));

Vue.component('se-cell', require('./Cell.vue'));

export default {
	mounted() {
		this.load()
	},
	props: ['showcase-id'],
	data: function() {
		return {
			showcase: null,
			isLoading: false
		}
	},
	methods: {
		load() {
			this.isLoading = true
			axios.get(`http://api.usim.dev/v1/showcase/`+ this.showcaseId)
				.then(response => {
					this.isLoading = false
					this.showcase = response.data
					console.log(this.showcase)
				})
				.catch(e => {
					this.errors.push(e)
				})
		}
	}
}

</script>