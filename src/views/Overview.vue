<template>
	<div class="container">
		<Status class="status"
			:playerName="playerName"
			:avatarURL="avatarURL"
			:score="score" />
		<div class="plantlist">
			<PlantInfo v-for="plant in plants" :plant="plant" :key="plant.id"/>
		</div>
	</div>
</template>

<script>
import data from '../data';
import PlantInfo from '@/components/PlantInfo.vue';
import Status from '@/components/Status.vue';

export default {
	name: 'Overview',
	components: {
		PlantInfo,
		Status,
	},
	created() {
		data.get('player').then((player) => {
			this.playerName = player.name;
			this.score = player.score;
			return data.getAttachment('player', 'avatar');
		}).then((blob) => {
			this.avatarURL = URL.createObjectURL(blob);
		}).catch((err) => {
			console.log(err);
		});
	},
	data() {
		return {
			playerName: '',
			avatarURL: './assets/logo.png',
			score: 0,
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
