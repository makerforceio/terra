<template>
	<div class="infobox">
		<img :src="plant.img" class="character">
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
