import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/views/HomePage.vue";
import PartInfo from "@/core/PartInfo.vue";
import BrowseParts from "@/core/BrowseParts.vue";
import DroidArms from "@/core/DroidArms.vue";
import DroidHeads from "@/core/DroidHeads.vue";
import DroidBases from "@/core/DroidBases.vue";
import DroidTorsos from "@/core/DroidTorsos.vue";
import NotFound from "@/views/NotFound.vue";
import SidebarDefault from "@/sidebars/SidebarDefault.vue";
import MealGallery from "@/gallery/MealGallery.vue";
import LoginPage from "@/login/LoginPage.vue";
import PlanningBoard from "@/views/PlanningBoard.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: HomePage,
        sidebar: SidebarDefault
      }
    },
    {
      path: "/board",
      name: "Board",
      components: {
        default: PlanningBoard
      }
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage
    },
    // This must come before part info below
    {
      path: "/parts/browse",
      name: "BrowseParts",
      component: BrowseParts,
      children: [
        {
          name: "BrowseHeads",
          path: "heads",
          component: DroidHeads
        },
        {
          name: "BrowseArms",
          path: "arms",
          component: DroidArms
        },
        {
          name: "BrowseBases",
          path: "bases",
          component: DroidBases
        },
        {
          name: "BrowseTorsos",
          path: "torsos",
          component: DroidTorsos
        }
      ]
    },
    {
      path: "/parts/:partType/:id",
      name: "Parts",
      component: PartInfo,
      props: true,
      beforeEnter(to, _from, next) {
        const isValidId = !Number.isNaN(+to.params.id);
        if (isValidId) {
          next();
        } else {
          next({ name: "Build" });
        }
      }
    },
    {
      path: "/gallery",
      name: "MealGallery",
      component: MealGallery
    }
  ]
});

// router.beforeEach((to, _from, next) => {
//   const publicPages = ["/login", "/"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("token");

//   if (authRequired && !loggedIn) {
//     console.log(to.name);
//     next({ name: "LoginPage", query: { redirect: to.name } });
//   } else {
//     next();
//   }
// });
