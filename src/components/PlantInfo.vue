<template>
	<div class="infobox">
		<div class="image">
			<img :src="plant.image">
		</div>
		<div class="info">
			<div class="text">
				<h3 class="name">{{ plant.name }}</h3>
				<span class="lvl">Lvl {{ plant.level }}</span>
			</div>
			<ProgressBar :max="plant.expup" :value="plant.exp" />
		</div>
	</div>
</template>

<script>
import ProgressBar from './ProgressBar.vue';

export default {
	name: 'PlantInfo',
	components: { ProgressBar },
	props: {
		plant: {
			image: String,
			name: String,
			health: Number,
			level: Number,
		},
	},
};
</script>

<style scoped>
.infobox {
	background-color: #FFFFFF;

	font-family: "Nunito";
	font-style: normal;
	line-height: normal;
	color: #420B07;

	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;

	display: flex;
	flex-direction: column;
}

.image {
	width: 100%;
	flex: 1 1 auto;

	display: flex;
	justify-content: center;
	align-items: center;
}
.image img {
	max-width: 100%;
	max-height: 16rem;
}

.info {
	padding: 1rem;
}

.text {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.name {
	flex: 1 1;
	font-weight: bold;
	font-size: 1.25rem;
	margin: 0;

	word-break: break-word;
}

.lvl {
	flex: 0 0 auto;
	margin-left: 0.5rem;
	font-weight: 600;
	font-size: 0.875rem;
	line-height: inherit;
}
</style>
