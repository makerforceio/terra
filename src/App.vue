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
			<router-link class="fab map" to="/map"><i class="fal fa-map"></i></router-link>
	</div>
</template>

<style scoped>

.app {
	background: #000;
	color: #fff;
	font-family: monospace;
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

</style>
