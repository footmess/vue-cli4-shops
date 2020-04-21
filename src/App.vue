<template>
	<div id="app">
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
		this.showApp()
	},
	methods: {
		showApp() {
			// const { PAGE_START_TIME } = window
			const PAGE_END_TIME = new Date()
      const diffTime = PAGE_END_TIME - PAGE_START_TIME
      const blank = PAGE_START_TIME - performance.timing.navigationStart
      console.log(diffTime,{blank})
			const timer = setTimeout(
				() => {
					clearInterval(timer)
					document.querySelector('.app-loading').className +=
						' app-loading-hide'
				},
				diffTime > 2000 ? 0 : 2000 - diffTime
			)
		}
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
</style>
