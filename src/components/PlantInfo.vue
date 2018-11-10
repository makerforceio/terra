<template>
	<div class="infobox">
		<img :src="plant.image" class="character">
		<h3 class="name">{{ plant.name }}</h3>
		<h3 class="lvl">Lvl {{ plant.level }}</h3>
		<h4 class="health">Health:</h4>
		<progress max="100" :value="plant.health"></progress>
	</div>
</template>

<script>
export default {
	name: 'PlantInfo',
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
	width: 40vw;
	height: 40vw;
	padding: 10px;
}

.character {
	max-width: 20%;
	max-height: 20%;
}

.img {
	width: 100px;
}

.lvl, .name {
	display: inline-block;
	margin: 0px;
}

.lvl {
	float: right;
}

.health {
	margin: 10px 0px 0px 0px;
}

progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  height: 0.6rem;
}

progress[value]::-webkit-progress-bar {
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0.1rem 0.2rem 0.6rem rgba(0, 0, 0, 0.25) inset;
}

progress[value]::-webkit-progress-value {
	border-radius: 0.5rem;
	background: linear-gradient(#75FF7D, #20FF2C);
	background-repeat: repeat-y;
}

</style>
