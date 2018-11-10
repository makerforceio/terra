<template>
	<div class="map">
		<div id="mapbox"></div>
	</div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
	mounted() {
		mapboxgl.accessToken = 'pk.eyJ1IjoidGhlcGxhbnRnYW1lIiwiYSI6ImNqb2Jqd214MzBiNnkzcXA1YXU0cWx3ZDgifQ.BaZCvQ3cRbKIlAnXdFuEdA';
		this.map = new mapboxgl.Map({
			container: 'mapbox',
			style: 'mapbox://styles/theplantgame/cjobk62y62bch2rs07qtfiaqs',
			center: [103.7776456, 1.3033084],
			zoom: 16.0,
		});
	},
	beforeDestroy() {
		this.map.remove();
	},
};
</script>

<style scoped>

.map, #mapbox {
	width: 100vw;
	height: 100vh;
}

</style>
