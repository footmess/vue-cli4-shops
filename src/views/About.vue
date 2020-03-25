<template>
	<div class="about">
		<h1>This is an about page</h1>
		<p>This is an test cssnext p</p>
	</div>
</template>
<style lang="postcss" scoped>
:root {
 --text-color: black;
}
 
.about {
 background-color: var(--text-color);
}
:root {
	--themeColor: #ffc001;
	--opx: 10px;
	--fontCommon: {
		font-size: 16px;
		font-family: '微软雅黑';
	}
}
.about {
	height: 100px;
	/* background-color: var(--themeColor); */
	padding: var(--opx);
	@apply --fontCommon;
}
.about h1 {
	font-family: '宋体';
}
.about p {
	font-size: calc(var(--opx) * 2);
}
</style>
