<template>
    <div class="ui-layout">
    	<div class="ui-layout-menu">
            <a href="/">Dashboard</a>
            <a href="configuration">Configuration</a>
            <a href="products">Products</a>
            <a href="collections">Collections</a>
            <a href="showcases">Showcases</a>
    	</div>
    	<div class="ui-layout-content">
		    <div class="ui-layout-bar">
                
		    </div>
		    <div class="ui-layout-body">
                <slot>Default Content.</slot>
            </div>
    	</div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
