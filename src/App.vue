<template>
	<div id="app">
		<div
			class="custom-style bg-gray-200 min-h-screen p-8 flex items-center justify-center"
		>
			<div class="box-border md:box-content">12351515</div>
		</div>
		<!-- <div id="nav">
			<router-link to="/" exact>Home</router-link> |
			<router-link to="/about" append exact>About</router-link> |
			<router-link
				to="/foo"
				v-slot="{ href, route, navigate, isActive, isExactActive }"
				exact
			>
				<li :class="[isActive, isExactActive]">
					<a :href="href" @click="navigate">{{ route.fullPath }}</a>
				</li>
			</router-link>
		</div> -->
		<transition>
			<keep-alive>
				<router-view />
			</keep-alive>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {}
	},
	mounted() {
		console.log({ performanceB: performance.now() })
	}
}
</script>

<style lang="postcss" scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
.custom-style {
	color: red;
}
</style>
