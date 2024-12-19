import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobOfferView from "@/views/JobOfferView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/jobs",
      name: "jobs",
      component: JobView,
    },

    {
      path: "/jobs/:id",
      name: "job",
      component: JobOfferView,
    },

    {
      path: "/jobs/add",
      name: "addJob",
      component: AddJobView,
    },

    {
      path: "/jobs/edit/:id",
      name: "editJob",
      component: EditJobView,
    },

    {
      path: "/:catchAll(.*)",
      name: "Not Found",
      component: NotFoundView,
    },
  ],
});

export default router;
