<template>
	<div class="container">
		<Status class="status"
			:playerName="playerName"
			:score="score" />
		<PlantInfo v-for="plant in plants" :plant="plant" :key="plant.id"/>
	</div>
</template>

<script>
// import data from '../data';
import PlantInfo from '@/components/PlantInfo.vue';
import Status from '../components/Status.vue';

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
					image: 'aseDf',
					id: 0,
				},
				{
					name: 'Tomato',
					health: 35,
					image: 'dfWgF',
					id: 1,
				},
			],
		};
	},
};
</script>

<style scoped>

</style>
