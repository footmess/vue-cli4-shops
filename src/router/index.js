import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '*',
		name: 'NotFound',
		component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue'),
		meta: { 'http-equiv': 'refresh', content: 1000, url: '/' }
		// redirect: (to) => {
		// 	return '/about';
		// }
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	// base: '/d',
	// linkActiveClass: 'custom-link-active',
	routes
});

export default router;
