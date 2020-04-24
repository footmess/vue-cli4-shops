<template>
	<div>
		<base-nav :query="queryA" />
		<main-content />
		<base-footer :pathname="pathName"/>
	</div>
</template>

<script>
import BaseNav from '@/components/BaseNav'
import BaseFooter from '@/components/BaseFooter'
import MainContent from '@/components/MainContent'
export default {
	props: {
		queryA: {
			type: String,
			default: ''
		},
        custom: Number,
        pathName: String
	},
	components: {
		BaseNav,
		BaseFooter,
		MainContent
    },
    mounted(){
        console.log(this.pathName)
    }
}
</script>

<style lang="scss" scoped>
</style>