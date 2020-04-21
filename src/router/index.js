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
		path: '/topic/create',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/topic/:id',
		name: 'Topic',
		component: () => import(/* webpackChunkName: "create" */ '../views/Topic.vue')
	},
	{
		path: '/my/messages',
		name: 'Message',
		component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue')
	},
	{
		path: '/user/info',
		name: 'Info',
		component: () => import(/* webpackChunkName: "Info" */ '../views/Info.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
	},
	{
		path: '/logout',
		name: 'Logout',
		component: () => import(/* webpackChunkName: "Logout" */ '../views/Logout.vue')
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
