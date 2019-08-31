import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);

import Welcome from "./components/Welcome.vue";
import Waiting from "./components/Waiting.vue";
import Chat from "./components/Chat.vue";
import NotFound from "./components/NotFound.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Welcome },
    { path: "/waiting", component: Waiting },
    { path: "/chat", component: Chat },
    { path: "*", component: NotFound }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/chat") {
    if (store.getters.isMatched) next();
    else next("/");
  } else if (to.path === "/waiting") {
    if (store.getters.hasJoined) next();
    else next("/");
  } else next();
});

export default router;
