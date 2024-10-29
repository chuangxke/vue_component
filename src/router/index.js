import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Demo from "../components/Demo.vue";
const routes = [
  {
    path: "/",
    component: HelloWorld,
    name: "basic",
  },
  {
    path: "/stu",
    component: HelloWorld,
    name: "basic",
  },
  { path: "/demo", component: Demo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default { router };
