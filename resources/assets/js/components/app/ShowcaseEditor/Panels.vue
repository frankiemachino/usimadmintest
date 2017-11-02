<template>
	<div class="se-panels">
		<div class="se-panel">
			<header>Info</header>
			<div>Cells panel...</div>
		</div>
		<div class="se-panel">
			<header>Info</header>
			<div v-if="currentCell">
				<div v-if="cellData.position">
					<h5>Position</h5>
					<div class="form-group">
						<label>X</label>
						<input v-model="cellData.position.x" disabled />
					</div>
					<div class="form-group">
						<label>Y</label>
						<input v-model="cellData.position.y" disabled />
					</div>
				</div>
				<div v-if="cellData.size">
					<h5>Size</h5>
					<div class="form-group">
						<label>Width</label>
						<input v-model="cellData.size.width" disabled /> 
					</div>
					<div class="form-group">
						<label>Height</label>
						<input v-model="cellData.size.height" disabled />
					</div>
				</div>
			</div>
		</div>
		<div class="se-panel">
			<header>Content</header>
			<div v-if="cellData.content">
				<div>
					<div v-for="content in cellData.content">
						<div class="form-group">
							<label>Type</label>
							<input v-model="content.type" disabled />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	props: ['currentCell', 'cells'],
	computed: {
		cellData: function() {
			return Object.assign({}, this.currentCell)
		}
	}
}

// <div>x: {{ currentCell.position.x }}</div>
// 				<div>y: {{ currentCell.position.y }}</div>
// 				<div>width: {{ currentCell.size.width }}</div>
// 				<div>height: {{ currentCell.size.height }}</div>

</script>