import { createRouter, createWebHistory } from "vue-router";
import ChatPage from "@/views/ChatPage.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: "/",
    component: ChatPage,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
