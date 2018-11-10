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
  height: 10px;
}

progress[value]::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}

progress[value]::-webkit-progress-value {
		border-radius: 5px;
		background-size: 35px 20px, 100% 100%, 100% 100%;
}

progress-50::-webkit-progress-value {
	background-color: red;
}

progress-100::-webkit-progress-value {
	background-color: green;
}

</style>
