<template>
	<div class="se-canvas">
		Canvas.

		<se-cell v-for="cell in layout.cells" key="cell.id"
			:cell="cell"
			:canvas="canvas"
		></se-cell>
	</div>
</template>
<script>

export default {
	mounted() {
		window.addEventListener('resize', this.handleResize)
		this.handleResize();
	},
	beforeDestroy: function () {
		window.removeEventListener('resize', this.handleResize)
	},
	props: ['layout'],
	data: function() {
		return {
			canvas: {
				unit: null
			}
		}
	},
	methods: {
		handleResize() {
			// reset unit
			this.canvas = {unit: this.unit()}

			// set height
			this.setCanvasHeight();

		},
		unit: function() {
			console.log("UNIT");
			return this.$el.offsetWidth / 6
		},
		setCanvasHeight: function() {
			for (let cell of this.layout.cells) {
				console.log(cell.size.height)
			}
			console.log('setting canvas height...');
		}
	}
}

</script>