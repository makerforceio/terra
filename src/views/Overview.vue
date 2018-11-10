<template>
	<div class="container">
		<Status class="status"
			:playerName="playerName"
			:score="score" />
		<div class="plantlist">
			<PlantInfo v-for="plant in plants" :plant="plant" :key="plant.id"/>
		</div>
	</div>
</template>

<script>
// import data from '../data';
import PlantInfo from '@/components/PlantInfo.vue';
import Status from '@/components/Status.vue';

export default {
	name: 'Overview',
	components: {
		PlantInfo,
		Status,
	},
	created() {
	},
	data() {
		return {
			playerName: '',
			score: '',
			plants: [
				{
					name: 'Cucumber',
					health: 50,
					image: '../assets/logo.png',
					level: 20,
					id: 0,
				},
				{
					name: 'Tomato',
					health: 35,
					level: 30,
					image: 'dfWgF',
					id: 1,
				},
			],
		};
	},
};
</script>

<style scoped>
.plantlist {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-content: flex-start;
}
</style>
