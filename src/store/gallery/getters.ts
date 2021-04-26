import { GetterTree } from "vuex";
import { GalleryState } from "./types";
import { RootState } from "@/types";
import Built from "@/common/built";

export const getters: GetterTree<GalleryState, RootState> = {
  builtDroids(state): Built[] {
    const { gallery } = state;
    return gallery?.builtDroids ?? [];
  }
};
