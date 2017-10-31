<template>
	<div class="container-fluid">
		<div class="se-console">
			<pre>
			{{ json }}
			</pre>
		</div>
	</div>
</template>
<script>
export default {
	props: ['json']
}
</script>