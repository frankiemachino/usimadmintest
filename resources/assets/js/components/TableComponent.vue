<template>
	<div class="panel">
		<table class="table">
			<thead>
				<tr>
					<th></th>
					<th v-for="field in fields">{{ field.label }}</th>
				</tr>
			</thead>
			<tr v-for="row in rows">
				<td class="ui-table-column--checkbox"><input type="checkbox"></td>
				<td v-for="field in fields">{{ row[field.key] }}</td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default {
		props: ['rows', 'fields']
	}
</script>