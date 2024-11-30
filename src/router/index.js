import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ProjectPage from "../components/ProjectPage.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/project", name: "ProjectPage", component: ProjectPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
