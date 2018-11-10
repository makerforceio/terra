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
// eslint-disable-next-line
import testdata from '../testdata';
import PlantInfo from '@/components/PlantInfo.vue';
import Status from '@/components/Status.vue';

export default {
	name: 'Overview',
	components: {
		PlantInfo,
		Status,
	},
	created() {
		data.playerDB.get('player').then((player) => {
			this.playerName = player.name;
			this.score = player.score;
			return data.playerDB.getAttachment('player', 'avatar');
		}).then((blob) => {
			this.avatarURL = URL.createObjectURL(blob);
		}).catch(console.error);

		data.plantsDB.allDocs({
			include_docs: true,
			attachments: true,
		}).then((res) => {
			this.plants = res.rows.map(row => row.doc).map(doc => ({
				name: doc.name,
				health: doc.health,
				// image: URL.createObjectURL(doc._attachments.image.data),
				image: doc.image,
				level: doc.level,
				// eslint-disable-next-line
				id: doc._id,
				type: doc.type, // Type of plant (name can be custom-set)
			}));
		}).catch(console.error);
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
