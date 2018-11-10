<template>
	<div class="container">
		<img :src="plant.image">
		<div class="stats">
			<h1 class="name">{{ plant.name }}</h1>
			<progress :max="plant.expup" :value="plant.exp" class=".exp"></progress>
			<h3 class="lvl">Lvl {{ plant.level }}</h3>
			<h3 class="overall-health">Overall Health:</h3>

		</div>
		<h3>About:</h3>
		<p>{{ plant.description }}</p>
	</div>
</template>

<script>
import data from '../data';

export default {
	name: 'Plant',
	data() {
		return {
			plant: {
				image: '/characters/carrot.png',
				name: 'Broccoli',
				health: 40,
				level: 2,
				exp: 1234,
				expup: 2000,
				description: 'sdfsdfsdfssssssssssssssssssssssssssssss',
			},
		};
	},
	mounted() {
		console.log(this.$route.params.id);
		// eslint-disable-next-line
		data.plantsDB.get(this.$route.params.id).then((doc) => {
			// this.plant = doc;
		}).catch(console.error);
	},
};
</script>

<style scoped>
.container {
	position: absolute;
	top: 1rem;
	left: 1rem;
	right: 1rem;
}

img {
	max-width: 47.2%;
}

.stats {
	position: absolute;
	left: 47.2%;
	top: 0;
}

.name {
	font-style: bold;
	font-size: 1.25rem;
	line-height: 1.6875rem;
	margin: 0;
}

.exp {
	position: absolute;
	top: 1.75rem;
	left: 0;
	right: 0;
}

.lvl {
	position: absolute;
	top: 3.25rem;
	font-weight: 400;
	font-size: 0.875rem;
	margin: 0;
}

.overall-health {
	position: absolute;
	top: 4.8125rem;
	margin: 0;

	font-style: normal;
	font-weight: 600;
	line-height: normal;
	font-size: 0.875;
}

</style>
