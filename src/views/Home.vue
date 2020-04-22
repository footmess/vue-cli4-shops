<template>
	<div class="app-loading">
		<div class="box">
			<div class="line-spin-fade-loader" v-if="isShowLoading">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<h2>vue-cnode</h2>
			<p>中国最专业的Node.j开源社区</p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {
		HelloWorld
	},
	data() {
		return {
			isShowLoading: true
		}
	},
	mounted() {
		this.showApp()
	},
	methods: {
		showApp() {
			const PAGE_END_TIME = new Date()
			// const diffTime = PAGE_END_TIME - PAGE_START_TIME
			const blank = PAGE_END_TIME - performance.timing.navigationStart
			console.log({ blank })
			console.log({ performance: performance.now() })
			const timer = setTimeout(
				() => {
					clearInterval(timer)
					document.querySelector('.app-loading').className +=
						' app-loading-hide'
				},
				blank > 2000 ? 0 : 2000 - blank
			)
		}
	}
}
</script>

<style lang="scss" scoped>
.app-loading {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 9999;
	max-width: 640px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;
	background-color: #80bd01;
	.box {
		width: 400px;
		height: 200px;
		text-align: center;
    color: white;
    .line-spin-fade-loader {
      position: relative;
      width: 0;
      margin: auto;
      div {
        width: 4px;
        height: 35px;
        background-color: #fff;
        border-radius: 2px;
        margin: 2px;
        animation-fill-mode: both;
        position: absolute;
        left: 5px;
        height: 15px;
      }
    }
    h2 {
      margin-top: 50px;
      line-height: 70px;
      font-size: 40px;
    }
	}
}
.app-loading-hide {
	left: 120%;
	bottom: 120%;
	opacity: 0;
}
@keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>
