<template>
	<div class="infobox">
		{{ plant.name }}
	</div>
</template>

<script>
export default {
	name: 'PlantInfo',
	props: {
		plant: {
			image: String,
			name: String,
			health: Number,
		},
	},
};
</script>

<style scoped>
</style>
