<template>
	<div class="app">
		<nav>
			<ul>
				<router-link tag="li" to="/">Dashboard</router-link>
				<router-link tag="li" to="/map">Map</router-link>
			</ul>
		</nav>
		<router-view/>
	</div>
</template>

<style scoped>

.app {
	width: 100%;
	height: 100%;
}

</style>
