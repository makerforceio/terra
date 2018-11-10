import Vue from 'vue';
import Router from 'vue-router';
import Overview from './views/Overview.vue';
import Plant from './views/Plant.vue';
import Map from './views/Map.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'overview',
			component: Overview,
		},
		{
			path: '/plant/:id',
			name: 'plant',
			component: Plant,
		},
		{
			path: '/map',
			name: 'map',
			component: Map,
		},
	],
});
