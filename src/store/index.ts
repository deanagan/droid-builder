import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/types";
import { profile } from "@/store/profile/index";
import { gallery } from "@/store/gallery/index";

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     gallery: [] as Built[]
//   },
//   mutations: {
//     addDroidToGallery(state, droid) {
//       state.gallery.push(droid);
//     }
//   }
// });

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: {
    profile,
    gallery
  }
};

export default new Vuex.Store<RootState>(store);
