<template>

<div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-hidden="true">
	<div v-if="isLoading">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-body ui-loading-spinner">
					<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
					<span class="sr-only">Loading...</span>
				</div>
			</div>
		</div>
	</div>
	<div v-else-if="isSuccessful">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-body ui-loading-spinner">
					Success!
				</div>
			</div>
		</div>
	</div>
	<form v-else>
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">
						<slot name="title">
							Default Title
						</slot>
					</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<slot name="body">
						Default body.
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						Default Footer.
					</slot>
				</div>
			</div>
		</div>
	</form>
</div>

</template>
<script>
	export default {
		props: ['id'],
		mounted: function() {
			var component = this
			
			Bus.$on('submit', function (id) {
				component.isLoading = true
				component.$emit('submit')
			})

			Bus.$on('succeed', function (id) {
				component.succeed()
			})

			$(this.$el).on('hidden.bs.modal', function() {
				component.reset()
			})
		},
		data: function() {
			return {
				isLoading: false,
				isSuccessful: false
			}
		},
		methods: {
			succeed() {
				console.log('success!');
				this.isLoading = false
				this.isSuccessful = true

				var component = this
				setTimeout(function() {
					component.toggle()
				}, 400)
			},
			toggle() {
				$(this.$el).modal('toggle')
			},
			reset() {
				this.$emit('reset')
				Object.assign(this.$data, this.$options.data())

			}
		}
	}
</script>