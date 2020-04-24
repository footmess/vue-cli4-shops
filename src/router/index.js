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
		path: '/index',
		name: 'Index',
		// {}外面加上()表示这是一个对象而不是代码块
		props: (route) => ({
			queryA: route.query.tab,
			custom: 123,
			pathName: route.name
		}),
		component: () => import(/* webpackChunkName: "Index" */ '../views/Index.vue')
	},
	{
		path: '/topic/create',
		name: 'TopicCreate',
		props: (route) => ({
			queryA: route.query.tab,
			custom: 123,
			pathName: route.name
		}),
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/topic/:id',
		name: 'Topic',
		props: (route) => ({
			queryA: route.query.tab,
			custom: 123,
			pathName: route.name
		}),
		component: () => import(/* webpackChunkName: "create" */ '../views/Topic.vue')
	},
	{
		path: '/my/messages',
		name: 'Message',
		props: (route) => ({
			queryA: route.query.tab,
			custom: 123,
			pathName: route.name
		}),
		component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue')
	},
	{
		path: '/user/info',
		name: 'Info',
		props: (route) => ({
			queryA: route.query.tab,
			custom: 123,
			pathName: route.name
		}),
		component: () => import(/* webpackChunkName: "Info" */ '../views/Info.vue')
	},
	{
		path: '/login',
		name: 'Login',
		props: (route) => ({
			queryA: route.query.tab,
			custom: 123,
			pathName: route.name
		}),
		component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
	},
	{
		path: '/logout',
		name: 'Logout',
		props: (route) => ({
			queryA: route.query.tab,
			custom: 123,
			pathName: route.name
		}),
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
