import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
    // 嵌套路由，以/开头的嵌套路径会被当作根路径，所以children的path不用加/
    children: [
      {
        path: "/",
        name: "Index",
        // {}外面加上()表示这是一个对象而不是代码块
        props: route => ({
          tab: route.query.tab || "",
          customLimit: route.query.limit || "20",
          customPage: route.query.page || "1",
          pathName: route.name
        }),
        meta: { auth: false },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "Index" */ "../views/Index.vue")
      },
      {
        path: "login",
        name: "Login",
        meta: { auth: false },
        component: () =>
          import(/* webpackChunkName: "Login" */ "../views/Login.vue")
      },
      {
        path: "logout",
        name: "Logout",
        component: () =>
          import(/* webpackChunkName: "Logout" */ "../views/Logout.vue")
      },
      {
        path: "about",
        name: "About",
        meta: { auth: false },
        component: () =>
          import(/* webpackChunkName: "About" */ "../views/About.vue")
      },
      {
        path: "topic/create",
        name: "TopicCreate",
        props: route => ({
          queryA: route.query.tab,
          custom: 123,
          pathName: route.name
        }),
        meta: { auth: false },
        component: () =>
          import(
            /* webpackChunkName: "TopicCreate" */ "../views/TopicCreate.vue"
          )
      },
      {
        path: "topic/:id",
        name: "TopicDetail",
        props: route => ({
          queryA: route.query.tab,
          custom: 123,
          pathName: route.name
        }),
        meta: { auth: false },
        component: () =>
          import(
            /* webpackChunkName: "TopicDetail" */ "../views/TopicDetail.vue"
          )
      },
      {
        path: "my/messages",
        name: "Message",
        meta: { auth: false },
        component: () =>
          import(/* webpackChunkName: "Message" */ "../views/Message.vue")
      },
      {
        path: "my/home",
        name: "MyHome",
        meta: { auth: false },
        component: () =>
          import(/* webpackChunkName: "MyHome" */ "../views/MyHome.vue")
      },
      {
        path: "user/info",
        name: "Info",
        meta: { auth: false },
        component: () =>
          import(/* webpackChunkName: "Info" */ "../views/Info.vue")
      },
      {
        path: "*",
        name: "NotFound",
        component: () =>
          import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
        meta: { "http-equiv": "refresh", content: 1000, url: "/index" }
        // redirect: (to) => {
        // 	return '/login';
        // }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // base: '/d',
  // linkActiveClass: 'custom-link-active',
  routes
});

export default router;
