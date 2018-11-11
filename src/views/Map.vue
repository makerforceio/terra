<template>
	<div class="map">
		<div class="meme"></div>
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
		for (let i = 1; i <= 5; i += 1) {
			this.map.loadImage(`/users/user-${i}.png`, (err, image) => {
				if (err) throw err;
				this.map.addImage(`user-${i}`, image);
			});
		}
		this.map.on('load', () => {
			this.map.addLayer({
				id: 'points',
				type: 'symbol',
				source: {
					type: 'geojson',
					data: {
						type: 'FeatureCollection',
						features: [
							{
								type: 'Feature',
								properties: {
									description: 'You',
									icon: 'user-1',
								},
								geometry: {
									type: 'Point',
									coordinates: [
										103.7779712677002,
										1.3031515342080502,
									],
								},
							},
							{
								type: 'Feature',
								properties: {
									description: 'Alison',
									icon: 'user-2',
								},
								geometry: {
									type: 'Point',
									coordinates: [
										103.77654433250426,
										1.3039452626082444,
									],
								},
							},
							{
								type: 'Feature',
								properties: {
									description: 'Solderneer',
									icon: 'user-3',
								},
								geometry: {
									type: 'Point',
									coordinates: [
										103.77538561820984,
										1.3042992224897965,
									],
								},
							},
							{
								type: 'Feature',
								properties: {
									description: 'Ambrose Chua',
									icon: 'user-4',
								},
								geometry: {
									type: 'Point',
									coordinates: [
										103.7764048576355,
										1.3053074715764539,
									],
								},
							},
							{
								type: 'Feature',
								properties: {
									description: 'Ambrose Chua',
									icon: 'user-5',
								},
								geometry: {
									type: 'Point',
									coordinates: [
										103.77560019493103,
										1.3063586244491103,
									],
								},
							},
						],
					},

				},
				layout: {
					'icon-image': '{icon}',
					'icon-size': 0.2,

					'text-field': '{title}',
					'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
					'text-offset': [0, 0.6],
					'text-anchor': 'top',
				},
			});
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
