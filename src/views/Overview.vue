<template>
	<div class="container">
		<PlantInfo v-for="plant in plants"
		:key="plant.id"
		:name="plant.name"
		:health="plant.health"
		:image="plant.image"/>
	</div>
</template>

<script>
import PlantInfo from '@/components/PlantInfo.vue';

export default {
	name: 'Overview',
	components: {
		PlantInfo,
	},
	data() {
		return {
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
