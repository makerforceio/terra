<template>
	<div class="container">
		<Status class="status"
			:playerName="playerName"
			:avatarURL="avatarURL"
			:score="score" />
		<div class="plantlist">
			<PlantInfo
				v-for="plant in plants" :key="plant.id"
				@click.native="$router.push({ name: 'plant', params: { id: plant.id } })"
				class="plant" :plant="plant" />
		</div>
	</div>
</template>

<script>
import data from '../data';
// eslint-disable-next-line
import testdata from '../testdata';
import Requests from '../requests';
import PlantInfo from '@/components/PlantInfo.vue';
import Status from '@/components/Status.vue';

const requests = new Requests('http://localhost:9000');

export default {
	name: 'Overview',
	components: {
		PlantInfo,
		Status,
	},
	created() {
		requests.WATCH('/', (data) => {
			const plantData = this.plants.find(plant => plant.id === data.id);
			console.log(plantData.current_moisture);
			const i = this.plants.findIndex(plant => plant.id === data.id);
			plantData.current_moisture = data.moisture;
			plantData.current_light = data.light;
			plantData.current_temperature = data.temperature;
			this.plants.splice(i, 1, plantData);
		});

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
			this.plants = res.rows.map(row => row.doc)
				.map(doc => ({
					// eslint-disable-next-line
															id: doc._id,
					name: doc.name,
					type: doc.type, // Type of plant (name can be custom-set)
					description: doc.description,
					health: doc.health,
					recommended_moisture: doc.recommended_moisture,
					recommended_light: doc.recommended_light,
					recommended_temperature: doc.recommended_temperature,
					current_moisture: doc.current_moisture,
					current_light: doc.current_light,
					current_temperature: doc.current_temperature,
					// image: URL.createObjectURL(doc._attachments.image.data),
					image: doc.image,
					level: doc.level,
					exp: doc.exp,
					expup: doc.expup,
				}));
		}).catch(console.error);
	},
	data() {
		return {
			playerName: '',
			avatarURL: './assets/logo.png',
			score: 0,
			plants: [],
		};
	},
};
</script>

<style scoped>
.container {
	background: #ECFFF7;
}
.plantlist {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1rem;
	margin: 1rem;
}
.plant {
	width: 100%;
}
</style>
