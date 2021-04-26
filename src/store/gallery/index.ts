import { Module } from "vuex";
import { getters } from "./getters";
// import { actions } from "./actions";
import { mutations } from "./mutations";
import { GalleryState } from "@/store/gallery/types";
import { RootState } from "@/types";
import Built from "@/common/built";

export const state: GalleryState = {
  gallery: { builtDroids: [] as Built[] }
};

const namespaced = true;

export const gallery: Module<GalleryState, RootState> = {
  namespaced,
  state,
  getters,
  // actions,
  mutations
};
