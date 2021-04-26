import Built from "@/common/built"; //TODO: Move out from common to store
import { MutationTree } from "vuex";
import { GalleryState } from "./types";

export const mutations: MutationTree<GalleryState> = {
  addDroidToGallery(state, droid: Built) {
    state.gallery?.builtDroids.push(droid);
  }
};
