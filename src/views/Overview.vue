<template>
	<div class="container">
		<Status class="status"
			:playerName="playerName"
			:score="score" />
	</div>
</template>

<script>
// import data from '../data';
import Status from '../components/Status.vue';

export default {
	name: 'Overview',
	components: {
		Status,
	},
	created() {
	},
	data() {
		return {
			playerName: '',
			score: '',
			plantlist: [
				{ name: 'Cucumber', health: 50, image: 'aseDf' },
				{ name: 'Tomato', health: 35, image: 'dfWgF' },
			],
		};
	},
};
</script>

<style scoped>

</style>
