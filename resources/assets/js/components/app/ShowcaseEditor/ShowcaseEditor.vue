<template>
	<div id="showcase-editor">
		<se-toolbar>
			<se-tool-selector></se-tool-selector>
		</se-toolbar>
		<div class="se-workspace">
			<se-canvas v-if="showcase" :layout="showcase.layout"
				@didClickCell="didClickCell"
				@didClickCanvas="didClickCanvas"
			></se-canvas>
			<se-panels
				:currentCell="cell()"
				:cells="cells"
			></se-panels>
		</div>
		<se-console :json="showcase"></se-console>
	</div>
</template>
<script>

Vue.component('se-toolbar', require('./Toolbar.vue'));

Vue.component('se-tool-selector', require('./Tools/Selector.vue'));

Vue.component('se-canvas', require('./Canvas.vue'));
Vue.component('se-panels', require('./Panels.vue'));
Vue.component('se-console', require('./Console.vue'));
Vue.component('se-cell', require('./Cell.vue'));



var selectorTool = {
	name: "Selector",
	didClickCell: function() {
		console.log('didClickCell')
	},
	didClickCanvas: function() {
		console.log('didClickCanvas')
	}
}

export default {
	mounted() {
		this.load()
	},
	props: ['showcase-id'],
	data: function() {
		return {
			showcase: null,
			isLoading: false,
			currentTool: selectorTool,
			cellId: null
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
		},

		didClickCell: function(cell) {
			this.currentTool.didClickCell(cell)
			this.selectCell(cell)
		},
		didClickCanvas: function() {

			this.currentTool.didClickCanvas()
			// console.log('didClickCanvas')
			//console.log("current tool is " + this.currentTool.name );
		},
		selectCell: function(cell) {
			console.log(cell)
			this.cellId = cell
		},
		cells: function() {
			return this.showcase.layout.cells || []
		},
		cell: function() {
			if(this.showcase) {
				return this.showcase.layout.cells[this.cellId]
			}

			return {}
		}
	}
}

</script>