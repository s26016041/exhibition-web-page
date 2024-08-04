import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../IndexPage.vue";
import DollHousePage from "../DollHousePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: IndexPage,
  },
  {
    path: "/doll-house",
    name: "doll-house",
    component: DollHousePage,
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 history 模式
  routes,
});

export default router;
