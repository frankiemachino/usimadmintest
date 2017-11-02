<template>
	<div class="se-cell" @click="didClick" :style="style">
		<div class="se-cell-content" v-for="content in cell.content" :style="resolveContentStyle(content)">
			<!-- <img v-if="content.type == 'image'" :src="content.image.url" /> -->
			<img v-if="content.type == 'product'" :src="content.product.image.url" />
		</div>
	</div>
</template>
<script>
export default {
	props: ['cell', 'canvas', 'index'],
	methods: {
		didClick: function() {
			this.$emit('didClickCell', this.index)
		},
		resolveContentStyle(content) {

			if(false) {
				return {
					left: content.position.x + 'px',
					top: content.position.y + 'px',
					width: content.size.width + 'px',
					height: content.size.height + 'px'
				}
			}
			return {}
		}
	},
	computed: {
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