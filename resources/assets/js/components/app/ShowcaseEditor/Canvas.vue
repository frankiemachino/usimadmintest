<template>
	<div class="se-canvas" @click="didClickCanvas" :style="style()">
		Canvas.

		<se-cell v-for="(cell, index) in layout.cells"
			:canvas="canvas"
			:cell="cell"
			:index="index"
			:key="index"
			@didClickCell="didClickCell"
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
			height: 0,
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
			return this.$el.offsetWidth / 6
		},

		setCanvasHeight: function() {
			var max = 0;
			var bottom;
			for (let cell of this.layout.cells) {
				bottom = cell.size.height + cell.position.y
				if(bottom > max) {
					max = bottom
				}
			}

			var height = max * this.unit()
			this.height = height
		},

		style: function() {
			return {
				height: this.height + 'px'
			}
		},

		didClickCell: function(cell) {
			this.$emit('didClickCell', cell)
		},
		didClickCanvas: function() {
			this.$emit('didClickCanvas')
		}
	}
}

</script>