<template>
	<div class="container">
		<img :src="plant.image">
		<h1 class="name">{{ plant.name }}</h1>
		<h3 class="lvl">Lvl {{ plant.lvl }}</h3>
		<h3 class="exp">Exp:</h3>
		<progress :max="plant.expup" :value="plant.exp"></progress>
		<h3>About:</h3>
		<p>{{ plant.description }}</p>
	</div>
</template>

<script>
export default {
	name: 'Plant',
	data() {
		return {
			plant: {
				image: '../assets/image.png',
				name: 'Broccoli',
				health: 40,
				exp: 1234,
				expup: 2000,
				description: 'sdfsdfsdfssssssssssssssssssssssssssssss',
			},
		};
	},
};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: center;
}

</style>
