import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/Home.vue";
import HomeDashboard from "@/pages/HomeDashboard.vue";
import RegisteredUser from "@/Layouts/RegisteredUser.vue";
import UnRegisteredUser from "@/Layouts/UnRegisteredUser.vue";

const routes = [
  {
    path: "/",
    component: UnRegisteredUser,
    children: [
      {
        path: "",
        component: HomePage,
      },
    ],
  },
  {
    path: "/home-dashboard",
    component: RegisteredUser,
    children: [
      {
        path: "",
        component: HomeDashboard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
