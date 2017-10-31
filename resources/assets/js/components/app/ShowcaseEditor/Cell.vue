<template>
	<div class="se-cell" :style="style">
		Cell.

<!-- 		{{ cell.position.x }}
		{{ cell.position.y }}

		{{ cell.size.width }}
		{{ cell.size.height }}
 -->
	</div>
</template>
<script>
export default {
	props: ['cell', 'canvas'],
	computed: {
		test: function() {
			console.log("TEST :: ");
			console.log(this.canvas.unit);
		},
		style: function() {
			return {
				left: this.cell.position.x * this.canvas.unit + 'px',
				top: this.cell.position.y * this.canvas.unit + 'px',
				width: this.cell.size.width * this.canvas.unit + 'px',
				height: this.cell.size.height * this.canvas.unit + 'px'
			}
		}
	}
}
</script>