<template>
	<div class="infobox">
		<img :src="plant.image">
		<div class="info">
			<h3 class="name">{{ plant.name }}<span class="lvl">Lvl {{ plant.level }}</span></h3>
			<progress max="100" :value="plant.health"></progress>
		</div>
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
	background-color: #FFFFFF;
	position: relative;
	width: 47.22%;
	height: 10rem;

	font-family: "Nunito";
	font-style: normal;
	line-height: normal;
	color: #420B07;

	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
}

img {
	position: absolute;
	top: 0;
	bottom: 30%;
	max-width: 100%;
	max-height: 70%;
}

.info {
	position: absolute;
	height: 30%;
	left: 0.5rem;
	right: 0.5rem;
	bottom: 0.5rem;
}

.name {
	font-weight: bold;
	font-size: 1.25rem;
	margin: 0;
}

.lvl {
	position: absolute;
	top: 0.25rem;
	right: 0;
	text-align: right;

	font-weight: 600;
	font-size: 0.875rem;
	line-height: inherit;
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
