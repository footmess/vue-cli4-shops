<template>
	<div id="app">
		<!-- <div
			class="custom-style bg-gray-200 min-h-screen p-8 flex items-center justify-center"
		>
			<div class="box-border md:box-content">12351515</div>
		</div> -->
		<!-- <keep-alive> 是用在其一个直属的子组件被开关的情形 
			如果你在其中有 v-for 则不会工作 -->
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
	overflow: hidden;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 2;
	max-width: 640px;
	margin: auto;
	font-size: 13px;
	background: #fff;
	-webkit-tap-highlight-color: transparent;
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
