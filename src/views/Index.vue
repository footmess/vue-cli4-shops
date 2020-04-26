<template>
	<section>
		<div v-show="!isLoading">
			<base-nav :query="params.tab" />
			<main-content :list="list" @infinite-load="getData" />
			<base-footer :pathname="pathName" />
		</div>
		<base-loading v-show="isLoading" />
	</section>
</template>

<script>
import BaseNav from '@/components/BaseNav'
import BaseFooter from '@/components/BaseFooter'
import MainContent from '@/components/MainContent'
import BaseLoading from '@/components/BaseLoading'
import { mapState } from 'vuex'
export default {
	props: {
		tab: {
			type: String,
			default: ''
		},
		customLimit: {
			type: String,
			default: '20'
		},
		customPage: {
			type: String,
			default: '1'
		},
		pathName: String
	},
	components: {
		BaseNav,
		BaseFooter,
		BaseLoading,
		MainContent
	},
	data() {
		return {
			// 列表
			list: [],
			// 数据正在加载中
			loading: true,
			// 是否全部加载完
			done: false,
			// 请求参数
			params: {
				tab: this.tab || '',
				mdrender: false,
				limit: this.customLimit,
				// 页数
				page: this.customPage
			}
		}
	},
	computed: {
		...mapState(['isLoading'])
	},
	created() {
		this.getData()
		console.log(this.pathName)
	},
	beforeRouteUpdate(to, from, next) {
		this.params = {
			tab: to.query.tab,
			mdrender: false,
			limit: to.query.customLimit || '20',
			page: to.query.customPage || '1'
		}
		this.list = []
		this.isLoading = true
		this.getData()
		this.isLoading = false
		next()
	},
	methods: {
		async getData() {
			const data = await this.$http.get('/topics', {
				params: this.params
			})
			this.list = [...this.list, ...data]
			this.params.page++
			this.loading = false
			this.done = data.length < 20
			this.isLoading = false
			console.log(this.list)
		}
	}
}
</script>

<style lang="scss" scoped>
</style>