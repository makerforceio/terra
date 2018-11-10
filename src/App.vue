<template>
	<div class="app">
		<!--
		<nav>
			<ul>
				<router-link tag="li" to="/" exact>Dashboard</router-link>
				<router-link tag="li" to="/map">Map</router-link>
			</ul>
		</nav>
		-->
		<router-view/>
		<router-link class="fab map" to="/" v-if="$route.path == '/map'">
			<font-awesome-icon icon="times" />
		</router-link>
		<router-link class="fab close" to="/map" v-else>
			<font-awesome-icon icon="map-marked" />
		</router-link>
	</div>
</template>

<style scoped>

.app {
	background: #ECFFF7;
	color: #1D0F00;
	font-family: "Nunito";
	min-height: 100vh;
}

nav {
	position: sticky;
	top: 0;
}

ul {
	margin: 0;
	padding-left: 0;
	display: flex;
	list-style: none;
}
li {
	flex: 1;
	text-align: center;
	padding: 0.6rem;
	display: block;

	border: 2px solid #000;
}
li.router-link-active {
	background: #444;
	border-bottom-color: #080;
}

.fab {
	position: fixed;
	bottom: 1rem;
	right: 1rem;

	width: 4rem;
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;

	box-shadow: 0.0625rem 0.125rem 0.5rem rgba(0, 0, 0, 0.25);
	background: linear-gradient(180deg, #D44941 0%, #B33D37 100%);
	border-radius: 50%;

	color: #FFFFFF;
	font-size: 2rem;
}

</style>
