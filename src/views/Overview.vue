<template>
	<div class="container">
		<Status class="status" />
	</div>
</template>

<script>
import Status from '../components/Status.vue';

export default {
	name: 'Overview',
	components: {
		Status,
	},
	data() {
		return {
			plantlist: [
				{ name: 'Cucumber', health: 50, image: 'aseDf' },
				{ name: 'Tomato', health: 35, image: 'dfWgF' },
			],
		};
	},
};
</script>

<style scoped>
	.status {
		margin-top: 2%;
	}
</style>
