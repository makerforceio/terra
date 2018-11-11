<template>
	<div class="container">
		<div class="top-row">
			<div class="image">
				<img :src="plant.image">
			</div>
			<div class="stats">
				<h1 class="name">{{ plant.name }}</h1>
				<Progress :max="plant.expup" :value="plant.exp" class=".exp" />
				<h3 class="lvl">Lvl {{ plant.level }}</h3>
				<h3>Overall Health:</h3>
				<Progress :max="100" :value="plant.health" />
				<h3>Soil Moisture:</h3>
				<Progress :max="100" :value="plant.current_moisture" />
				<h3>Temperature:</h3>
				<Progress :max="100" :value="plant.currrent_temperature" />
				<h3>Light:</h3>
				<Progress :max="100" :value="plant.current_light" />
			</div>
		</div>
		<p class="description">{{ plant.description }}</p>
		<a class="fab" @click="$router.go(-1)">
			<font-awesome-icon icon="times" />
		</a>
	</div>
</template>

<script>
import data from '../data';
import Progress from '../components/Progress.vue';

export default {
	name: 'Plant',
	components: { Progress },
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
		data.plantsDB.get(this.$route.params.id).then((doc) => {
			this.plant = doc;
		}).catch(console.error);
	},
};
</script>

<style scoped>
.container {
	margin: 1rem;
}

.top-row {
	display: flex;
	/* margin: 1rem; */
}

.image {
	max-width: 47.2%;
	flex: 1 1 auto;

	display: flex;
	justify-content: center;
	align-items: center;
}

img {
	max-width: 100%;
	height: auto;
}

.stats {
	margin-left: 0.5rem;
	flex-grow: 1;
}

.name {
	font-style: bold;
	font-size: 1.25rem;
	line-height: 1.6875rem;
	margin: 0;
}

.lvl {
	font-weight: 600;
	font-size: 0.875rem;
	margin-top: 1rem;
	margin-bottom: 0.25rem;
}

h3 {
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	font-size: 0.875rem;
	margin-top: 0.25rem;
	margin-bottom: 0.25rem;
}

.description {
	font-style: normal;
	font-weight: normal;
	line-height: normal;
	color: 0;
	font-size: 0.875rem
}

.fab {
	position: fixed;
	bottom: 1rem;
	left: 1rem;

	cursor: pointer;

	width: 4rem;
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;

	box-shadow: 0.0625rem 0.125rem 0.5rem rgba(0, 0, 0, 0.25);
	background: linear-gradient(180deg, #67FFA4 0%, #44DF9E 0.01%, #2AB87D 100%);
	border-radius: 50%;

	color: #FFFFFF;
	font-size: 2rem;
}
</style>
