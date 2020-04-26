<template>
	<div class="notfound">
		<p>访问的页面不见了，{{ num }}秒后自动返回首页</p>
	</div>
</template>

<script>
let setIntervalID
export default {
	data() {
		return {
			num: 5
		}
	},
	mounted() {
		this.countdown()
	},
	methods: {
		countdown() {
			setIntervalID = setInterval(() => {
				if (this.num > 1) {
					this.num--
				} else {
                    clearInterval(setIntervalID)
                    this.$router.push({ name: 'Index' })
					return
				}
			}, 1000)
		}
	},
	beforeRouteEnter(to, from, next) {
		//does NOT have access to `this` component instance
		if (to.meta['http-equiv'] && to.meta.url) {
			// let head = document.querySelector('head')
			// let meta = document.createElement('meta')
			// meta.httpEquiv = to.meta['http-equiv']
			// meta.content = to.meta.content
			// meta.URL = to.meta.url
			// console.log({head,meta})
			// head.append(meta)
		}
		next(vm => {
			console.log({ vm })
			// vm.$router.push({path:'/'})
		})
	}
}
</script>

<style lang="postcss" scoped>
</style>>
