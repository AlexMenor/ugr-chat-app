import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Welcome from "./components/Welcome.vue";
import Waiting from "./components/Waiting.vue";
import Chat from "./components/Chat.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Welcome },
    { path: "/waiting", component: Waiting },
    { path: "/chat", component: Chat }
  ]
});

export default router;
