<template>
	<button @click="clicked" type="button" class="btn" :class='classes'>
		<slot>Default Label</slot>
	</button>
</template>
<script>

export default {
	props: {
		modal: {
			default: null
		},
		'modal-submit': {
			default: false
		},
		styling: {
			default: 'default'
		}
	},
	methods: {
		clicked: function() {
			if(this.modal) {
				if(this.modalSubmit) {
					Bus.$emit('submit', this.modal)
				} else {
					$('#' + this.modal).modal('toggle')
				}
			}
		}
	},

	computed: {
		classes: function() {
			var primaryStyle, secondaryStyle, defaultStyle;

			switch(this.styling) {
				case 'primary':
					primaryStyle = true
					break
				case 'secondary':
					secondaryStyle = true
					break
				default:
					defaultStyle = true
			}

			return {
				'btn-primary': primaryStyle,
				'btn-secondary': secondaryStyle,
				'btn-default': defaultStyle
			}
		}
	}
}

</script>